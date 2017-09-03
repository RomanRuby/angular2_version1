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
var clusterrolebinding_service_1 = require("../../../logic-service/clusterrolebinding.service");
var rolebinding_1 = require("../../../logic-service/models/rolebinding");
var role_1 = require("../../../logic-service/models/role");
var common_1 = require("../../../logic-service/models/common");
var UpdateClusterBindingComponent = (function () {
    function UpdateClusterBindingComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.subjectRuleDtoWithDeleteFunction = [];
        this.isInformationOutput = false;
        this.isInformationTable = false;
        this.isInformationError = false;
    }
    UpdateClusterBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    UpdateClusterBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    UpdateClusterBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        var getOption = new common_1.GetOptions(new common_1.TypeMeta("ClusterRole", null), null, null);
        this.service.getRole(productForm.value.name, getOption)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.subjectRuleDtoWithDeleteFunction = [];
            if (typeof _this.responseRole != "string") {
                _this.isInformationTable = true;
                _this.isInformationError = false;
                for (var i = 0; i < _this.responseRole.subjects.length; i++) {
                    _this.subjectRuleDtoWithDeleteFunction.push(new rolebinding_1.SubjectDto(_this.responseRole.subjects[i].apiGroup, false, _this.responseRole.subjects[i].kind, _this.responseRole.subjects[i].name, _this.responseRole.subjects[i].namespace));
                }
            }
            else {
                _this.isInformationTable = false;
                _this.isInformationError = true;
            }
            _this.isInformationOutput = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    UpdateClusterBindingComponent.prototype.save = function () {
        var _this = this;
        var subjectRulesArrays = [];
        for (var i = 0; i < this.subjectRuleDtoWithDeleteFunction.length; i++) {
            if (this.subjectRuleDtoWithDeleteFunction[i].isDelete == false) {
                subjectRulesArrays.push(new rolebinding_1.Subject(this.subjectRuleDtoWithDeleteFunction[i].apiGroup, this.subjectRuleDtoWithDeleteFunction[i].kind, this.subjectRuleDtoWithDeleteFunction[i].name, this.subjectRuleDtoWithDeleteFunction[i].namespace));
            }
            else {
                this.subjectRuleDtoWithDeleteFunction =
                    this.subjectRuleDtoWithDeleteFunction.filter(function (subject) { return subject.isDelete == false; });
            }
        }
        var role = new rolebinding_1.RoleBinding(new common_1.TypeMeta("RoleBinding", null), new role_1.ObjectMeta(this.responseRole.metadata.name, null), subjectRulesArrays, this.responseRole.roleRef);
        this.service.updateRole(role)
            .subscribe(function (data) {
            if (typeof data != "string") {
                _this.isInformationTable = true;
            }
            else {
                _this.isInformationError = true;
                _this.isInformationTable = false;
            }
            _this.responseRole = data;
            console.log(_this.responseRole);
        }, function (error) { return _this.errorMessage = error; });
    };
    UpdateClusterBindingComponent.prototype.initForm = function () {
        this.roleBindingDto = new rolebinding_1.RoleBindingDto();
        this.productForm.patchValue(this.roleBindingDto);
    };
    UpdateClusterBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            name: ["", forms_1.Validators.required],
        });
    };
    UpdateClusterBindingComponent.prototype.addSubjectRules = function () {
        this.subjectRuleDtoWithDeleteFunction.push(new rolebinding_1.SubjectDto("", false, "User", "", ""));
    };
    return UpdateClusterBindingComponent;
}());
UpdateClusterBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "update",
        templateUrl: "updateClusterBinding.component.html",
    }),
    __metadata("design:paramtypes", [clusterrolebinding_service_1.ClusterRoleBindingService,
        forms_1.FormBuilder])
], UpdateClusterBindingComponent);
exports.UpdateClusterBindingComponent = UpdateClusterBindingComponent;
//# sourceMappingURL=updateClusterBinding.component.js.map