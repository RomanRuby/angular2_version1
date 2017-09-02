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
        this.service.getRole(productForm.value.name, null)
            .subscribe(function (data) {
            _this.responseRole = data;
            if (typeof _this.responseRole != "string") {
                _this.responseRoleDto = new role_1.RoleWithAllOptionsViewDto();
                _this.responseRoleDto.metadata = [];
                _this.responseRoleDto.typeMeta = [];
                _this.responseRoleDto.metadata.push(_this.responseRole.metadata);
                _this.responseRoleDto.typeMeta.push(_this.responseRole.typeMeta);
                var policyRulesArrsysDto = [];
                for (var i = 0; i < _this.responseRole.rules.length; i++) {
                    policyRulesArrsysDto.push(new role_1.PolicyRuleDto(_this.responseRole.rules[i].verbs.toString(), _this.responseRole.rules[i].apiGroups.toString(), _this.responseRole.rules[i].resources.toString(), _this.responseRole.rules[i].resourceNames.toString()));
                }
                _this.responseRoleDto.rules = policyRulesArrsysDto;
                _this.isInformationTable = true;
                _this.isInformationError = false;
            }
            else {
                _this.isInformationError = true;
            }
            _this.isInformationOutput = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    UpdateClusterRoleComponent.prototype.save = function () {
        var _this = this;
        var policyRulesArrsys = [];
        for (var i = 0; i < this.responseRoleDto.rules.length; i++) {
            policyRulesArrsys.push(new index_1.PolicyRule(this.responseRoleDto.rules[i].verbs.split(','), this.responseRoleDto.rules[i].apiGroups.split(','), this.responseRoleDto.rules[i].resources.split(','), this.responseRoleDto.rules[i].resourceNames.split(',')));
        }
        var role = new role_1.Role(this.responseRoleDto.typeMeta.pop(), this.responseRoleDto.metadata.pop(), policyRulesArrsys);
        console.log(role);
        this.service.updateRole(role)
            .subscribe(function (data) {
            if (typeof data != "string") {
                _this.isInformationTable = true;
            }
            else {
                _this.isInformationError = true;
            }
            _this.responseRole = data;
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
        this.responseRoleDto.rules.push(new role_1.PolicyRuleDto("null"));
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