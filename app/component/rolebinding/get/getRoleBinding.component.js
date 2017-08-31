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
var rolebinding_service_1 = require("../../../logic-service/rolebinding.service");
var index_1 = require("../../../logic-service/index");
var common_1 = require("../../../logic-service/models/common");
var GetRoleBindingComponent = (function () {
    function GetRoleBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.type = false;
        this.responseValue = true;
    }
    GetRoleBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    GetRoleBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    GetRoleBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.getOptions.nameUrl = productForm.value.nameUrl;
        this.getOptions.apiVersion = productForm.value.apiVersion;
        this.getOptions.resourceVersion = productForm.value.resourceVersion;
        this.getOptions.includeUninitialized = productForm.value.includeUninitialized;
        this.getOptions.name = productForm.value.name;
        var getOption = new common_1.GetOptions(new common_1.TypeMeta("Role", this.getOptions.apiVersion), this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.name, this.getOptions.nameUrl, getOption)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.responseValue = typeof _this.responseRole != "string";
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    GetRoleBindingComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    GetRoleBindingComponent.prototype.initForm = function () {
        this.getOptions = new index_1.GetOptionsDto();
        this.productForm.patchValue(this.getOptions);
    };
    GetRoleBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            nameUrl: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            apiVersion: ["",],
            resourceVersion: ["",],
            includeUninitialized: ["",]
        });
    };
    return GetRoleBindingComponent;
}());
GetRoleBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "get",
        templateUrl: "getRoleBinding.component.html",
    }),
    __metadata("design:paramtypes", [rolebinding_service_1.RoleBindingService,
        forms_1.FormBuilder])
], GetRoleBindingComponent);
exports.GetRoleBindingComponent = GetRoleBindingComponent;
//# sourceMappingURL=getRoleBinding.component.js.map