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
var role_service_1 = require("../../../logic-service/role.service");
var role_1 = require("../../../logic-service/models/role");
var common_1 = require("../../../logic-service/models/common");
var CreateRoleComponent = (function () {
    function CreateRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.viewAdditionalField = false;
        this.type = false;
        this.responseValue = true;
    }
    CreateRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    CreateRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    CreateRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.namespace = productForm.value.namespace;
        this.roleDto.name = productForm.value.name;
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        this.roleDto.generateName = productForm.value.generateName;
        this.roleDto.selfLink = productForm.value.selfLink;
        this.roleDto.uid = productForm.value.uid;
        this.roleDto.policyRules = productForm.value.policyRules;
        var policyRulesArrsys = [];
        for (var i = 0; i < this.roleDto.policyRules.length; i++) {
            policyRulesArrsys.push(new role_1.PolicyRule(this.roleDto.policyRules[i].verbs.split(','), this.roleDto.policyRules[i].apiGroups.split(','), this.roleDto.policyRules[i].resources.split(','), this.roleDto.policyRules[i].resourceNames.split(',')));
        }
        var role = new role_1.Role(new common_1.TypeMeta("Role", this.roleDto.apiVersion), new role_1.ObjectMetaView(this.roleDto.name, this.roleDto.namespace, null, null, null, null, null, null, null, null, null), policyRulesArrsys);
        this.service.createRole(role)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.responseValue = typeof _this.responseRole != "string";
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    CreateRoleComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    CreateRoleComponent.prototype.initForm = function () {
        this.roleDto = new role_1.RoleDto();
        this.productForm.patchValue(this.roleDto);
    };
    CreateRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            namespace: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            policyRules: this.fb.array([
                this.initPolicyRules(),
            ])
        });
    };
    CreateRoleComponent.prototype.initPolicyRules = function () {
        return this.fb.group({
            verbs: ["", forms_1.Validators.required],
            apiGroups: ["",],
            resources: ["",],
            resourceNames: ["",],
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
    __metadata("design:paramtypes", [role_service_1.RoleService,
        forms_1.FormBuilder])
], CreateRoleComponent);
exports.CreateRoleComponent = CreateRoleComponent;
//# sourceMappingURL=create.component.js.map