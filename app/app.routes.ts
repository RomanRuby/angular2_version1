import { Routes } from "@angular/router";
import {ListRoleComponent} from "./component/role/list/list.component";
import {PatchRoleComponent} from "./component/role/patch/patch.component";
import {CreateRoleComponent} from "./component/role/create/create.component";
import {UpdateRoleComponent} from "./component/role/update/update.component";
import {GetRoleComponent} from "./component/role/get/get.component";
import {WatchRoleComponent} from "./component/role/watch/watch.component";
import {DeleteRoleComponent} from "./component/role/delete/delete.component";
import {DeleteCollectionRoleComponent} from "./component/role/deleteCollection/deleteCollection.component";
import {HomeComponent} from "./component/home/home.component";
import {MainRoleComponent} from "./component/role/main/mainRole.component";
import {MainClusterRoleComponent} from "./component/clusterrole/main/mainClusterRole.component";
import {ListClusterRoleComponent} from "./component/clusterrole/list/listCluster.component";
import {PatchClusterRoleComponent} from "./component/clusterrole/patch/patchCluster.component";
import {CreateClusterRoleComponent} from "./component/clusterrole/create/createCluster.component";
import {UpdateClusterRoleComponent} from "./component/clusterrole/update/updateCluster.component";
import {GetClusterRoleComponent} from "./component/clusterrole/get/getCluster.component";
import {WatchClusterRoleComponent} from "./component/clusterrole/watch/watchCluster.component";
import {DeleteClusterRoleComponent} from "./component/clusterrole/delete/deleteCluster.component";
import {DeleteCollectionClusterRoleComponent} from "./component/clusterrole/deleteCollection/deleteCollectionCluster.component";
import {MainClusterRoleBindingComponent} from "./component/clusterrolebinding/main/mainClusterRoleBinding.component";
import {CreateClusterBindingComponent} from "./component/clusterrolebinding/create/createClusterBinding.component";
import {ListClusterBindingComponent} from "./component/clusterrolebinding/list/listClusterBinding.component";
import {DeleteClusterRoleBindingComponent} from "./component/clusterrolebinding/delete/deleteClusterRoleBinding.component";

import {GetClusterRoleBindingComponent} from "./component/clusterrolebinding/get/getClusterRoleBinding.component";
import {PatchClusterRoleBindingComponent} from "./component/clusterrolebinding/patch/patchClusterRoleBinding.component";
import {UpdateClusterBindingComponent} from "./component/clusterrolebinding/update/updateClusterBinding.component";
import {WatchClusterRoleBindingComponent} from "./component/clusterrolebinding/watch/watchClusterRoleBinding.component";
import {DeleteCollectionClusterRoleBindingComponent} from "./component/clusterrolebinding/deleteCollection/deleteClusterRoleBindingCollection.component";
import {ListBindingComponent} from "./component/rolebinding/list/listBinding.component";
import {CreateBindingComponent} from "./component/rolebinding/create/createBinding.component";
import {DeleteRoleBindingComponent} from "./component/rolebinding/delete/deleteRoleBinding.component";
import {DeleteCollectionRoleBindingComponent} from "./component/rolebinding/deleteCollection/deleteRoleBindingCollection.component";
import {PatchRoleBindingComponent} from "./component/rolebinding/patch/patchRoleBinding.component";
import {UpdateBindingComponent} from "./component/rolebinding/update/updateBinding.component";
import {WatchRoleBindingComponent} from "./component/rolebinding/watch/watchRoleBinding.component";
import {GetRoleBindingComponent} from "./component/rolebinding/get/getRoleBinding.component";


export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },

    { path: "dashboard", component: HomeComponent },
    { path: "role/list", component: ListRoleComponent},
    { path: "role/patch", component: PatchRoleComponent},
    { path: "role/create", component: CreateRoleComponent},
    { path: "role/update", component: UpdateRoleComponent},
    { path: "role/get", component: GetRoleComponent},
    { path: "role/watch", component: WatchRoleComponent},
    { path: "role/delete", component: DeleteRoleComponent},
    { path: "role/deleteCollection", component: DeleteCollectionRoleComponent},

    { path: "clusterrole/list", component: ListClusterRoleComponent},
    { path: "clusterrole/patch", component: PatchClusterRoleComponent},
    { path: "clusterrole/create", component: CreateClusterRoleComponent},
    { path: "clusterrole/update", component: UpdateClusterRoleComponent},
    { path: "clusterrole/get", component: GetClusterRoleComponent},
    { path: "clusterrole/watch", component: WatchClusterRoleComponent},
    { path: "clusterrole/delete", component: DeleteClusterRoleComponent},
    { path: "clusterrole/deleteCollection", component: DeleteCollectionClusterRoleComponent},

    { path: "role", component: MainRoleComponent },
    { path: "clusterrolebinding", component: MainClusterRoleBindingComponent },
    { path: "clusterrole", component: MainClusterRoleComponent },
    { path: "rolebinding", component: MainClusterRoleBindingComponent },

    { path: "clusterrolebinding/create", component: CreateClusterBindingComponent},
    { path: "clusterrolebinding/list", component: ListClusterBindingComponent},
    { path: "clusterrolebinding/delete", component: DeleteClusterRoleBindingComponent},
    { path: "clusterrolebinding/deleteCollection", component: DeleteCollectionClusterRoleBindingComponent},
    { path: "clusterrolebinding/get", component: GetClusterRoleBindingComponent},
    { path: "clusterrolebinding/patch", component: PatchClusterRoleBindingComponent},
    { path: "clusterrolebinding/update", component: UpdateClusterBindingComponent},
    { path: "clusterrolebinding/watch", component: WatchClusterRoleBindingComponent},
    { path: "clusterrolebinding/patch", component: PatchClusterRoleBindingComponent},

    { path: "rolebinding/create", component: CreateBindingComponent},
    { path: "rolebinding/list", component: ListBindingComponent},
    { path: "rolebinding/delete", component: DeleteRoleBindingComponent},
    { path: "rolebinding/deleteCollection", component: DeleteCollectionRoleBindingComponent},
    { path: "rolebinding/get", component: GetRoleBindingComponent},
    { path: "rolebinding/patch", component: PatchRoleBindingComponent},
    { path: "rolebinding/update", component: UpdateBindingComponent},
    { path: "rolebinding/watch", component: WatchRoleBindingComponent},
    { path: "rolebinding/patch", component: PatchRoleBindingComponent}

];