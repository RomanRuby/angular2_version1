"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var clusterrolebinding_service_1 = require("../../../logic-service/clusterrolebinding.service");
var rolebinding_1 = require("../../../logic-service/models/rolebinding");
var role_1 = require("../../../logic-service/models/role");
var common_1 = require("../../../logic-service/models/common");
var CreateClusterBindingComponent = (function () {
    function CreateClusterBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.viewAdditionalField = false;
        this.type = false;
        this.responseValue = true;
    }
    CreateClusterBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    CreateClusterBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    CreateClusterBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleBindingDto.namespace = productForm.value.namespace;
        this.roleBindingDto.name = productForm.value.name;
        this.roleBindingDto.kind = productForm.value.kind;
        this.roleBindingDto.subjectRules = productForm.value.subjectRules;
        this.roleBindingDto.generateName = productForm.value.generateName;
        this.roleBindingDto.nameRef = productForm.value.nameRef;
        var subjectRules = [];
        for (var i = 0; i < this.roleBindingDto.subjectRules.length; i++) {
            subjectRules.push(new rolebinding_1.Subject(this.roleBindingDto.subjectRules[i].apiGroup, this.roleBindingDto.subjectRules[i].kind, this.roleBindingDto.subjectRules[i].name, this.roleBindingDto.subjectRules[i].namespace));
        }
        var roleRef = new role_1.RoleRef(this.roleBindingDto.apiGroup, "ClusterRole", this.roleBindingDto.nameRef);
        var rolebinding = new rolebinding_1.RoleBinding(new common_1.TypeMeta("ClusterRoleBinding", this.roleBindingDto.apiVersion), new role_1.ObjectMeta(this.roleBindingDto.name, this.roleBindingDto.namespace), subjectRules, roleRef);
        this.service.createRole(rolebinding)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.responseValue = typeof _this.responseRole != "string";
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    CreateClusterBindingComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    CreateClusterBindingComponent.prototype.initForm = function () {
        this.roleBindingDto = new rolebinding_1.RoleBindingDto();
        this.productForm.patchValue(this.roleBindingDto);
    };
    CreateClusterBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            nameRef: ["", forms_1.Validators.required],
            subjectRules: this.fb.array([
                this.initSubject(),
            ])
        });
    };
    CreateClusterBindingComponent.prototype.initSubject = function () {
        return this.fb.group({
            apiGroup: ["",],
            kind: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            namespace: ["",]
        });
    };
    CreateClusterBindingComponent.prototype.addSubjectRules = function () {
        var control = this.productForm.controls['subjectRules'];
        control.push(this.initSubject());
    };
    CreateClusterBindingComponent.prototype.removeSubjectRules = function (i) {
        var control = this.productForm.controls['subjectRules'];
        control.removeAt(i);
    };
    return CreateClusterBindingComponent;
}());
CreateClusterBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "create",
        templateUrl: "createClusterBinding.component.html",
    }),
    __metadata("design:paramtypes", [clusterrolebinding_service_1.ClusterRoleBindingService,
        forms_1.FormBuilder])
], CreateClusterBindingComponent);
exports.CreateClusterBindingComponent = CreateClusterBindingComponent;
//# sourceMappingURL=createClusterBinding.component.js.map