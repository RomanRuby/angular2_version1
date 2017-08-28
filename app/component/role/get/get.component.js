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
var role_service_1 = require("../../../logic-service/role.service");
var roles_1 = require("../../../logic-service/roles");
var GetRoleComponent = (function () {
    function GetRoleComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    GetRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    GetRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    GetRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.getOptions.nameUrl = productForm.value.nameUrl;
        this.getOptions.namespace = productForm.value.namespace;
        this.getOptions.apiVersion = productForm.value.apiVersion;
        this.getOptions.kind = productForm.value.kind;
        this.getOptions.resourceVersion = productForm.value.resourceVersion;
        this.getOptions.includeUninitialized = productForm.value.includeUninitialized;
        var getOption = new roles_1.GetOptions(new roles_1.TypeMeta(this.getOptions.kind, this.getOptions.apiVersion), this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.nameUrl, this.getOptions.namespace, getOption)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    GetRoleComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    GetRoleComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.getOptions = new roles_1.GetOptionsDto();
            _this.productForm.patchValue(_this.getOptions);
        });
    };
    GetRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            namespace: ["", forms_1.Validators.required],
            nameUrl: ["", forms_1.Validators.required],
            kind: ["", forms_1.Validators.required],
            apiVersion: ["",],
            resourceVersion: ["",],
            includeUninitialized: ["",]
        });
    };
    return GetRoleComponent;
}());
GetRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "get",
        templateUrl: "get.component.html",
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], GetRoleComponent);
exports.GetRoleComponent = GetRoleComponent;
//# sourceMappingURL=get.component.js.map