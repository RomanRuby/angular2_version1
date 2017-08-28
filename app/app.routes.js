"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = require("./component/role/list/list.component");
var patch_component_1 = require("./component/role/patch/patch.component");
var create_component_1 = require("./component/role/create/create.component");
var update_component_1 = require("./component/role/update/update.component");
var get_component_1 = require("./component/role/get/get.component");
var watch_component_1 = require("./component/role/watch/watch.component");
var delete_component_1 = require("./component/role/delete/delete.component");
var deleteCollection_component_1 = require("./component/role/deleteCollection/deleteCollection.component");
var home_component_1 = require("./component/home/home.component");
var mainRole_component_1 = require("./component/role/main/mainRole.component");
var mainClusterRole_component_1 = require("./component/clusterrole/main/mainClusterRole.component");
exports.routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    { path: "dashboard", component: home_component_1.HomeComponent },
    { path: "role/list", component: list_component_1.ListRoleComponent },
    { path: "role/patch", component: patch_component_1.PatchRoleComponent },
    { path: "role/create", component: create_component_1.CreateRoleComponent },
    { path: "role/update", component: update_component_1.UpdateRoleComponent },
    { path: "role/get", component: get_component_1.GetRoleComponent },
    { path: "role/watch", component: watch_component_1.WatchRoleComponent },
    { path: "role/delete", component: delete_component_1.DeleteRoleComponent },
    { path: "role/deleteCollection", component: deleteCollection_component_1.DeleteCollectionRoleComponent },
    { path: "role", component: mainRole_component_1.MainRoleComponent },
    { path: "clusterrole", component: mainClusterRole_component_1.MainClusterRoleComponent },
];
//# sourceMappingURL=app.routes.js.map