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
var app_service_1 = require("./app.service");
var ClusterRoleBindingService = ClusterRoleBindingService_1 = (function () {
    function ClusterRoleBindingService(http) {
        this.http = http;
        this.url = location.protocol + '//' + location.host;
    }
    ClusterRoleBindingService.prototype.createRole = function (role) {
        return this.http.post(this.url + "/clusterrolebinding/create", role)
            .catch(ClusterRoleBindingService_1.handleError);
    };
    ClusterRoleBindingService.prototype.updateRole = function (role) {
        return this.http.post(this.url + "/clusterrolebinding/update", role)
            .catch(ClusterRoleBindingService_1.handleError);
    };
    ClusterRoleBindingService.prototype.listRole = function (listOptions) {
        return this.http.post(this.url + "/clusterrolebinding/list", listOptions)
            .catch(ClusterRoleBindingService_1.handleError);
    };
    ClusterRoleBindingService.prototype.deleteRole = function (id, deleteOptions) {
        return this.http.post(this.url + "/clusterrolebinding/delete/" + id, deleteOptions)
            .catch(ClusterRoleBindingService_1.handleError);
    };
    ClusterRoleBindingService.prototype.deleteCollectionRole = function (deleteOptions, listOptions) {
        return this.http.post(this.url + "/clusterrolebinding/deleteCollection", deleteOptions, listOptions)
            .catch(ClusterRoleBindingService_1.handleError);
    };
    ClusterRoleBindingService.prototype.getRole = function (name, getOptions) {
        return this.http.post(this.url + "/clusterrolebinding/get/" + name, getOptions)
            .catch(ClusterRoleBindingService_1.handleError);
    };
    ClusterRoleBindingService.handleError = function (error, cought) {
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
    return ClusterRoleBindingService;
}());
ClusterRoleBindingService = ClusterRoleBindingService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], ClusterRoleBindingService);
exports.ClusterRoleBindingService = ClusterRoleBindingService;
var ClusterRoleBindingService_1;
//# sourceMappingURL=clusterrolebinding.service.js.map