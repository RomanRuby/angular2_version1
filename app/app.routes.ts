import { Routes } from "@angular/router";
import {ListRoleComponent} from "./role/list/list.component";
import {DeleteRoleComponent} from "./role/delete/delete.component";
import {WatchRoleComponent} from "./role/watch/watch.component";
import {DeleteCollectionRoleComponent} from "./role/deleteCollection/deleteCollection.component";
import {GetRoleComponent} from "./role/get/get.component";
import {CreateRoleComponent} from "./role/create/create.component";
import {UpdateRoleComponent} from "./role/update/update.component";
import {PatchRoleComponent} from "./role/patch/patch.component";


export const routes: Routes = [
    {
        path: "",
        redirectTo: "role/patch",
        pathMatch: "full"
    },
    { path: "role/list", component: ListRoleComponent},
    { path: "role/patch", component: PatchRoleComponent},
    { path: "role/create", component: CreateRoleComponent},
    { path: "role/update", component: UpdateRoleComponent},
    { path: "role/get", component: GetRoleComponent},
    { path: "role/watch", component: WatchRoleComponent},
    { path: "role/delete", component: DeleteRoleComponent},
    { path: "role/deleteCollection", component: DeleteCollectionRoleComponent}
];