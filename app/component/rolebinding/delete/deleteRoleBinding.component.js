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
var DeleteRoleBindingComponent = (function () {
    function DeleteRoleBindingComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    DeleteRoleBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    DeleteRoleBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    DeleteRoleBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.deleteOptions.name = productForm.value.name;
        this.deleteOptions.namespace = productForm.value.namespace;
        this.deleteOptions.kind = productForm.value.kind;
        this.deleteOptions.apiVersion = productForm.value.apiVersion;
        this.deleteOptions.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteOptions.orphanDependents = productForm.value.orphanDependents;
        this.deleteOptions.preconditions = productForm.value.preconditions;
        this.deleteOptions.propagationPolicy = productForm.value.propagationPolicy;
        var deleteOption = new roles_1.DeleteOptions(new roles_1.TypeMeta(this.deleteOptions.kind, this.deleteOptions.apiVersion), this.deleteOptions.gracePeriodSeconds, this.deleteOptions.orphanDependents, this.deleteOptions.preconditions, this.deleteOptions.propagationPolicy);
        this.service.deleteRole(this.deleteOptions.name, this.deleteOptions.namespace, deleteOption)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    DeleteRoleBindingComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    DeleteRoleBindingComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.deleteOptions = new roles_1.DeleteOptionsDto();
            _this.productForm.patchValue(_this.deleteOptions);
        });
    };
    DeleteRoleBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            kind: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            namespace: ["", forms_1.Validators.required],
            apiVersion: ["",],
            gracePeriodSeconds: ["",],
            preconditions: ["",],
            orphanDependents: ["",],
            propagationPolicy: ["",],
            deletionPropagation: ["",]
        });
    };
    return DeleteRoleBindingComponent;
}());
DeleteRoleBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "delete",
        templateUrl: "deleteRoleBinding.component.html",
    }),
    __metadata("design:paramtypes", [rolebinding_service_1.RoleBindingService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], DeleteRoleBindingComponent);
exports.DeleteRoleBindingComponent = DeleteRoleBindingComponent;
//# sourceMappingURL=deleteRoleBinding.component.js.map