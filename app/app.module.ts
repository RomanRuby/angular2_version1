import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import {RoleService} from "./shared/role.service";
import {ListRoleComponent} from "./role/list/list.component";
import {ClusterRoleBindingService} from "./shared/clusterrolebinding.service";
import {ClusterRoleService} from "./shared/clusterrole.service";
import {RoleBindingService} from "./shared/rolebinding.service";
import {DeleteRoleComponent} from "./role/delete/delete.component";
import {WatchRoleComponent} from "./role/watch/watch.component";
import {DeleteCollectionRoleComponent} from "./role/deleteCollection/deleteCollection.component";
import {GetRoleComponent} from "./role/get/get.component";
import {CreateRoleComponent} from "./role/create/create.component";
import {PatchRoleComponent} from "./role/patch/patch.component";
import {UpdateRoleComponent} from "./role/update/update.component";



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ListRoleComponent,DeleteRoleComponent,WatchRoleComponent,DeleteCollectionRoleComponent,GetRoleComponent
        ,CreateRoleComponent,PatchRoleComponent,UpdateRoleComponent,PatchRoleComponent],
    bootstrap: [AppComponent],
    providers: [RoleService,ClusterRoleBindingService,ClusterRoleService,RoleBindingService]
})
export class AppModule { }
