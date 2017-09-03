"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = require("./component/role/list/list.component");
var create_component_1 = require("./component/role/create/create.component");
var update_component_1 = require("./component/role/update/update.component");
var home_component_1 = require("./component/home/home.component");
var mainRole_component_1 = require("./component/role/main/mainRole.component");
var mainClusterRole_component_1 = require("./component/clusterrole/main/mainClusterRole.component");
var listCluster_component_1 = require("./component/clusterrole/list/listCluster.component");
var createCluster_component_1 = require("./component/clusterrole/create/createCluster.component");
var updateCluster_component_1 = require("./component/clusterrole/update/updateCluster.component");
var mainClusterRoleBinding_component_1 = require("./component/clusterrolebinding/main/mainClusterRoleBinding.component");
var createClusterBinding_component_1 = require("./component/clusterrolebinding/create/createClusterBinding.component");
var listClusterBinding_component_1 = require("./component/clusterrolebinding/list/listClusterBinding.component");
var updateClusterBinding_component_1 = require("./component/clusterrolebinding/update/updateClusterBinding.component");
var listBinding_component_1 = require("./component/rolebinding/list/listBinding.component");
var createBinding_component_1 = require("./component/rolebinding/create/createBinding.component");
var updateBinding_component_1 = require("./component/rolebinding/update/updateBinding.component");
var mainRoleBinding_component_1 = require("./component/rolebinding/main/mainRoleBinding.component");
exports.routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    { path: "dashboard", component: home_component_1.HomeComponent },
    { path: "role/list", component: list_component_1.ListRoleComponent },
    { path: "role/create", component: create_component_1.CreateRoleComponent },
    { path: "role/update", component: update_component_1.UpdateRoleComponent },
    { path: "clusterrole/list", component: listCluster_component_1.ListClusterRoleComponent },
    { path: "clusterrole/create", component: createCluster_component_1.CreateClusterRoleComponent },
    { path: "clusterrole/update", component: updateCluster_component_1.UpdateClusterRoleComponent },
    { path: "role", component: mainRole_component_1.MainRoleComponent },
    { path: "clusterrolebinding", component: mainClusterRoleBinding_component_1.MainClusterRoleBindingComponent },
    { path: "clusterrole", component: mainClusterRole_component_1.MainClusterRoleComponent },
    { path: "rolebinding", component: mainRoleBinding_component_1.MainRoleBindingComponent },
    { path: "clusterrolebinding/create", component: createClusterBinding_component_1.CreateClusterBindingComponent },
    { path: "clusterrolebinding/list", component: listClusterBinding_component_1.ListClusterBindingComponent },
    { path: "clusterrolebinding/update", component: updateClusterBinding_component_1.UpdateClusterBindingComponent },
    { path: "rolebinding/create", component: createBinding_component_1.CreateBindingComponent },
    { path: "rolebinding/list", component: listBinding_component_1.ListBindingComponent },
    { path: "rolebinding/update", component: updateBinding_component_1.UpdateBindingComponent }
];
exports.routeRoleComponent = [list_component_1.ListRoleComponent, create_component_1.CreateRoleComponent, update_component_1.UpdateRoleComponent, home_component_1.HomeComponent,
    listCluster_component_1.ListClusterRoleComponent,
    createCluster_component_1.CreateClusterRoleComponent, updateCluster_component_1.UpdateClusterRoleComponent,
    createClusterBinding_component_1.CreateClusterBindingComponent, listClusterBinding_component_1.ListClusterBindingComponent,
    updateClusterBinding_component_1.UpdateClusterBindingComponent,
    createBinding_component_1.CreateBindingComponent, listBinding_component_1.ListBindingComponent,
    updateBinding_component_1.UpdateBindingComponent];
//# sourceMappingURL=app.routes.js.map