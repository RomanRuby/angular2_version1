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
var listCluster_component_1 = require("./component/clusterrole/list/listCluster.component");
var patchCluster_component_1 = require("./component/clusterrole/patch/patchCluster.component");
var createCluster_component_1 = require("./component/clusterrole/create/createCluster.component");
var updateCluster_component_1 = require("./component/clusterrole/update/updateCluster.component");
var getCluster_component_1 = require("./component/clusterrole/get/getCluster.component");
var watchCluster_component_1 = require("./component/clusterrole/watch/watchCluster.component");
var deleteCluster_component_1 = require("./component/clusterrole/delete/deleteCluster.component");
var deleteCollectionCluster_component_1 = require("./component/clusterrole/deleteCollection/deleteCollectionCluster.component");
var mainClusterRoleBinding_component_1 = require("./component/clusterrolebinding/main/mainClusterRoleBinding.component");
var createClusterBinding_component_1 = require("./component/clusterrolebinding/create/createClusterBinding.component");
var listClusterBinding_component_1 = require("./component/clusterrolebinding/list/listClusterBinding.component");
var deleteClusterRoleBinding_component_1 = require("./component/clusterrolebinding/delete/deleteClusterRoleBinding.component");
var getClusterRoleBinding_component_1 = require("./component/clusterrolebinding/get/getClusterRoleBinding.component");
var patchClusterRoleBinding_component_1 = require("./component/clusterrolebinding/patch/patchClusterRoleBinding.component");
var updateClusterBinding_component_1 = require("./component/clusterrolebinding/update/updateClusterBinding.component");
var watchClusterRoleBinding_component_1 = require("./component/clusterrolebinding/watch/watchClusterRoleBinding.component");
var deleteClusterRoleBindingCollection_component_1 = require("./component/clusterrolebinding/deleteCollection/deleteClusterRoleBindingCollection.component");
var listBinding_component_1 = require("./component/rolebinding/list/listBinding.component");
var createBinding_component_1 = require("./component/rolebinding/create/createBinding.component");
var deleteRoleBinding_component_1 = require("./component/rolebinding/delete/deleteRoleBinding.component");
var deleteRoleBindingCollection_component_1 = require("./component/rolebinding/deleteCollection/deleteRoleBindingCollection.component");
var patchRoleBinding_component_1 = require("./component/rolebinding/patch/patchRoleBinding.component");
var updateBinding_component_1 = require("./component/rolebinding/update/updateBinding.component");
var watchRoleBinding_component_1 = require("./component/rolebinding/watch/watchRoleBinding.component");
var getRoleBinding_component_1 = require("./component/rolebinding/get/getRoleBinding.component");
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
    { path: "clusterrole/list", component: listCluster_component_1.ListClusterRoleComponent },
    { path: "clusterrole/patch", component: patchCluster_component_1.PatchClusterRoleComponent },
    { path: "clusterrole/create", component: createCluster_component_1.CreateClusterRoleComponent },
    { path: "clusterrole/update", component: updateCluster_component_1.UpdateClusterRoleComponent },
    { path: "clusterrole/get", component: getCluster_component_1.GetClusterRoleComponent },
    { path: "clusterrole/watch", component: watchCluster_component_1.WatchClusterRoleComponent },
    { path: "clusterrole/delete", component: deleteCluster_component_1.DeleteClusterRoleComponent },
    { path: "clusterrole/deleteCollection", component: deleteCollectionCluster_component_1.DeleteCollectionClusterRoleComponent },
    { path: "role", component: mainRole_component_1.MainRoleComponent },
    { path: "clusterrolebinding", component: mainClusterRoleBinding_component_1.MainClusterRoleBindingComponent },
    { path: "clusterrole", component: mainClusterRole_component_1.MainClusterRoleComponent },
    { path: "rolebinding", component: mainClusterRoleBinding_component_1.MainClusterRoleBindingComponent },
    { path: "clusterrolebinding/create", component: createClusterBinding_component_1.CreateClusterBindingComponent },
    { path: "clusterrolebinding/list", component: listClusterBinding_component_1.ListClusterBindingComponent },
    { path: "clusterrolebinding/delete", component: deleteClusterRoleBinding_component_1.DeleteClusterRoleBindingComponent },
    { path: "clusterrolebinding/deleteCollection", component: deleteClusterRoleBindingCollection_component_1.DeleteCollectionClusterRoleBindingComponent },
    { path: "clusterrolebinding/get", component: getClusterRoleBinding_component_1.GetClusterRoleBindingComponent },
    { path: "clusterrolebinding/patch", component: patchClusterRoleBinding_component_1.PatchClusterRoleBindingComponent },
    { path: "clusterrolebinding/update", component: updateClusterBinding_component_1.UpdateClusterBindingComponent },
    { path: "clusterrolebinding/watch", component: watchClusterRoleBinding_component_1.WatchClusterRoleBindingComponent },
    { path: "clusterrolebinding/patch", component: patchClusterRoleBinding_component_1.PatchClusterRoleBindingComponent },
    { path: "rolebinding/create", component: createBinding_component_1.CreateBindingComponent },
    { path: "rolebinding/list", component: listBinding_component_1.ListBindingComponent },
    { path: "rolebinding/delete", component: deleteRoleBinding_component_1.DeleteRoleBindingComponent },
    { path: "rolebinding/deleteCollection", component: deleteRoleBindingCollection_component_1.DeleteCollectionRoleBindingComponent },
    { path: "rolebinding/get", component: getRoleBinding_component_1.GetRoleBindingComponent },
    { path: "rolebinding/patch", component: patchRoleBinding_component_1.PatchRoleBindingComponent },
    { path: "rolebinding/update", component: updateBinding_component_1.UpdateBindingComponent },
    { path: "rolebinding/watch", component: watchRoleBinding_component_1.WatchRoleBindingComponent },
    { path: "rolebinding/patch", component: patchRoleBinding_component_1.PatchRoleBindingComponent }
];
//# sourceMappingURL=app.routes.js.map