"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = require("./role/list/list.component");
var delete_component_1 = require("./role/delete/delete.component");
var watch_component_1 = require("./role/watch/watch.component");
var deleteCollection_component_1 = require("./role/deleteCollection/deleteCollection.component");
var get_component_1 = require("./role/get/get.component");
var create_component_1 = require("./role/create/create.component");
var update_component_1 = require("./role/update/update.component");
var patch_component_1 = require("./role/patch/patch.component");
exports.routes = [
    {
        path: "",
        redirectTo: "role/patch",
        pathMatch: "full"
    },
    { path: "role/list", component: list_component_1.ListRoleComponent },
    { path: "role/patch", component: patch_component_1.PatchRoleComponent },
    { path: "role/create", component: create_component_1.CreateRoleComponent },
    { path: "role/update", component: update_component_1.UpdateRoleComponent },
    { path: "role/get", component: get_component_1.GetRoleComponent },
    { path: "role/watch", component: watch_component_1.WatchRoleComponent },
    { path: "role/delete", component: delete_component_1.DeleteRoleComponent },
    { path: "role/deleteCollection", component: deleteCollection_component_1.DeleteCollectionRoleComponent }
];
//# sourceMappingURL=app.routes.js.map