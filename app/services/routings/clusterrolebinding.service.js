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
var app_service_1 = require("../app.service");
var ClusterRoleBindingService = (function () {
    function ClusterRoleBindingService(http) {
        this.http = http;
        this.url = location.protocol + '//' + location.host;
    }
    ClusterRoleBindingService.prototype.createRole = function (role) {
        return this.http.post(this.url + "/clusterrolebinding/create", role);
    };
    ClusterRoleBindingService.prototype.updateRole = function (role) {
        return this.http.post(this.url + "/clusterrolebinding/update", role);
    };
    ClusterRoleBindingService.prototype.listRole = function (listOptions) {
        return this.http.post(this.url + "/clusterrolebinding/list", listOptions);
    };
    ClusterRoleBindingService.prototype.deleteRole = function (id, deleteOptions) {
        return this.http.post(this.url + "/clusterrolebinding/delete/" + id, deleteOptions);
    };
    ClusterRoleBindingService.prototype.deleteCollectionRole = function (deleteOptions, listOptions) {
        return this.http.post(this.url + "/clusterrolebinding/deleteCollection", deleteOptions, listOptions);
    };
    ClusterRoleBindingService.prototype.getRole = function (name, getOptions) {
        return this.http.post(this.url + "/clusterrolebinding/get/" + name, getOptions);
    };
    return ClusterRoleBindingService;
}());
ClusterRoleBindingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], ClusterRoleBindingService);
exports.ClusterRoleBindingService = ClusterRoleBindingService;
//# sourceMappingURL=clusterrolebinding.service.js.map