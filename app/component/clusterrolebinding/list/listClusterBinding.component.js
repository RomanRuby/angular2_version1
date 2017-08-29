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
var clusterrolebinding_service_1 = require("../../../logic-service/clusterrolebinding.service");
var ListClusterBindingComponent = (function () {
    function ListClusterBindingComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
        this.type = false;
    }
    ListClusterBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    ListClusterBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    ListClusterBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        var listOptions;
        listOptions = new roles_1.ListOptions();
        listOptions.setTypeMeta(new roles_1.TypeMeta(this.roleDto.kind, this.roleDto.apiVersion));
        this.service.listRole(listOptions)
            .subscribe(function (data) {
            console.log(data);
            _this.responseRoleBinding = data;
            console.log(_this.responseRoleBinding);
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListClusterBindingComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    ListClusterBindingComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.roleDto = new roles_1.ListDto();
            _this.productForm.patchValue(_this.roleDto);
        });
    };
    ListClusterBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            kind: ["", forms_1.Validators.required],
            apiVersion: ["",]
        });
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
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], ListClusterBindingComponent);
exports.ListClusterBindingComponent = ListClusterBindingComponent;
//# sourceMappingURL=listClusterBinding.component.js.map