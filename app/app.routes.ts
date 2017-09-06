import {Routes} from "@angular/router";
import {ListRoleComponent} from "./component/role/list/list.component";
import {CreateRoleComponent} from "./component/role/create/create.component";
import {UpdateRoleComponent} from "./component/role/update/update.component";
import {HomeComponent} from "./component/home/home.component";
import {MainRoleComponent} from "./component/role/main/mainRole.component";
import {MainClusterRoleComponent} from "./component/clusterrole/main/mainClusterRole.component";
import {ListClusterRoleComponent} from "./component/clusterrole/list/listCluster.component";
import {CreateClusterRoleComponent} from "./component/clusterrole/create/createCluster.component";
import {UpdateClusterRoleComponent} from "./component/clusterrole/update/updateCluster.component";
import {MainClusterRoleBindingComponent} from "./component/clusterrolebinding/main/mainClusterRoleBinding.component";
import {CreateClusterBindingComponent} from "./component/clusterrolebinding/create/createClusterBinding.component";
import {ListClusterBindingComponent} from "./component/clusterrolebinding/list/listClusterBinding.component";

import {UpdateClusterBindingComponent} from "./component/clusterrolebinding/update/updateClusterBinding.component";
import {ListBindingComponent} from "./component/rolebinding/list/listBinding.component";
import {CreateBindingComponent} from "./component/rolebinding/create/createBinding.component";
import {UpdateBindingComponent} from "./component/rolebinding/update/updateBinding.component";
import {MainRoleBindingComponent} from "./component/rolebinding/main/mainRoleBinding.component";


export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },

    {path: "dashboard", component: HomeComponent},
    {path: "role/list", component: ListRoleComponent},
    {path: "role/create", component: CreateRoleComponent},
    {path: "role/update", component: UpdateRoleComponent},

    {path: "clusterrole/list", component: ListClusterRoleComponent},
    {path: "clusterrole/create", component: CreateClusterRoleComponent},
    {path: "clusterrole/update", component: UpdateClusterRoleComponent},

    {path: "role", component: MainRoleComponent},
    {path: "clusterrolebinding", component: MainClusterRoleBindingComponent},
    {path: "clusterrole", component: MainClusterRoleComponent},
    {path: "rolebinding", component: MainRoleBindingComponent},

    {path: "clusterrolebinding/create", component: CreateClusterBindingComponent},
    {path: "clusterrolebinding/list", component: ListClusterBindingComponent},
    {path: "clusterrolebinding/update", component: UpdateClusterBindingComponent},

    {path: "rolebinding/create", component: CreateBindingComponent},
    {path: "rolebinding/list", component: ListBindingComponent},
    {path: "rolebinding/update", component: UpdateBindingComponent}
];

export const routeRoleComponent = [ListRoleComponent, CreateRoleComponent, UpdateRoleComponent, HomeComponent,
    ListClusterRoleComponent,
    CreateClusterRoleComponent, UpdateClusterRoleComponent,
    CreateClusterBindingComponent, ListClusterBindingComponent,
    UpdateClusterBindingComponent,
    CreateBindingComponent, ListBindingComponent,
    UpdateBindingComponent];

