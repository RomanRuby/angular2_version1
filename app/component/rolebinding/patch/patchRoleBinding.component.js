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
var roles_1 = require("../../../logic-service/roles");
var rolebinding_service_1 = require("../../../logic-service/rolebinding.service");
var PatchRoleBindingComponent = (function () {
    function PatchRoleBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
    }
    PatchRoleBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    PatchRoleBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    PatchRoleBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.patchOptions.patchType = productForm.value.patchType;
        this.patchOptions.name = productForm.value.name;
        this.patchOptions.data = productForm.value.data;
        this.patchOptions.subresources = productForm.value.subresources;
        this.patchOptions.namespace = productForm.value.namespace;
        this.service.patchRole(this.patchOptions.name, this.patchOptions.namespace, this.patchOptions.patchType, this.patchOptions.data, this.patchOptions.subresources)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    PatchRoleBindingComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    PatchRoleBindingComponent.prototype.initForm = function () {
        this.patchOptions = new roles_1.PatchTypeDto();
        this.productForm.patchValue(this.patchOptions);
    };
    PatchRoleBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            patchType: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            data: ["", forms_1.Validators.required],
            subresources: ["", forms_1.Validators.required],
            namespace: ["", forms_1.Validators.required],
        });
    };
    return PatchRoleBindingComponent;
}());
PatchRoleBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "patch",
        templateUrl: "patchRoleBinding.component.html",
    }),
    __metadata("design:paramtypes", [rolebinding_service_1.RoleBindingService,
        forms_1.FormBuilder])
], PatchRoleBindingComponent);
exports.PatchRoleBindingComponent = PatchRoleBindingComponent;
//# sourceMappingURL=patchRoleBinding.component.js.map