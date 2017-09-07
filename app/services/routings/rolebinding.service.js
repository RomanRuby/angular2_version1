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
var RoleBindingService = (function () {
    function RoleBindingService(http) {
        this.http = http;
        this.url = location.protocol + '//' + location.host;
    }
    RoleBindingService.prototype.createRole = function (role) {
        return this.http.post(this.url + "/rolebinding/create", role);
    };
    RoleBindingService.prototype.updateRole = function (role) {
        return this.http.post(this.url + "/rolebinding/update", role);
    };
    RoleBindingService.prototype.listRole = function (id, listOptions) {
        return this.http.post(this.url + "/rolebinding/list/" + id, listOptions);
    };
    RoleBindingService.prototype.deleteRole = function (id, namespace, deleteOptions) {
        return this.http.post(this.url + "/rolebinding/delete/" + id + "/" + namespace, deleteOptions);
    };
    RoleBindingService.prototype.deleteCollectionRole = function (id, deleteOptions, listOptions) {
        return this.http.post(this.url + "/rolebinding/deleteCollection/" + id, deleteOptions, listOptions);
    };
    RoleBindingService.prototype.getRole = function (id, namespace, getOptions) {
        return this.http.post(this.url + "/rolebinding/get/" + id + "/" + namespace, getOptions);
    };
    return RoleBindingService;
}());
RoleBindingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], RoleBindingService);
exports.RoleBindingService = RoleBindingService;
//# sourceMappingURL=rolebinding.service.js.map