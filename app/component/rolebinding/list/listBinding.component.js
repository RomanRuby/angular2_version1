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
var common_1 = require("../../../logic-service/models/common");
var ListBindingComponent = (function () {
    function ListBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.isInformationOutput = false;
        this.isInformationTable = false;
        this.isInformationError = false;
    }
    ListBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    ListBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    ListBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.namespace = productForm.value.namespace;
        var listOptions = new common_1.ListOptions();
        listOptions.setTypeMeta(new common_1.TypeMeta("RoleBinding"));
        this.service.listRole(this.namespace, listOptions)
            .subscribe(function (data) {
            _this.responseRole = data;
            if (typeof _this.responseRole != "string") {
                _this.isInformationTable = true;
            }
            _this.isInformationOutput = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListBindingComponent.prototype.deleteList = function () {
        var _this = this;
        this.service.deleteCollectionRole(this.namespace)
            .subscribe(function (data) {
            _this.response = data;
            _this.isInformationTable = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListBindingComponent.prototype.delete = function (name) {
        this.service.deleteRole(name, this.namespace);
        this.responseRole.items = this.responseRole.items.filter(function (items) { return items.metadata.name != name; });
    };
    ListBindingComponent.prototype.initForm = function () {
        this.roleDto = new common_1.ListDto();
        this.productForm.patchValue(this.roleDto);
    };
    ListBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            namespace: ["", forms_1.Validators.required],
        });
    };
    return ListBindingComponent;
}());
ListBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "listBinding.component.html",
    }),
    __metadata("design:paramtypes", [rolebinding_service_1.RoleBindingService,
        forms_1.FormBuilder])
], ListBindingComponent);
exports.ListBindingComponent = ListBindingComponent;
//# sourceMappingURL=listBinding.component.js.map