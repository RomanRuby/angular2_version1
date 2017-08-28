import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";


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
import {DeleteCollectionRoleComponent} from "./component/role/deleteCollection/deleteCollection.component";
import {GetRoleComponent} from "./component/role/get/get.component";
import {CreateRoleComponent} from "./component/role/create/create.component";
import {PatchRoleComponent} from "./component/role/patch/patch.component";
import {UpdateRoleComponent} from "./component/role/update/update.component";
import {HomeComponent} from "./component/home/home.component";
import {MainRoleComponent} from "./component/role/main/mainRole.component";




@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ListRoleComponent,DeleteRoleComponent,WatchRoleComponent,DeleteCollectionRoleComponent,GetRoleComponent
        ,CreateRoleComponent,PatchRoleComponent,UpdateRoleComponent,PatchRoleComponent,HomeComponent],
    bootstrap: [AppComponent],
    providers: [RoleService,ClusterRoleBindingService,ClusterRoleService,RoleBindingService,AppService]
})
export class AppModule { }
