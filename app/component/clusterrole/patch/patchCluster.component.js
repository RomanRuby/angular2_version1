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
var PatchClusterRoleComponent = (function () {
    function PatchClusterRoleComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    PatchClusterRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    PatchClusterRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    PatchClusterRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.patchOptions.patchType = productForm.value.patchType;
        this.patchOptions.name = productForm.value.name;
        this.patchOptions.data = productForm.value.data;
        this.patchOptions.subresources = productForm.value.subresources;
        this.service.patchRole(this.patchOptions.name, this.patchOptions.patchType, this.patchOptions.data, this.patchOptions.subresources)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    PatchClusterRoleComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    PatchClusterRoleComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.patchOptions = new roles_1.PatchTypeDto();
            _this.productForm.patchValue(_this.patchOptions);
        });
    };
    PatchClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            patchType: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            data: ["", forms_1.Validators.required],
            subresources: ["", forms_1.Validators.required],
        });
    };
    return PatchClusterRoleComponent;
}());
PatchClusterRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "patch",
        templateUrl: "patchCluster.component.html",
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], PatchClusterRoleComponent);
exports.PatchClusterRoleComponent = PatchClusterRoleComponent;
//# sourceMappingURL=patchCluster.component.js.map