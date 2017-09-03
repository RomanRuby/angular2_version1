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
var clusterrole_service_1 = require("../../../logic-service/clusterrole.service");
var common_1 = require("../../../logic-service/models/common");
require("rxjs/add/operator/map");
var ListClusterRoleComponent = (function () {
    function ListClusterRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.isInformationOutput = false;
        this.isInformationTable = false;
    }
    ListClusterRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    ListClusterRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    ListClusterRoleComponent.prototype.onSubmit = function () {
        var _this = this;
        var listOptions = new common_1.ListOptions();
        listOptions.setTypeMeta(new common_1.TypeMeta("ClusterRole", null));
        this.service.listRole(listOptions)
            .subscribe(function (data) {
            _this.responseRole = data;
            if (typeof _this.responseRole != "string") {
                _this.isInformationTable = true;
            }
            _this.isInformationOutput = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListClusterRoleComponent.prototype.deleteList = function () {
        var _this = this;
        this.service.deleteCollectionRole(null, null)
            .subscribe(function (data) {
            _this.response = data;
            _this.isInformationTable = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListClusterRoleComponent.prototype.delete = function (name) {
        this.service.deleteRole(name, null);
        this.responseRole.items = this.responseRole.items.filter(function (items) { return items.metadata.name != name; });
    };
    ListClusterRoleComponent.prototype.initForm = function () {
        this.roleDto = new common_1.ListDto();
        this.productForm.patchValue(this.roleDto);
    };
    ListClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({});
    };
    return ListClusterRoleComponent;
}());
ListClusterRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "listCluster.component.html",
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        forms_1.FormBuilder])
], ListClusterRoleComponent);
exports.ListClusterRoleComponent = ListClusterRoleComponent;
//# sourceMappingURL=listCluster.component.js.map