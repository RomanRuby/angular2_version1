"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ApiHttpService = (function () {
    function ApiHttpService(http) {
        this.http = http;
        this.methods = ['get', 'delete'];
        this.bodyMethods = ['post', 'put', 'patch'];
        this.init();
    }
    ApiHttpService.prototype.init = function () {
        var _this = this;
        var _loop_1 = function (method) {
            this_1[method] = function (url, option) {
                return _this.request(method, url, option);
            };
        };
        var this_1 = this;
        for (var _i = 0, _a = this.methods; _i < _a.length; _i++) {
            var method = _a[_i];
            _loop_1(method);
        }
        var _loop_2 = function (method) {
            this_2[method] = function (url, body, option) {
                return _this.requestWithBody(method, url, body, option);
            };
        };
        var this_2 = this;
        for (var _b = 0, _c = this.bodyMethods; _b < _c.length; _b++) {
            var method = _c[_b];
            _loop_2(method);
        }
    };
    ApiHttpService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    ApiHttpService.prototype.handleError = function (error) {
        var errMsg;
        errMsg = error.text() + " ";
        return Observable_1.Observable.throw(errMsg);
    };
    ApiHttpService.prototype.request = function (method, url, option) {
        return this.http[method](url, option)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiHttpService.prototype.requestWithBody = function (method, url, body, option) {
        return this.http[method](url, body, option)
            .map(this.extractData)
            .catch(this.handleError);
    };
    return ApiHttpService;
}());
exports.ApiHttpService = ApiHttpService;
var AppService = (function (_super) {
    __extends(AppService, _super);
    function AppService(http) {
        return _super.call(this, http) || this;
    }
    return AppService;
}(ApiHttpService));
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map