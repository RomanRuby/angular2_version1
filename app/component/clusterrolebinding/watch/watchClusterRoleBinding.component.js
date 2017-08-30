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
var WatchClusterRoleBindingComponent = (function () {
    function WatchClusterRoleBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
    }
    WatchClusterRoleBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    WatchClusterRoleBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    WatchClusterRoleBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        var listOptions;
        listOptions = new roles_1.ListOptions();
        listOptions.setTypeMeta(new roles_1.TypeMeta(this.roleDto.kind, this.roleDto.apiVersion));
        this.service.watchRole(listOptions)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    WatchClusterRoleBindingComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    WatchClusterRoleBindingComponent.prototype.initForm = function () {
        this.roleDto = new roles_1.ListDto();
        this.productForm.patchValue(this.roleDto);
    };
    WatchClusterRoleBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            kind: ["", forms_1.Validators.required],
            namespace: ["", forms_1.Validators.required],
            apiVersion: ["", forms_1.Validators.required]
        });
    };
    return WatchClusterRoleBindingComponent;
}());
WatchClusterRoleBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "watch",
        templateUrl: "watchClusterRoleBinding.component.html",
    }),
    __metadata("design:paramtypes", [clusterrolebinding_service_1.ClusterRoleBindingService,
        forms_1.FormBuilder])
], WatchClusterRoleBindingComponent);
exports.WatchClusterRoleBindingComponent = WatchClusterRoleBindingComponent;
//# sourceMappingURL=watchClusterRoleBinding.component.js.map