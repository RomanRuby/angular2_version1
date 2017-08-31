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
var GetClusterRoleComponent = (function () {
    function GetClusterRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.type = false;
        this.responseValue = true;
        this.viewAdditionalField = false;
    }
    GetClusterRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    GetClusterRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    GetClusterRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.getOptions.name = productForm.value.name;
        this.getOptions.apiVersion = productForm.value.apiVersion;
        this.getOptions.resourceVersion = productForm.value.resourceVersion;
        this.getOptions.includeUninitialized = productForm.value.includeUninitialized;
        var getOption = new common_1.GetOptions(new common_1.TypeMeta("ClusterRole", this.getOptions.apiVersion), this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.name, getOption)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.responseValue = typeof _this.responseRole != "string";
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    GetClusterRoleComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    GetClusterRoleComponent.prototype.initForm = function () {
        this.getOptions = new common_1.GetOptionsDto();
        this.productForm.patchValue(this.getOptions);
    };
    GetClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            apiVersion: ["",],
            resourceVersion: ["",],
            includeUninitialized: ["",]
        });
    };
    return GetClusterRoleComponent;
}());
GetClusterRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "get",
        templateUrl: "getCluster.component.html",
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        forms_1.FormBuilder])
], GetClusterRoleComponent);
exports.GetClusterRoleComponent = GetClusterRoleComponent;
//# sourceMappingURL=getCluster.component.js.map