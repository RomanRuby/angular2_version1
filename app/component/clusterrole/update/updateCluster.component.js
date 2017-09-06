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
var index_1 = require("../../../logic-service/index");
var UpdateClusterRoleComponent = (function () {
    function UpdateClusterRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.policyRuleDtoWithDeleteFunction = [];
        this.isInformationOutput = false;
        this.isInformationTable = false;
        this.isInformationError = false;
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
        this.service.getRole(productForm.value.name)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.policyRuleDtoWithDeleteFunction = [];
            if (typeof _this.responseRole != "string") {
                _this.responseRoleDto = new role_1.RoleWithAllOptionsViewDto();
                _this.responseRoleDto.metadata = [];
                _this.responseRoleDto.metadata.push(new role_1.ObjectMetaView(_this.responseRole.metadata.name, _this.responseRole.metadata.namespace, _this.responseRole.metadata.generateName));
                for (var i = 0; i < _this.responseRole.rules.length; i++) {
                    _this.policyRuleDtoWithDeleteFunction.push(new role_1.PolicyRuleDtoWithDeleteFunction(_this.responseRole.rules[i].verbs.toString(), false, _this.responseRole.rules[i].apiGroups.toString(), _this.responseRole.rules[i].resources.toString(), _this.responseRole.rules[i].resourceNames.toString()));
                }
                _this.isInformationTable = true;
                _this.isInformationError = false;
            }
            else {
                _this.isInformationTable = false;
                _this.isInformationError = true;
            }
            _this.isInformationOutput = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    UpdateClusterRoleComponent.prototype.save = function () {
        var _this = this;
        var policyRulesArrays = [];
        for (var i = 0; i < this.policyRuleDtoWithDeleteFunction.length; i++) {
            if (this.policyRuleDtoWithDeleteFunction[i].isDelete == false) {
                policyRulesArrays.push(new index_1.PolicyRule(this.policyRuleDtoWithDeleteFunction[i].verbs.split(','), this.policyRuleDtoWithDeleteFunction[i].apiGroups.split(','), this.policyRuleDtoWithDeleteFunction[i].resources.split(','), this.policyRuleDtoWithDeleteFunction[i].resourceNames.split(',')));
            }
            else {
                this.policyRuleDtoWithDeleteFunction =
                    this.policyRuleDtoWithDeleteFunction.filter(function (policy) { return policy.isDelete == false; });
            }
        }
        var role = new role_1.Role(this.responseRole.typeMeta, this.responseRoleDto.metadata.pop(), policyRulesArrays);
        this.service.updateRole(role)
            .subscribe(function (data) {
            if (typeof data != "string") {
                _this.isInformationTable = true;
            }
            else {
                _this.isInformationTable = false;
                _this.isInformationError = true;
            }
            _this.responseRole = data;
            _this.responseRoleDto.metadata.push(new role_1.ObjectMetaView(_this.responseRole.metadata.name, _this.responseRole.metadata.namespace, _this.responseRole.metadata.generateName));
        }, function (error) { return _this.errorMessage = error; });
    };
    UpdateClusterRoleComponent.prototype.initForm = function () {
        this.responseRole = new role_1.RoleWithAllOptionsView();
        this.productForm.patchValue(this.responseRole);
    };
    UpdateClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            name: ["", forms_1.Validators.required]
        });
    };
    UpdateClusterRoleComponent.prototype.addPolicy = function () {
        this.policyRuleDtoWithDeleteFunction.push(new role_1.PolicyRuleDtoWithDeleteFunction("", false, "", "", ""));
    };
    return UpdateClusterRoleComponent;
}());
UpdateClusterRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "update",
        templateUrl: "updateCluster.component.html"
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        forms_1.FormBuilder])
], UpdateClusterRoleComponent);
exports.UpdateClusterRoleComponent = UpdateClusterRoleComponent;
//# sourceMappingURL=updateCluster.component.js.map