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
var RoleBindingService = RoleBindingService_1 = (function () {
    function RoleBindingService(http) {
        this.http = http;
        this.url = "http://localhost:8081";
    }
    RoleBindingService.prototype.createRole = function (role) {
        return this.http.post(this.url + "/rolebinding/create", role)
            .catch(RoleBindingService_1.handleError);
    };
    RoleBindingService.prototype.updateRole = function (role) {
        return this.http.post(this.url + "/rolebinding/update", role)
            .catch(RoleBindingService_1.handleError);
    };
    RoleBindingService.prototype.watchRole = function (id, listOptions) {
        return this.http.post(this.url + "/rolebinding/watch/" + id, listOptions)
            .catch(RoleBindingService_1.handleError);
    };
    RoleBindingService.prototype.listRole = function (id, listOptions) {
        return this.http.post(this.url + "/rolebinding/list/" + id, listOptions)
            .catch(RoleBindingService_1.handleError);
    };
    RoleBindingService.prototype.deleteRole = function (id, namespace, deleteOptions) {
        return this.http.post(this.url + "/rolebinding/delete/" + id + "/" + namespace, deleteOptions)
            .catch(RoleBindingService_1.handleError);
    };
    RoleBindingService.prototype.deleteCollectionRole = function (id, deleteOptions, listOptions) {
        return this.http.post(this.url + "/rolebinding/deleteCollection/" + id, deleteOptions, listOptions)
            .catch(RoleBindingService_1.handleError);
    };
    RoleBindingService.prototype.patchRole = function (id, namespace, patchType, data, subresources) {
        return this.http.post(this.url + "/rolebinding/patch/" + id + "/" + namespace, new roles_1.PatchType(patchType, data, subresources))
            .catch(RoleBindingService_1.handleError);
    };
    RoleBindingService.prototype.getRole = function (id, namespace, getOptions) {
        return this.http.post(this.url + "/rolebinding/get/" + id + "/" + namespace, getOptions)
            .catch(RoleBindingService_1.handleError);
    };
    RoleBindingService.handleError = function (error, cought) {
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
    return RoleBindingService;
}());
RoleBindingService = RoleBindingService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], RoleBindingService);
exports.RoleBindingService = RoleBindingService;
var RoleBindingService_1;
//# sourceMappingURL=rolebinding.service.js.map