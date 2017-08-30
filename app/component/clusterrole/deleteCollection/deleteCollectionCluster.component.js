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
var clusterrole_service_1 = require("../../../logic-service/clusterrole.service");
var DeleteCollectionClusterRoleComponent = (function () {
    function DeleteCollectionClusterRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.type = false;
        this.viewAdditionalField = false;
    }
    DeleteCollectionClusterRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    DeleteCollectionClusterRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    DeleteCollectionClusterRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.deleteCollection.apiVersion = productForm.value.apiVersion;
        this.deleteCollection.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteCollection.orphanDependents = productForm.value.orphanDependents;
        this.deleteCollection.preconditions = productForm.value.preconditions;
        this.deleteCollection.apiVersionList = productForm.value.apiVersionList;
        var listOption = new roles_1.ListOptions();
        listOption.setTypeMeta(new roles_1.TypeMeta("ClusterRole", this.deleteCollection.apiVersionList));
        var deleteOption = new roles_1.DeleteOptions(new roles_1.TypeMeta("ClusterRole", this.deleteCollection.apiVersion), this.deleteCollection.gracePeriodSeconds, this.deleteCollection.orphanDependents, this.deleteCollection.preconditions);
        this.service.deleteCollectionRole(deleteOption, listOption)
            .subscribe(function (data) {
            _this.response = data;
            _this.type = true;
            console.log(_this.response);
        }, function (error) { return _this.errorMessage = error; });
    };
    DeleteCollectionClusterRoleComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    DeleteCollectionClusterRoleComponent.prototype.initForm = function () {
        this.deleteCollection = new roles_1.DeleteCollectionDto();
        this.productForm.patchValue(this.deleteCollection);
    };
    DeleteCollectionClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            apiVersion: ["",],
            gracePeriodSeconds: ["",],
            preconditions: ["",],
            orphanDependents: ["",]
        });
    };
    return DeleteCollectionClusterRoleComponent;
}());
DeleteCollectionClusterRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "deleteCollection",
        templateUrl: "deleteCollectionCluster.component.html",
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        forms_1.FormBuilder])
], DeleteCollectionClusterRoleComponent);
exports.DeleteCollectionClusterRoleComponent = DeleteCollectionClusterRoleComponent;
//# sourceMappingURL=deleteCollectionCluster.component.js.map