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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var roles_1 = require("../../../logic-service/roles");
var clusterrolebinding_service_1 = require("../../../logic-service/clusterrolebinding.service");
var CreateBindingComponent = (function () {
    function CreateBindingComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    CreateBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    CreateBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    CreateBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleBindingDto.namespace = productForm.value.namespace;
        this.roleBindingDto.name = productForm.value.name;
        this.roleBindingDto.kind = productForm.value.kind;
        this.roleBindingDto.subjectRules = productForm.value.subjectRules;
        this.roleBindingDto.apiGroup = productForm.value.apiGroup;
        this.roleBindingDto.apiVersion = productForm.value.apiVersion;
        this.roleBindingDto.generateName = productForm.value.generateName;
        this.roleBindingDto.kindRef = productForm.value.kindRef;
        this.roleBindingDto.nameRef = productForm.value.nameRef;
        var subjectRules = [];
        for (var i = 0; i < this.roleBindingDto.subjectRules.length; i++) {
            subjectRules.push(new roles_1.Subject(this.roleBindingDto.subjectRules[i].apiGroup, this.roleBindingDto.subjectRules[i].kind, this.roleBindingDto.subjectRules[i].name, this.roleBindingDto.subjectRules[i].namespace));
        }
        var roleRef = new roles_1.RoleRef(this.roleBindingDto.apiGroup, this.roleBindingDto.kindRef, this.roleBindingDto.nameRef);
        var rolebinding = new roles_1.RoleBinding(new roles_1.TypeMeta(this.roleBindingDto.kind, this.roleBindingDto.apiVersion), new roles_1.ObjectMeta(this.roleBindingDto.namespace, this.roleBindingDto.name), subjectRules, roleRef);
        this.service.createRole(rolebinding)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    CreateBindingComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    CreateBindingComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.roleBindingDto = new roles_1.RoleBindingDto();
            _this.productForm.patchValue(_this.roleBindingDto);
        });
    };
    CreateBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            apiVersion: ["", forms_1.Validators.required],
            generateName: ["", forms_1.Validators.required],
            kindRef: ["", forms_1.Validators.required],
            nameRef: ["", forms_1.Validators.required],
            subjectRules: this.fb.array([
                this.initSubject(),
            ])
        });
    };
    CreateBindingComponent.prototype.initSubject = function () {
        return this.fb.group({
            apiGroup: ["", forms_1.Validators.required],
            kind: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            namespace: ["", forms_1.Validators.required]
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
    __metadata("design:paramtypes", [clusterrolebinding_service_1.ClusterRoleBindingService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], CreateBindingComponent);
exports.CreateBindingComponent = CreateBindingComponent;
//# sourceMappingURL=createBinding.component.js.map