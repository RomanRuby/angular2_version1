"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role = (function () {
    function Role(typeMeta, metadata, rules) {
        this.typeMeta = typeMeta;
        this.metadata = metadata;
        this.rules = rules;
    }
    return Role;
}());
exports.Role = Role;
var RoleBindingDto = (function () {
    function RoleBindingDto() {
    }
    return RoleBindingDto;
}());
exports.RoleBindingDto = RoleBindingDto;
var RoleBinding = (function () {
    function RoleBinding(typeMeta, objectMeta, subjectRules, roleRef) {
        this.typeMeta = typeMeta;
        this.objectMeta = objectMeta;
        this.subjectRules = subjectRules;
        this.roleRef = roleRef;
    }
    return RoleBinding;
}());
exports.RoleBinding = RoleBinding;
var ResponseRole = (function () {
    function ResponseRole() {
    }
    return ResponseRole;
}());
exports.ResponseRole = ResponseRole;
var ResponseRoleBinding = (function () {
    function ResponseRoleBinding() {
    }
    return ResponseRoleBinding;
}());
exports.ResponseRoleBinding = ResponseRoleBinding;
var MetaDataResponse = (function () {
    function MetaDataResponse() {
    }
    return MetaDataResponse;
}());
exports.MetaDataResponse = MetaDataResponse;
var ItemsResponse = (function () {
    function ItemsResponse() {
    }
    return ItemsResponse;
}());
exports.ItemsResponse = ItemsResponse;
var Rules = (function () {
    function Rules() {
    }
    return Rules;
}());
exports.Rules = Rules;
var MetaDataMeta = (function () {
    function MetaDataMeta() {
    }
    return MetaDataMeta;
}());
exports.MetaDataMeta = MetaDataMeta;
var MetaData = (function () {
    function MetaData() {
    }
    return MetaData;
}());
exports.MetaData = MetaData;
var RoleDto = (function () {
    function RoleDto() {
    }
    return RoleDto;
}());
exports.RoleDto = RoleDto;
var RoleRef = (function () {
    function RoleRef(apiGroup, kind, name) {
        this.apiGroup = apiGroup;
        this.kind = kind;
        this.name = name;
    }
    return RoleRef;
}());
exports.RoleRef = RoleRef;
var DeleteCollectionDto = (function () {
    function DeleteCollectionDto() {
    }
    return DeleteCollectionDto;
}());
exports.DeleteCollectionDto = DeleteCollectionDto;
var Subject = (function () {
    function Subject(apiGroup, kind, name, namespace) {
        this.apiGroup = apiGroup;
        this.kind = kind;
        this.name = name;
        this.namespace = namespace;
    }
    return Subject;
}());
exports.Subject = Subject;
var DeleteResult = (function () {
    function DeleteResult() {
    }
    return DeleteResult;
}());
exports.DeleteResult = DeleteResult;
var DeleteCol = (function () {
    function DeleteCol(deleteOption, list) {
        this.deleteOption = deleteOption;
        this.list = list;
    }
    return DeleteCol;
}());
exports.DeleteCol = DeleteCol;
var ListDto = (function () {
    function ListDto() {
    }
    return ListDto;
}());
exports.ListDto = ListDto;
var TypeMeta = (function () {
    function TypeMeta(kind, apiVersion) {
        this.kind = kind;
        if (apiVersion != null) {
            this.apiVersion = apiVersion;
        }
    }
    return TypeMeta;
}());
exports.TypeMeta = TypeMeta;
var ObjectMeta = (function () {
    function ObjectMeta(name, namespace) {
        this.namespace = namespace;
        this.name = name;
    }
    return ObjectMeta;
}());
exports.ObjectMeta = ObjectMeta;
var UID = (function () {
    function UID() {
    }
    return UID;
}());
var PolicyRule = (function () {
    function PolicyRule(verbs, apiGroups, resources, resourceNames) {
        this.verbs = verbs;
        this.apiGroups = apiGroups;
        this.resources = resources;
        this.resourceNames = resourceNames;
    }
    return PolicyRule;
}());
exports.PolicyRule = PolicyRule;
var PolicyRuleDto = (function () {
    function PolicyRuleDto() {
    }
    return PolicyRuleDto;
}());
exports.PolicyRuleDto = PolicyRuleDto;
var ListOptions = (function () {
    function ListOptions() {
    }
    ListOptions.prototype.setTypeMeta = function (typeMeta) {
        this.typeMeta = typeMeta;
    };
    return ListOptions;
}());
exports.ListOptions = ListOptions;
var DeleteOptions = (function () {
    function DeleteOptions(typeMeta, gracePeriodSeconds, orphanDependents, preconditions, propagationPolicy) {
        this.typeMeta = typeMeta;
    }
    return DeleteOptions;
}());
exports.DeleteOptions = DeleteOptions;
var DeleteOptionsDto = (function () {
    function DeleteOptionsDto() {
    }
    return DeleteOptionsDto;
}());
exports.DeleteOptionsDto = DeleteOptionsDto;
var PatchType = (function () {
    function PatchType(patchType, data, subresources) {
        this.patchType = patchType;
        this.data = data;
        this.subresources = subresources;
    }
    return PatchType;
}());
exports.PatchType = PatchType;
var PatchTypeDto = (function () {
    function PatchTypeDto() {
    }
    return PatchTypeDto;
}());
exports.PatchTypeDto = PatchTypeDto;
var GetOptions = (function () {
    function GetOptions(typeMeta, resourceVersion, includeUninitialized) {
        this.typeMeta = typeMeta;
        this.resourceVersion = resourceVersion;
        this.includeUninitialized = includeUninitialized;
    }
    return GetOptions;
}());
exports.GetOptions = GetOptions;
var GetOptionsDto = (function () {
    function GetOptionsDto() {
    }
    return GetOptionsDto;
}());
exports.GetOptionsDto = GetOptionsDto;
//# sourceMappingURL=roles.js.map