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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var roles_1 = require("../../../logic-service/roles");
var rolebinding_service_1 = require("../../../logic-service/rolebinding.service");
var ListBindingComponent = (function () {
    function ListBindingComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
        this.type = false;
    }
    ListBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    ListBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    ListBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        this.roleDto.namespace = productForm.value.namespace;
        var listOptions;
        listOptions = new roles_1.ListOptions();
        listOptions.setTypeMeta(new roles_1.TypeMeta(this.roleDto.kind, this.roleDto.apiVersion));
        this.service.listRole(this.roleDto.namespace, listOptions)
            .subscribe(function (data) {
            console.log(data);
            // this.responseRoleBinding = data;
            console.log(_this.responseRoleBinding);
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListBindingComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    ListBindingComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.roleDto = new roles_1.ListDto();
            _this.productForm.patchValue(_this.roleDto);
        });
    };
    ListBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            kind: ["", forms_1.Validators.required],
            namespace: ["", forms_1.Validators.required],
            apiVersion: ["",]
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
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], ListBindingComponent);
exports.ListBindingComponent = ListBindingComponent;
//# sourceMappingURL=listBinding.component.js.map