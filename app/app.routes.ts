import { Routes } from "@angular/router";
import {ListRoleComponent} from "./role/list/list.component";
import {DeleteRoleComponent} from "./role/delete/delete.component";
import {WatchRoleComponent} from "./role/watch/watch.component";
import {DeleteCollectionRoleComponent} from "./role/deleteCollection/deleteCollection.component";


export const routes: Routes = [
    {
        path: "",
        redirectTo: "role/deleteCollection",
        pathMatch: "full"
    },
    { path: "role/list", component: ListRoleComponent},
    { path: "role/watch", component: WatchRoleComponent},
    { path: "role/delete", component: DeleteRoleComponent},
    { path: "role/deleteCollection", component: DeleteCollectionRoleComponent}
];