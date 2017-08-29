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
import {WatchRoleComponent} from "./component/role/watch/watch.component";
import {GetRoleComponent} from "./component/role/get/get.component";
import {CreateRoleComponent} from "./component/role/create/create.component";
import {PatchRoleComponent} from "./component/role/patch/patch.component";
import {UpdateRoleComponent} from "./component/role/update/update.component";
import {HomeComponent} from "./component/home/home.component";
import {MainRoleComponent} from "./component/role/main/mainRole.component";
import {ListClusterRoleComponent} from "./component/clusterrole/list/listCluster.component";
import {DeleteClusterRoleComponent} from "./component/clusterrole/delete/deleteCluster.component";
import {WatchClusterRoleComponent} from "./component/clusterrole/watch/watchCluster.component";
import {GetClusterRoleComponent} from "./component/clusterrole/get/getCluster.component";
import {CreateClusterRoleComponent} from "./component/clusterrole/create/createCluster.component";
import {PatchClusterRoleComponent} from "./component/clusterrole/patch/patchCluster.component";
import {UpdateClusterRoleComponent} from "./component/clusterrole/update/updateCluster.component";
import {DeleteCollectionClusterRoleComponent} from "./component/clusterrole/deleteCollection/deleteCollectionCluster.component";
import {DeleteCollectionRoleComponent} from "./component/role/deleteCollection/deleteCollection.component";
import {CreateClusterBindingComponent} from "./component/clusterrolebinding/create/createClusterBinding.component";
import {ListClusterBindingComponent} from "./component/clusterrolebinding/list/listClusterBinding.component";
import {DeleteClusterRoleBindingComponent} from "./component/clusterrolebinding/delete/deleteClusterRoleBinding.component";

import {PatchClusterRoleBindingComponent} from "./component/clusterrolebinding/patch/patchClusterRoleBinding.component";
import {UpdateClusterBindingComponent} from "./component/clusterrolebinding/update/updateClusterBinding.component";
import {WatchClusterRoleBindingComponent} from "./component/clusterrolebinding/watch/watchClusterRoleBinding.component";
import {GetClusterRoleBindingComponent} from "./component/clusterrolebinding/get/getClusterRoleBinding.component";
import {CreateBindingComponent} from "./component/rolebinding/create/createBinding.component";
import {ListBindingComponent} from "./component/rolebinding/list/listBinding.component";
import {DeleteRoleBindingComponent} from "./component/rolebinding/delete/deleteRoleBinding.component";
import {DeleteCollectionRoleBindingComponent} from "./component/rolebinding/deleteCollection/deleteRoleBindingCollection.component";
import {PatchRoleBindingComponent} from "./component/rolebinding/patch/patchRoleBinding.component";
import {UpdateBindingComponent} from "./component/rolebinding/update/updateBinding.component";
import {WatchRoleBindingComponent} from "./component/rolebinding/watch/watchRoleBinding.component";
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
        ListRoleComponent, DeleteRoleComponent, WatchRoleComponent, DeleteCollectionRoleComponent, GetRoleComponent
        , CreateRoleComponent, PatchRoleComponent, UpdateRoleComponent, PatchRoleComponent,
        HomeComponent,
        ListClusterRoleComponent, DeleteClusterRoleComponent, WatchClusterRoleComponent, DeleteCollectionClusterRoleComponent,
        GetClusterRoleComponent, CreateClusterRoleComponent, PatchClusterRoleComponent, UpdateClusterRoleComponent, PatchClusterRoleComponent,

        CreateClusterBindingComponent, ListClusterBindingComponent, DeleteClusterRoleBindingComponent, DeleteCollectionClusterRoleBindingComponent,
        PatchClusterRoleBindingComponent, UpdateClusterBindingComponent, WatchClusterRoleBindingComponent, PatchClusterRoleBindingComponent,
        GetClusterRoleBindingComponent,

        CreateBindingComponent, ListBindingComponent, DeleteRoleBindingComponent, DeleteCollectionRoleBindingComponent,
        PatchRoleBindingComponent, UpdateBindingComponent, WatchRoleBindingComponent, PatchRoleBindingComponent,
        GetRoleBindingComponent
    ],
    bootstrap: [AppComponent],
    providers: [RoleService, ClusterRoleBindingService, ClusterRoleService, RoleBindingService, AppService]
})
export class AppModule {
}
