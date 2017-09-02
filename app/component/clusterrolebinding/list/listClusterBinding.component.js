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
var common_1 = require("../../../logic-service/models/common");
var clusterrolebinding_service_1 = require("../../../logic-service/clusterrolebinding.service");
var ListClusterBindingComponent = (function () {
    function ListClusterBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.isInformationOutput = false;
        this.isInformationTable = false;
        this.isInformationError = false;
    }
    ListClusterBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    ListClusterBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    ListClusterBindingComponent.prototype.onSubmit = function () {
        var _this = this;
        var listOptions = new common_1.ListOptions();
        listOptions.setTypeMeta(new common_1.TypeMeta("ClusterRoleBinding", null));
        this.service.listRole(listOptions)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.isInformationTable = true;
            console.log(_this.responseRole);
            if (typeof _this.responseRole == "string") {
                _this.isInformationTable = false;
            }
            _this.isInformationOutput = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListClusterBindingComponent.prototype.deleteList = function () {
        var _this = this;
        var listOption = new common_1.ListOptions();
        listOption.setTypeMeta(new common_1.TypeMeta("ClusterRoleBinding", null));
        var deleteOption = new common_1.DeleteOptions(new common_1.TypeMeta("ClusterRoleBinding", null), null, null, null);
        this.service.deleteCollectionRole(deleteOption, listOption)
            .subscribe(function (data) {
            _this.response = data;
            _this.isInformationTable = false;
            _this.isInformationError = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListClusterBindingComponent.prototype.initForm = function () {
        this.roleDto = new common_1.ListDto();
        this.productForm.patchValue(this.roleDto);
    };
    ListClusterBindingComponent.prototype.delete = function (name) {
        var _this = this;
        this.service.deleteRole(name, null).subscribe(function (data) {
        }, function (error) { return _this.errorMessage = error; });
        this.service.deleteRole(name, null).subscribe(function (data) {
        }, function (error) { return _this.errorMessage = error; });
        this.onSubmit();
    };
    ListClusterBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({});
    };
    return ListClusterBindingComponent;
}());
ListClusterBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "listClusterBinding.component.html",
    }),
    __metadata("design:paramtypes", [clusterrolebinding_service_1.ClusterRoleBindingService,
        forms_1.FormBuilder])
], ListClusterBindingComponent);
exports.ListClusterBindingComponent = ListClusterBindingComponent;
//# sourceMappingURL=listClusterBinding.component.js.map