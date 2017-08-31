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
var clusterrole_service_1 = require("../../../logic-service/clusterrole.service");
var role_1 = require("../../../logic-service/models/role");
var common_1 = require("../../../logic-service/models/common");
var UpdateClusterRoleComponent = (function () {
    function UpdateClusterRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.viewAdditionalField = false;
        this.type = false;
        this.responseValue = true;
    }
    UpdateClusterRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    UpdateClusterRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    UpdateClusterRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.name = productForm.value.name;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        this.roleDto.generateName = productForm.value.generateName;
        this.roleDto.selfLink = productForm.value.selfLink;
        this.roleDto.uid = productForm.value.uid;
        this.roleDto.policyRules = productForm.value.policyRules;
        var policyRulesArrsys = [];
        for (var i = 0; i < this.roleDto.policyRules.length; i++) {
            policyRulesArrsys.push(new role_1.PolicyRule(this.roleDto.policyRules[i].verbs.split(','), this.roleDto.policyRules[i].apiGroups.split(','), this.roleDto.policyRules[i].resources.split(','), this.roleDto.policyRules[i].resourceNames.split(',')));
        }
        var role = new role_1.Role(new common_1.TypeMeta("ClusterRole", this.roleDto.apiVersion), new role_1.ObjectMeta(this.roleDto.name, this.roleDto.namespace), policyRulesArrsys);
        this.service.updateRole(role)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.responseValue = typeof _this.responseRole != "string";
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    UpdateClusterRoleComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    UpdateClusterRoleComponent.prototype.initForm = function () {
        this.roleDto = new role_1.RoleDto();
        this.productForm.patchValue(this.roleDto);
    };
    UpdateClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            apiVersion: ["",],
            generateName: ["",],
            selfLink: ["",],
            uid: ["",],
            policyRules: this.fb.array([
                this.initPolicyRules(),
            ])
        });
    };
    UpdateClusterRoleComponent.prototype.initPolicyRules = function () {
        return this.fb.group({
            verbs: ["", forms_1.Validators.required],
            apiGroups: ["",],
            resources: ["",],
            resourceNames: ["",],
        });
    };
    UpdateClusterRoleComponent.prototype.addPolicyRules = function () {
        var control = this.productForm.controls['policyRules'];
        control.push(this.initPolicyRules());
    };
    UpdateClusterRoleComponent.prototype.removePolicyRules = function (i) {
        var control = this.productForm.controls['policyRules'];
        control.removeAt(i);
    };
    return UpdateClusterRoleComponent;
}());
UpdateClusterRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "update",
        templateUrl: "updateCluster.component.html",
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        forms_1.FormBuilder])
], UpdateClusterRoleComponent);
exports.UpdateClusterRoleComponent = UpdateClusterRoleComponent;
//# sourceMappingURL=updateCluster.component.js.map