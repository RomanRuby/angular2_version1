import { Routes } from "@angular/router";
import {ListRoleComponent} from "./component/role/list/list.component";
import {DeleteRoleComponent} from "./component/role/delete/delete.component";
import {WatchRoleComponent} from "./component/role/watch/watch.component";
import {DeleteCollectionRoleComponent} from "./component/role/deleteCollection/deleteCollection.component";
import {GetRoleComponent} from "./component/role/get/get.component";
import {CreateRoleComponent} from "./component/role/create/create.component";
import {UpdateRoleComponent} from "./component/role/update/update.component";
import {PatchRoleComponent} from "./component/role/patch/patch.component";
import {HomeComponent} from "./component/home/home.component";


export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },

    { path: 'dashboard', component: HomeComponent },
    { path: "role/list", component: ListRoleComponent},
    { path: "role/patch", component: PatchRoleComponent},
    { path: "role/create", component: CreateRoleComponent},
    { path: "role/update", component: UpdateRoleComponent},
    { path: "role/get", component: GetRoleComponent},
    { path: "role/watch", component: WatchRoleComponent},
    { path: "role/delete", component: DeleteRoleComponent},
    { path: "role/deleteCollection", component: DeleteCollectionRoleComponent}
];