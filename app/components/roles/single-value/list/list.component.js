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
var common_1 = require("../../../../models/common");
var role_service_1 = require("../../../../services/routings/role.service");
var ListRoleComponent = (function () {
    function ListRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.isInformationOutput = false;
        this.isInformationTable = false;
    }
    ListRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    ListRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    ListRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.namespace = productForm.value.namespace;
        var listOptions = new common_1.ListOptions();
        listOptions.setTypeMeta(new common_1.TypeMeta("Role", this.roleDto.apiVersion));
        this.service.listRole(this.roleDto.namespace, listOptions)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.isInformationTable = true;
            _this.isInformationOutput = true;
        });
    };
    ListRoleComponent.prototype.deleteList = function () {
        var _this = this;
        this.service.deleteCollectionRole(this.roleDto.namespace)
            .subscribe(function (data) {
            _this.response = data;
            _this.isInformationTable = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListRoleComponent.prototype.delete = function (name) {
        this.service.deleteRole(name, this.roleDto.namespace).subscribe(function (data) {
        });
        this.responseRole.items = this.responseRole.items.filter(function (items) { return items.metadata.name != name; });
    };
    ListRoleComponent.prototype.initForm = function () {
        this.roleDto = new common_1.ListDto();
        this.productForm.patchValue(this.roleDto);
    };
    ListRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            namespace: ["", forms_1.Validators.required],
        });
    };
    return ListRoleComponent;
}());
ListRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "list.component.html",
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        forms_1.FormBuilder])
], ListRoleComponent);
exports.ListRoleComponent = ListRoleComponent;
//# sourceMappingURL=list.component.js.map