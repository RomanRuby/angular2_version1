import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {routes} from "./app.routes";


import {SidebarModule} from "./view-menu/sidebar/sidebar.module";
import {NavbarModule} from "./view-menu/navbar/navbar.module";
import {FooterModule} from "./view-menu/footer/footer.module";

import {RoleService} from "./logic-service/role.service";
import {ClusterRoleBindingService} from "./logic-service/clusterrolebinding.service";
import {ClusterRoleService} from "./logic-service/clusterrole.service";
import {RoleBindingService} from "./logic-service/rolebinding.service";
import {AppService} from "./logic-service/app.service";
import {ListRoleComponent} from "./component/role/list/list.component";
import {DeleteRoleComponent} from "./component/role/delete/delete.component";
import {GetRoleComponent} from "./component/role/get/get.component";
import {CreateRoleComponent} from "./component/role/create/create.component";
import {UpdateRoleComponent} from "./component/role/update/update.component";
import {HomeComponent} from "./component/home/home.component";
import {ListClusterRoleComponent} from "./component/clusterrole/list/listCluster.component";
import {DeleteClusterRoleComponent} from "./component/clusterrole/delete/deleteCluster.component";
import {GetClusterRoleComponent} from "./component/clusterrole/get/getCluster.component";
import {CreateClusterRoleComponent} from "./component/clusterrole/create/createCluster.component";

import {UpdateClusterRoleComponent} from "./component/clusterrole/update/updateCluster.component";
import {DeleteCollectionClusterRoleComponent} from "./component/clusterrole/deleteCollection/deleteCollectionCluster.component";
import {DeleteCollectionRoleComponent} from "./component/role/deleteCollection/deleteCollection.component";
import {CreateClusterBindingComponent} from "./component/clusterrolebinding/create/createClusterBinding.component";
import {ListClusterBindingComponent} from "./component/clusterrolebinding/list/listClusterBinding.component";
import {DeleteClusterRoleBindingComponent} from "./component/clusterrolebinding/delete/deleteClusterRoleBinding.component";


import {UpdateClusterBindingComponent} from "./component/clusterrolebinding/update/updateClusterBinding.component";
import {GetClusterRoleBindingComponent} from "./component/clusterrolebinding/get/getClusterRoleBinding.component";
import {CreateBindingComponent} from "./component/rolebinding/create/createBinding.component";
import {ListBindingComponent} from "./component/rolebinding/list/listBinding.component";
import {DeleteRoleBindingComponent} from "./component/rolebinding/delete/deleteRoleBinding.component";
import {DeleteCollectionRoleBindingComponent} from "./component/rolebinding/deleteCollection/deleteRoleBindingCollection.component";

import {UpdateBindingComponent} from "./component/rolebinding/update/updateBinding.component";
import {GetRoleBindingComponent} from "./component/rolebinding/get/getRoleBinding.component";
import {DeleteCollectionClusterRoleBindingComponent} from "./component/clusterrolebinding/deleteCollection/deleteClusterRoleBindingCollection.component";
import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        InputTextModule,DataTableModule,ButtonModule,DialogModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ListRoleComponent, DeleteRoleComponent, DeleteCollectionRoleComponent, GetRoleComponent
        , CreateRoleComponent, UpdateRoleComponent,
        HomeComponent,
        ListClusterRoleComponent, DeleteClusterRoleComponent, DeleteCollectionClusterRoleComponent,
        GetClusterRoleComponent, CreateClusterRoleComponent, UpdateClusterRoleComponent,

        CreateClusterBindingComponent, ListClusterBindingComponent, DeleteClusterRoleBindingComponent, DeleteCollectionClusterRoleBindingComponent, UpdateClusterBindingComponent,
        GetClusterRoleBindingComponent,

        CreateBindingComponent, ListBindingComponent, DeleteRoleBindingComponent, DeleteCollectionRoleBindingComponent, UpdateBindingComponent,
        GetRoleBindingComponent
    ],
    bootstrap: [AppComponent],
    providers: [RoleService, ClusterRoleBindingService, ClusterRoleService, RoleBindingService, AppService]
})
export class AppModule {
}
