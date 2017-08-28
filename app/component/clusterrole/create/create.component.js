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
var CreateRoleComponent = (function () {
    function CreateRoleComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    CreateRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    CreateRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    CreateRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.name = productForm.value.name;
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        this.roleDto.generateName = productForm.value.generateName;
        this.roleDto.selfLink = productForm.value.selfLink;
        this.roleDto.uid = productForm.value.uid;
        this.roleDto.policyRules = productForm.value.policyRules;
        var policyRulesArrsys = [];
        for (var i = 0; i < this.roleDto.policyRules.length; i++) {
            policyRulesArrsys.push(new roles_1.PolicyRule(this.roleDto.policyRules[i].verbs.split(','), this.roleDto.policyRules[i].apiGroups.split(','), this.roleDto.policyRules[i].resources.split(','), this.roleDto.policyRules[i].resourceNames.split(','), this.roleDto.policyRules[i].nonResourceURLs.split(',')));
        }
        var role = new roles_1.Role(new roles_1.TypeMeta(this.roleDto.kind, this.roleDto.apiVersion), new roles_1.ObjectMeta(this.roleDto.namespace, this.roleDto.name), policyRulesArrsys);
        this.service.createRole(role)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    CreateRoleComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    CreateRoleComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.roleDto = new roles_1.RoleDto();
            _this.productForm.patchValue(_this.roleDto);
        });
    };
    CreateRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            kind: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            apiVersion: ["", forms_1.Validators.required],
            generateName: ["", forms_1.Validators.required],
            selfLink: ["", forms_1.Validators.required],
            uid: ["", forms_1.Validators.required],
            policyRules: this.fb.array([
                this.initPolicyRules(),
            ])
        });
    };
    CreateRoleComponent.prototype.initPolicyRules = function () {
        return this.fb.group({
            verbs: ["", forms_1.Validators.required],
            apiGroups: ["", forms_1.Validators.required],
            resources: ["", forms_1.Validators.required],
            nonResourceURLs: ["", forms_1.Validators.required],
            resourceNames: ["", forms_1.Validators.required],
        });
    };
    CreateRoleComponent.prototype.addPolicyRules = function () {
        var control = this.productForm.controls['policyRules'];
        control.push(this.initPolicyRules());
    };
    CreateRoleComponent.prototype.removePolicyRules = function (i) {
        var control = this.productForm.controls['policyRules'];
        control.removeAt(i);
    };
    return CreateRoleComponent;
}());
CreateRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "create",
        templateUrl: "create.component.html",
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], CreateRoleComponent);
exports.CreateRoleComponent = CreateRoleComponent;
//# sourceMappingURL=create.component.js.map