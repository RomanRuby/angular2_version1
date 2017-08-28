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
var list_component_1 = require("./component/role/list/list.component");
var delete_component_1 = require("./component/role/delete/delete.component");
var watch_component_1 = require("./component/role/watch/watch.component");
var get_component_1 = require("./component/role/get/get.component");
var create_component_1 = require("./component/role/create/create.component");
var patch_component_1 = require("./component/role/patch/patch.component");
var update_component_1 = require("./component/role/update/update.component");
var home_component_1 = require("./component/home/home.component");
var listCluster_component_1 = require("./component/clusterrole/list/listCluster.component");
var deleteCluster_component_1 = require("./component/clusterrole/delete/deleteCluster.component");
var watchCluster_component_1 = require("./component/clusterrole/watch/watchCluster.component");
var getCluster_component_1 = require("./component/clusterrole/get/getCluster.component");
var createCluster_component_1 = require("./component/clusterrole/create/createCluster.component");
var patchCluster_component_1 = require("./component/clusterrole/patch/patchCluster.component");
var updateCluster_component_1 = require("./component/clusterrole/update/updateCluster.component");
var deleteCollectionCluster_component_1 = require("./component/clusterrole/deleteCollection/deleteCollectionCluster.component");
var deleteCollection_component_1 = require("./component/role/deleteCollection/deleteCollection.component");
var createClusterBinding_component_1 = require("./component/clusterrolebinding/create/createClusterBinding.component");
var listClusterBinding_component_1 = require("./component/clusterrolebinding/list/listClusterBinding.component");
var deleteClusterRoleBinding_component_1 = require("./component/clusterrolebinding/delete/deleteClusterRoleBinding.component");
var patchClusterRoleBinding_component_1 = require("./component/clusterrolebinding/patch/patchClusterRoleBinding.component");
var updateClusterBinding_component_1 = require("./component/clusterrolebinding/update/updateClusterBinding.component");
var watchClusterRoleBinding_component_1 = require("./component/clusterrolebinding/watch/watchClusterRoleBinding.component");
var getClusterRoleBinding_component_1 = require("./component/clusterrolebinding/get/getClusterRoleBinding.component");
var createBinding_component_1 = require("./component/rolebinding/create/createBinding.component");
var listBinding_component_1 = require("./component/rolebinding/list/listBinding.component");
var deleteRoleBinding_component_1 = require("./component/rolebinding/delete/deleteRoleBinding.component");
var deleteRoleBindingCollection_component_1 = require("./component/rolebinding/deleteCollection/deleteRoleBindingCollection.component");
var patchRoleBinding_component_1 = require("./component/rolebinding/patch/patchRoleBinding.component");
var updateBinding_component_1 = require("./component/rolebinding/update/updateBinding.component");
var watchRoleBinding_component_1 = require("./component/rolebinding/watch/watchRoleBinding.component");
var getRoleBinding_component_1 = require("./component/rolebinding/get/getRoleBinding.component");
var deleteClusterRoleBindingCollection_component_1 = require("./component/clusterrolebinding/deleteCollection/deleteClusterRoleBindingCollection.component");
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
            router_1.RouterModule.forRoot(app_routes_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            list_component_1.ListRoleComponent, delete_component_1.DeleteRoleComponent, watch_component_1.WatchRoleComponent, deleteCollection_component_1.DeleteCollectionRoleComponent, get_component_1.GetRoleComponent,
            create_component_1.CreateRoleComponent, patch_component_1.PatchRoleComponent, update_component_1.UpdateRoleComponent, patch_component_1.PatchRoleComponent,
            home_component_1.HomeComponent,
            listCluster_component_1.ListClusterRoleComponent, deleteCluster_component_1.DeleteClusterRoleComponent, watchCluster_component_1.WatchClusterRoleComponent, deleteCollectionCluster_component_1.DeleteCollectionClusterRoleComponent,
            getCluster_component_1.GetClusterRoleComponent, createCluster_component_1.CreateClusterRoleComponent, patchCluster_component_1.PatchClusterRoleComponent, updateCluster_component_1.UpdateClusterRoleComponent, patchCluster_component_1.PatchClusterRoleComponent,
            createClusterBinding_component_1.CreateClusterBindingComponent, listClusterBinding_component_1.ListClusterBindingComponent, deleteClusterRoleBinding_component_1.DeleteClusterRoleBindingComponent, deleteClusterRoleBindingCollection_component_1.DeleteCollectionClusterRoleBindingComponent,
            patchClusterRoleBinding_component_1.PatchClusterRoleBindingComponent, updateClusterBinding_component_1.UpdateClusterBindingComponent, watchClusterRoleBinding_component_1.WatchClusterRoleBindingComponent, patchClusterRoleBinding_component_1.PatchClusterRoleBindingComponent,
            getClusterRoleBinding_component_1.GetClusterRoleBindingComponent,
            createBinding_component_1.CreateBindingComponent, listBinding_component_1.ListBindingComponent, deleteRoleBinding_component_1.DeleteRoleBindingComponent, deleteRoleBindingCollection_component_1.DeleteCollectionRoleBindingComponent,
            patchRoleBinding_component_1.PatchRoleBindingComponent, updateBinding_component_1.UpdateBindingComponent, watchRoleBinding_component_1.WatchRoleBindingComponent, patchRoleBinding_component_1.PatchRoleBindingComponent,
            getRoleBinding_component_1.GetRoleBindingComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [role_service_1.RoleService, clusterrolebinding_service_1.ClusterRoleBindingService, clusterrole_service_1.ClusterRoleService, rolebinding_service_1.RoleBindingService, app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map