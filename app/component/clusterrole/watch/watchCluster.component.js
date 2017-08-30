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
var WatchClusterRoleComponent = (function () {
    function WatchClusterRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.type = false;
        this.viewAdditionalField = false;
    }
    WatchClusterRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    WatchClusterRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    WatchClusterRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        var listOptions = new roles_1.ListOptions();
        listOptions.setTypeMeta(new roles_1.TypeMeta("ClusterRole", this.roleDto.apiVersion));
        this.service.watchRole(listOptions)
            .subscribe(function (data) {
            _this.response = data;
            _this.type = true;
            console.log(_this.response);
        }, function (error) { return _this.errorMessage = error; });
    };
    WatchClusterRoleComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    WatchClusterRoleComponent.prototype.initForm = function () {
        this.roleDto = new roles_1.ListDto();
        this.productForm.patchValue(this.roleDto);
    };
    WatchClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            apiVersion: ["",]
        });
    };
    return WatchClusterRoleComponent;
}());
WatchClusterRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "watch",
        templateUrl: "watchCluster.component.html",
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        forms_1.FormBuilder])
], WatchClusterRoleComponent);
exports.WatchClusterRoleComponent = WatchClusterRoleComponent;
//# sourceMappingURL=watchCluster.component.js.map