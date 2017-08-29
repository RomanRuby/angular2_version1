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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var roles_1 = require("./roles");
var app_service_1 = require("./app.service");
var ClusterRoleService = ClusterRoleService_1 = (function () {
    function ClusterRoleService(http) {
        this.http = http;
        this.url = "http://localhost:8081";
    }
    ClusterRoleService.prototype.createRole = function (role) {
        return this.http.post(this.url + "/clusterrole/create", role)
            .catch(ClusterRoleService_1.handleError);
    };
    ClusterRoleService.prototype.updateRole = function (role) {
        return this.http.post(this.url + "/clusterrole/update", role)
            .catch(ClusterRoleService_1.handleError);
    };
    ClusterRoleService.prototype.watchRole = function (listOptions) {
        return this.http.post(this.url + "/clusterrole/watch", listOptions)
            .catch(ClusterRoleService_1.handleError);
    };
    ClusterRoleService.prototype.listRole = function (listOptions) {
        return this.http.post(this.url + "/clusterrole/list", listOptions)
            .catch(ClusterRoleService_1.handleError);
    };
    ClusterRoleService.prototype.deleteRole = function (namespace, deleteOptions) {
        return this.http.post(this.url + "/clusterrole/delete/" + namespace, deleteOptions)
            .catch(ClusterRoleService_1.handleError);
    };
    ClusterRoleService.prototype.deleteCollectionRole = function (deleteOptions, listOptions) {
        return this.http.post(this.url + "/clusterrole/deleteCollection", new roles_1.DeleteCol(deleteOptions, listOptions))
            .catch(ClusterRoleService_1.handleError);
    };
    ClusterRoleService.prototype.patchRole = function (id, patchType, data, subresources) {
        var patchTypes = new roles_1.PatchType(patchType, data, subresources);
        return this.http.post(this.url + "/clusterrole/patch" + "/" + id, patchTypes)
            .catch(ClusterRoleService_1.handleError);
    };
    ClusterRoleService.prototype.getRole = function (namespace, getOptions) {
        return this.http.post(this.url + "/clusterrole/get/" + namespace, getOptions)
            .catch(ClusterRoleService_1.handleError);
    };
    ClusterRoleService.handleError = function (error, cought) {
        var message = "";
        if (error instanceof http_1.Response) {
            var errorData = error.json().error || JSON.stringify(error.json());
            message = error.status + " - " + (error.statusText || '') + " " + errorData;
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return Observable_1.Observable.throw(message);
    };
    return ClusterRoleService;
}());
ClusterRoleService = ClusterRoleService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], ClusterRoleService);
exports.ClusterRoleService = ClusterRoleService;
var ClusterRoleService_1;
//# sourceMappingURL=clusterrole.service.js.map