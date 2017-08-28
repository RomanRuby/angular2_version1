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
var clusterrole_service_1 = require("../../../logic-service/clusterrole.service");
var ListClusterRoleComponent = (function () {
    function ListClusterRoleComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
        this.type = false;
    }
    ListClusterRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    ListClusterRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    ListClusterRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.namespace = productForm.value.namespace;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        var listOptions;
        listOptions = new roles_1.ListOptions();
        listOptions.setTypeMeta(new roles_1.TypeMeta(this.roleDto.kind, this.roleDto.apiVersion));
        this.service.listRole(listOptions)
            .subscribe(function (data) {
            console.log(data);
            _this.responseRole = data;
            console.log(_this.responseRole);
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListClusterRoleComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    ListClusterRoleComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.roleDto = new roles_1.ListDto();
            _this.productForm.patchValue(_this.roleDto);
        });
    };
    ListClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            kind: ["", forms_1.Validators.required],
            namespace: ["", forms_1.Validators.required],
            apiVersion: ["", forms_1.Validators.required]
        });
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
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], ListClusterRoleComponent);
exports.ListClusterRoleComponent = ListClusterRoleComponent;
//# sourceMappingURL=listCluster.component.js.map