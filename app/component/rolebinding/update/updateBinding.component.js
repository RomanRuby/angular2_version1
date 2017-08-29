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
var rolebinding_service_1 = require("../../../logic-service/rolebinding.service");
var UpdateBindingComponent = (function () {
    function UpdateBindingComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    UpdateBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    UpdateBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    UpdateBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleBindingDto.namespace = productForm.value.namespace;
        this.roleBindingDto.name = productForm.value.name;
        this.roleBindingDto.kind = productForm.value.kind;
        this.roleBindingDto.kindMeta = productForm.value.kindMeta;
        this.roleBindingDto.subjectRules = productForm.value.subjectRules;
        this.roleBindingDto.apiGroup = productForm.value.apiGroup;
        this.roleBindingDto.apiGroupRef = productForm.value.apiGroupRef;
        this.roleBindingDto.apiVersion = productForm.value.apiVersion;
        this.roleBindingDto.generateName = productForm.value.generateName;
        this.roleBindingDto.kindRef = productForm.value.kindRef;
        this.roleBindingDto.nameRef = productForm.value.nameRef;
        var subjectRules = [];
        for (var i = 0; i < this.roleBindingDto.subjectRules.length; i++) {
            subjectRules.push(new roles_1.Subject(this.roleBindingDto.subjectRules[i].apiGroup, this.roleBindingDto.subjectRules[i].kind, this.roleBindingDto.subjectRules[i].name, this.roleBindingDto.subjectRules[i].namespace));
        }
        var roleRef = new roles_1.RoleRef(this.roleBindingDto.apiGroup, this.roleBindingDto.kindRef, this.roleBindingDto.nameRef);
        var rolebinding = new roles_1.RoleBinding(new roles_1.TypeMeta(this.roleBindingDto.kindMeta, this.roleBindingDto.apiVersion), new roles_1.ObjectMeta(this.roleBindingDto.namespace, this.roleBindingDto.name), subjectRules, roleRef);
        this.service.updateRole(rolebinding)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    UpdateBindingComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    UpdateBindingComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.roleBindingDto = new roles_1.RoleBindingDto();
            _this.productForm.patchValue(_this.roleBindingDto);
        });
    };
    UpdateBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            apiVersion: ["",],
            generateName: ["",],
            name: ["",],
            namespace: ["",],
            kindRef: ["", forms_1.Validators.required],
            kindMeta: ["", forms_1.Validators.required],
            apiGroupRef: ["",],
            nameRef: ["", forms_1.Validators.required],
            subjectRules: this.fb.array([
                this.initSubject(),
            ])
        });
    };
    UpdateBindingComponent.prototype.initSubject = function () {
        return this.fb.group({
            apiGroup: ["",],
            kind: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            namespace: ["",]
        });
    };
    UpdateBindingComponent.prototype.addSubjectRules = function () {
        var control = this.productForm.controls['subjectRules'];
        control.push(this.initSubject());
    };
    UpdateBindingComponent.prototype.removeSubjectRules = function (i) {
        var control = this.productForm.controls['subjectRules'];
        control.removeAt(i);
    };
    return UpdateBindingComponent;
}());
UpdateBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "update",
        templateUrl: "updateBinding.component.html",
    }),
    __metadata("design:paramtypes", [rolebinding_service_1.RoleBindingService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], UpdateBindingComponent);
exports.UpdateBindingComponent = UpdateBindingComponent;
//# sourceMappingURL=updateBinding.component.js.map