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
var rolebinding_service_1 = require("../../../logic-service/rolebinding.service");
var rolebinding_1 = require("../../../logic-service/models/rolebinding");
var role_1 = require("../../../logic-service/models/role");
var common_1 = require("../../../logic-service/models/common");
var CreateBindingComponent = (function () {
    function CreateBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.viewAdditionalField = false;
        this.isInformationOutput = false;
        this.isInformationError = false;
    }
    CreateBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    CreateBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    CreateBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleBindingDto.name = productForm.value.name;
        this.roleBindingDto.nameRef = productForm.value.nameRef;
        this.roleBindingDto.namespace = productForm.value.namespace;
        this.roleBindingDto.subjectRules = productForm.value.subjectRules;
        var subjectRules = [];
        for (var i = 0; i < this.roleBindingDto.subjectRules.length; i++) {
            subjectRules.push(new rolebinding_1.Subject(this.roleBindingDto.subjectRules[i].apiGroup, this.roleBindingDto.subjectRules[i].kind, this.roleBindingDto.subjectRules[i].name, this.roleBindingDto.subjectRules[i].namespace));
        }
        var roleRef = new role_1.RoleRef(this.roleBindingDto.apiGroup, "ClusterRole", this.roleBindingDto.nameRef);
        var rolebinding = new rolebinding_1.RoleBinding(new common_1.TypeMeta("ClusterRoleBinding", this.roleBindingDto.apiVersion), new role_1.ObjectMeta(this.roleBindingDto.name, this.roleBindingDto.namespace), subjectRules, roleRef);
        this.service.createRole(rolebinding)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.isInformationError = false;
            if (typeof _this.responseRole == "string") {
                _this.isInformationError = true;
            }
            _this.isInformationOutput = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    CreateBindingComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    CreateBindingComponent.prototype.initForm = function () {
        this.roleBindingDto = new rolebinding_1.RoleBindingDto();
        this.productForm.patchValue(this.roleBindingDto);
    };
    CreateBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            namespace: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            nameRef: ["", forms_1.Validators.required],
            subjectRules: this.fb.array([
                this.initSubject(),
            ])
        });
    };
    CreateBindingComponent.prototype.initSubject = function () {
        return this.fb.group({
            apiGroup: ["",],
            kind: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            namespace: ["",]
        });
    };
    CreateBindingComponent.prototype.addSubjectRules = function () {
        var control = this.productForm.controls['subjectRules'];
        control.push(this.initSubject());
    };
    CreateBindingComponent.prototype.removeSubjectRules = function (i) {
        var control = this.productForm.controls['subjectRules'];
        control.removeAt(i);
    };
    return CreateBindingComponent;
}());
CreateBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "create",
        templateUrl: "createBinding.component.html",
    }),
    __metadata("design:paramtypes", [rolebinding_service_1.RoleBindingService,
        forms_1.FormBuilder])
], CreateBindingComponent);
exports.CreateBindingComponent = CreateBindingComponent;
//# sourceMappingURL=createBinding.component.js.map