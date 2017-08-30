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
var DeleteCollectionClusterRoleBindingComponent = (function () {
    function DeleteCollectionClusterRoleBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.type = false;
        this.viewAdditionalField = false;
    }
    DeleteCollectionClusterRoleBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    DeleteCollectionClusterRoleBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    DeleteCollectionClusterRoleBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.deleteCollection.apiVersion = productForm.value.apiVersion;
        this.deleteCollection.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteCollection.orphanDependents = productForm.value.orphanDependents;
        this.deleteCollection.preconditions = productForm.value.preconditions;
        this.deleteCollection.propagationPolicy = productForm.value.propagationPolicy;
        this.deleteCollection.apiVersionList = productForm.value.apiVersionList;
        var listOption = new roles_1.ListOptions();
        listOption.setTypeMeta(new roles_1.TypeMeta("ClusterRoleBinding", this.deleteCollection.apiVersionList));
        var deleteOption = new roles_1.DeleteOptions(new roles_1.TypeMeta("ClusterRoleBinding", this.deleteCollection.apiVersion), this.deleteCollection.gracePeriodSeconds, this.deleteCollection.orphanDependents, this.deleteCollection.preconditions);
        this.service.deleteCollectionRole(deleteOption, listOption)
            .subscribe(function (data) {
            _this.response = data;
            _this.type = true;
            console.log(_this.response);
        }, function (error) { return _this.errorMessage = error; });
    };
    DeleteCollectionClusterRoleBindingComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    DeleteCollectionClusterRoleBindingComponent.prototype.initForm = function () {
        this.deleteCollection = new roles_1.DeleteCollectionDto();
        this.productForm.patchValue(this.deleteCollection);
    };
    DeleteCollectionClusterRoleBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            apiVersion: ["",],
            gracePeriodSeconds: ["",],
            preconditions: ["",],
            orphanDependents: ["",],
            propagationPolicy: ["",],
            namespaceList: [""],
        });
    };
    return DeleteCollectionClusterRoleBindingComponent;
}());
DeleteCollectionClusterRoleBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "deleteRoleBindingCollection",
        templateUrl: "deleteClusterRoleBindingCollection.component.html",
    }),
    __metadata("design:paramtypes", [clusterrolebinding_service_1.ClusterRoleBindingService,
        forms_1.FormBuilder])
], DeleteCollectionClusterRoleBindingComponent);
exports.DeleteCollectionClusterRoleBindingComponent = DeleteCollectionClusterRoleBindingComponent;
//# sourceMappingURL=deleteClusterRoleBindingCollection.component.js.map