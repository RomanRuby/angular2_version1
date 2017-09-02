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
var rolebinding_1 = require("../../../logic-service/models/rolebinding");
var role_1 = require("../../../logic-service/models/role");
var common_1 = require("../../../logic-service/models/common");
var rolebinding_service_1 = require("../../../logic-service/rolebinding.service");
var UpdateBindingComponent = (function () {
    function UpdateBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.viewAdditionalField = false;
        this.isInformationOutput = false;
        this.isInformationTable = false;
        this.isInformationError = false;
    }
    UpdateBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    UpdateBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    UpdateBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        var getOption = new common_1.GetOptions(new common_1.TypeMeta("Role", null), null, null);
        this.namespace = productForm.value.namespace;
        this.service.getRole(productForm.value.name, this.namespace, getOption)
            .subscribe(function (data) {
            _this.responseRole = data;
            if (typeof _this.responseRole != "string") {
                _this.isInformationTable = true;
            }
            else {
                _this.isInformationError = true;
            }
            _this.isInformationOutput = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    UpdateBindingComponent.prototype.save = function () {
        var _this = this;
        var role = new rolebinding_1.RoleBinding(new common_1.TypeMeta("RoleBinding", null), new role_1.ObjectMeta(this.responseRole.metadata.name, this.namespace), this.responseRole.subjects, this.responseRole.roleRef);
        this.service.updateRole(role)
            .subscribe(function (data) {
            _this.responseRole = data;
            if (typeof _this.responseRole != "string") {
                _this.isInformationTable = true;
            }
            else {
                _this.isInformationError = true;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    UpdateBindingComponent.prototype.initForm = function () {
        this.roleBindingDto = new rolebinding_1.RoleBindingDto();
        this.productForm.patchValue(this.roleBindingDto);
    };
    UpdateBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            namespace: ["", forms_1.Validators.required],
        });
    };
    return UpdateBindingComponent;
}());
UpdateBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "update",
        templateUrl: "updateBinding.component.html",
    }),
    __metadata("design:paramtypes", [rolebinding_service_1.RoleBindingService,
        forms_1.FormBuilder])
], UpdateBindingComponent);
exports.UpdateBindingComponent = UpdateBindingComponent;
//# sourceMappingURL=updateBinding.component.js.map