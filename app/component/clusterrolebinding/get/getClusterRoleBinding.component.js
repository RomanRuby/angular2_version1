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
var GetClusterRoleBindingComponent = (function () {
    function GetClusterRoleBindingComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    GetClusterRoleBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    GetClusterRoleBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    GetClusterRoleBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.getOptions.nameUrl = productForm.value.nameUrl;
        this.getOptions.apiVersion = productForm.value.apiVersion;
        this.getOptions.kind = productForm.value.kind;
        this.getOptions.resourceVersion = productForm.value.resourceVersion;
        this.getOptions.includeUninitialized = productForm.value.includeUninitialized;
        var getOption = new roles_1.GetOptions(new roles_1.TypeMeta(this.getOptions.kind, this.getOptions.apiVersion), this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.nameUrl, getOption)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    GetClusterRoleBindingComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    GetClusterRoleBindingComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.getOptions = new roles_1.GetOptionsDto();
            _this.productForm.patchValue(_this.getOptions);
        });
    };
    GetClusterRoleBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            nameUrl: ["", forms_1.Validators.required],
            kind: ["", forms_1.Validators.required],
            apiVersion: ["", forms_1.Validators.required],
            resourceVersion: ["", forms_1.Validators.required],
            includeUninitialized: ["", forms_1.Validators.required]
        });
    };
    return GetClusterRoleBindingComponent;
}());
GetClusterRoleBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "get",
        templateUrl: "getClusterRoleBinding.component.html",
    }),
    __metadata("design:paramtypes", [clusterrolebinding_service_1.ClusterRoleBindingService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], GetClusterRoleBindingComponent);
exports.GetClusterRoleBindingComponent = GetClusterRoleBindingComponent;
//# sourceMappingURL=getClusterRoleBinding.component.js.map