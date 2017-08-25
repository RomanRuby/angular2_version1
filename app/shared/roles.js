"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role = (function () {
    function Role(typeMeta, objectMeta, policyRules) {
        this.typeMeta = typeMeta;
        this.objectMeta = objectMeta;
        this.policyRules = policyRules;
    }
    return Role;
}());
exports.Role = Role;
var ResponseRole = (function () {
    function ResponseRole() {
    }
    return ResponseRole;
}());
exports.ResponseRole = ResponseRole;
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
var RoleBinding = (function () {
    function RoleBinding() {
    }
    return RoleBinding;
}());
exports.RoleBinding = RoleBinding;
var RoleRef = (function () {
    function RoleRef() {
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
    function Subject() {
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
var ListDto = (function () {
    function ListDto() {
    }
    return ListDto;
}());
exports.ListDto = ListDto;
var TypeMeta = (function () {
    function TypeMeta(kind, apiVersion) {
        this.kind = kind;
        this.apiVersion = apiVersion;
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
    function PolicyRule(verbs, apiGroups, resources, resourceNames, nonResourceURLs) {
        this.verbs = verbs;
        this.apiGroups = apiGroups;
        this.resources = resources;
        this.resourceNames = resourceNames;
        this.nonResourceURLs = nonResourceURLs;
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
        this.gracePeriodSeconds = gracePeriodSeconds;
        this.orphanDependents = orphanDependents;
        this.preconditions = preconditions;
        this.propagationPolicy = propagationPolicy;
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