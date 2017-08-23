"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role = (function () {
    function Role() {
    }
    return Role;
}());
exports.Role = Role;
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
    function PolicyRule() {
    }
    return PolicyRule;
}());
exports.PolicyRule = PolicyRule;
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
    function PatchType() {
    }
    return PatchType;
}());
exports.PatchType = PatchType;
var GetOptions = (function () {
    function GetOptions() {
    }
    return GetOptions;
}());
exports.GetOptions = GetOptions;
//# sourceMappingURL=roles.js.map