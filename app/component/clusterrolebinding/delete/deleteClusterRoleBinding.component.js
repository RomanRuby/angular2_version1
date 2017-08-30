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
var clusterrolebinding_service_1 = require("../../../logic-service/clusterrolebinding.service");
var DeleteClusterRoleBindingComponent = (function () {
    function DeleteClusterRoleBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.type = false;
        this.viewAdditionalField = false;
    }
    DeleteClusterRoleBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    DeleteClusterRoleBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    DeleteClusterRoleBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.deleteOptions.name = productForm.value.name;
        this.deleteOptions.kind = productForm.value.kind;
        this.deleteOptions.apiVersion = productForm.value.apiVersion;
        this.deleteOptions.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteOptions.orphanDependents = productForm.value.orphanDependents;
        this.deleteOptions.preconditions = productForm.value.preconditions;
        var deleteOption = new roles_1.DeleteOptions(new roles_1.TypeMeta("RoleBinding", this.deleteOptions.apiVersion), this.deleteOptions.gracePeriodSeconds, this.deleteOptions.orphanDependents, this.deleteOptions.preconditions);
        this.service.deleteRole(this.deleteOptions.name, deleteOption)
            .subscribe(function (data) {
            _this.response = data;
            _this.type = true;
            console.log(_this.response);
        }, function (error) { return _this.errorMessage = error; });
    };
    DeleteClusterRoleBindingComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    DeleteClusterRoleBindingComponent.prototype.initForm = function () {
        this.deleteOptions = new roles_1.DeleteOptionsDto();
        this.productForm.patchValue(this.deleteOptions);
    };
    DeleteClusterRoleBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            apiVersion: ["",],
            gracePeriodSeconds: ["",],
            preconditions: ["",],
            orphanDependents: ["",],
            deletionPropagation: ["",]
        });
    };
    return DeleteClusterRoleBindingComponent;
}());
DeleteClusterRoleBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "delete",
        templateUrl: "deleteClusterRoleBinding.component.html",
    }),
    __metadata("design:paramtypes", [clusterrolebinding_service_1.ClusterRoleBindingService,
        forms_1.FormBuilder])
], DeleteClusterRoleBindingComponent);
exports.DeleteClusterRoleBindingComponent = DeleteClusterRoleBindingComponent;
//# sourceMappingURL=deleteClusterRoleBinding.component.js.map