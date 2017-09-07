///<reference path="../components/roles/single-value/main/mainRole.component.ts"/>
import {Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {ListRoleComponent} from "../components/roles/single-value/list/list.component";
import {CreateRoleComponent} from "../components/roles/single-value/create/create.component";
import {UpdateRoleComponent} from "../components/roles/single-value/update/update.component";
import {ListClusterRoleComponent} from "../components/roles/cluster/list/listCluster.component";
import {CreateClusterRoleComponent} from "../components/roles/cluster/create/createCluster.component";
import {UpdateClusterRoleComponent} from "../components/roles/cluster/update/updateCluster.component";
import {MainRoleComponent} from "../components/roles/single-value/main/mainRole.component";
import {MainClusterRoleBindingComponent} from "../components/binding/clusterrole/main/mainClusterRoleBinding.component";
import {MainClusterRoleComponent} from "../components/roles/cluster/main/mainClusterRole.component";
import {MainRoleBindingComponent} from "../components/binding/role/main/mainRoleBinding.component";
import {CreateClusterBindingComponent} from "../components/binding/clusterrole/create/createClusterBinding.component";
import {ListClusterBindingComponent} from "../components/binding/clusterrole/list/listClusterBinding.component";
import {UpdateClusterBindingComponent} from "../components/binding/clusterrole/update/updateClusterBinding.component";
import {CreateBindingComponent} from "../components/binding/role/create/createBinding.component";
import {ListBindingComponent} from "../components/binding/role/list/listBinding.component";
import {UpdateBindingComponent} from "../components/binding/role/update/updateBinding.component";


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

