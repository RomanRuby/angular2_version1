"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var sidebar_module_1 = require("./view-menu/sidebar/sidebar.module");
var navbar_module_1 = require("./view-menu/navbar/navbar.module");
var footer_module_1 = require("./view-menu/footer/footer.module");
var role_service_1 = require("./logic-service/role.service");
var clusterrolebinding_service_1 = require("./logic-service/clusterrolebinding.service");
var clusterrole_service_1 = require("./logic-service/clusterrole.service");
var rolebinding_service_1 = require("./logic-service/rolebinding.service");
var app_service_1 = require("./logic-service/app.service");
var primeng_1 = require("primeng/primeng");
var ngx_pagination_1 = require("ngx-pagination");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            sidebar_module_1.SidebarModule,
            navbar_module_1.NavbarModule,
            footer_module_1.FooterModule,
            primeng_1.InputTextModule, primeng_1.DataTableModule, primeng_1.ButtonModule, primeng_1.DialogModule, ngx_pagination_1.NgxPaginationModule,
            router_1.RouterModule.forRoot(app_routes_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            app_routes_1.routeRoleComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [role_service_1.RoleService, clusterrolebinding_service_1.ClusterRoleBindingService, clusterrole_service_1.ClusterRoleService, rolebinding_service_1.RoleBindingService, app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map