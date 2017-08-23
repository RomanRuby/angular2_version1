"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = require("./role/list/list.component");
var delete_component_1 = require("./role/delete/delete.component");
var watch_component_1 = require("./role/watch/watch.component");
var deleteCollection_component_1 = require("./role/deleteCollection/deleteCollection.component");
exports.routes = [
    {
        path: "",
        redirectTo: "role/deleteCollection",
        pathMatch: "full"
    },
    { path: "role/list", component: list_component_1.ListRoleComponent },
    { path: "role/watch", component: watch_component_1.WatchRoleComponent },
    { path: "role/delete", component: delete_component_1.DeleteRoleComponent },
    { path: "role/deleteCollection", component: deleteCollection_component_1.DeleteCollectionRoleComponent }
];
//# sourceMappingURL=app.routes.js.map