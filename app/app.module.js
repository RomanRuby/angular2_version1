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
var role_service_1 = require("./shared/role.service");
var list_component_1 = require("./role/list/list.component");
var clusterrolebinding_service_1 = require("./shared/clusterrolebinding.service");
var clusterrole_service_1 = require("./shared/clusterrole.service");
var rolebinding_service_1 = require("./shared/rolebinding.service");
var delete_component_1 = require("./role/delete/delete.component");
var watch_component_1 = require("./role/watch/watch.component");
var deleteCollection_component_1 = require("./role/deleteCollection/deleteCollection.component");
var get_component_1 = require("./role/get/get.component");
var create_component_1 = require("./role/create/create.component");
var patch_component_1 = require("./role/patch/patch.component");
var update_component_1 = require("./role/update/update.component");
var sidebar_module_1 = require("./sidebar/sidebar.module");
var app_service_1 = require("./shared/app.service");
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
            router_1.RouterModule.forRoot(app_routes_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            list_component_1.ListRoleComponent, delete_component_1.DeleteRoleComponent, watch_component_1.WatchRoleComponent, deleteCollection_component_1.DeleteCollectionRoleComponent, get_component_1.GetRoleComponent,
            create_component_1.CreateRoleComponent, patch_component_1.PatchRoleComponent, update_component_1.UpdateRoleComponent, patch_component_1.PatchRoleComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [role_service_1.RoleService, clusterrolebinding_service_1.ClusterRoleBindingService, clusterrole_service_1.ClusterRoleService, rolebinding_service_1.RoleBindingService, app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map