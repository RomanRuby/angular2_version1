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
var RoleService = RoleService_1 = (function () {
    function RoleService(http) {
        this.http = http;
        // адрес сервиса
        this.url = "http://localhost:8081";
    }
    RoleService.prototype.createRole = function (role) {
        return this.http.post(this.url + "/role/create", role)
            .catch(RoleService_1.handleError);
    };
    RoleService.prototype.updateRole = function (role) {
        return this.http.post(this.url + "/role/update", role)
            .catch(RoleService_1.handleError);
    };
    RoleService.prototype.watchRole = function (id, listOptions) {
        return this.http.post(this.url + "/role/watch" + "/" + id, listOptions)
            .catch(RoleService_1.handleError);
    };
    RoleService.prototype.listRole = function (id, listOptions) {
        return this.http.post(this.url + "/role/list/" + id, listOptions)
            .catch(RoleService_1.handleError);
    };
    RoleService.prototype.deleteRole = function (id, namespace, deleteOptions) {
        return this.http.post(this.url + "/role/delete/" + id + "/" + namespace, deleteOptions)
            .catch(RoleService_1.handleError);
    };
    RoleService.prototype.deleteCollectionRole = function (id, deleteOptions, listOptions) {
        return this.http.post(this.url + "/role/deleteCollection/" + id, new roles_1.DeleteCol(deleteOptions, listOptions))
            .catch(RoleService_1.handleError);
    };
    RoleService.prototype.patchRole = function (id, namespace, patchType, data, subresources) {
        var patchTypes = new roles_1.PatchType(patchType, data, subresources);
        return this.http.post(this.url + "/role/patch" + "/" + id + "/" + namespace, patchTypes)
            .catch(RoleService_1.handleError);
    };
    RoleService.prototype.getRole = function (id, namespace, getOptions) {
        return this.http.post(this.url + "/role/get" + "/" + id + "/" + namespace, getOptions)
            .catch(RoleService_1.handleError);
    };
    RoleService.handleError = function (error, cought) {
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
    return RoleService;
}());
RoleService = RoleService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], RoleService);
exports.RoleService = RoleService;
var RoleService_1;
//# sourceMappingURL=role.service.js.map