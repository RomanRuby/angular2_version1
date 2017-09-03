import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {routeRoleComponent, routes} from "./app.routes";


import {SidebarModule} from "./view-menu/sidebar/sidebar.module";
import {NavbarModule} from "./view-menu/navbar/navbar.module";
import {FooterModule} from "./view-menu/footer/footer.module";

import {RoleService} from "./logic-service/role.service";
import {ClusterRoleBindingService} from "./logic-service/clusterrolebinding.service";
import {ClusterRoleService} from "./logic-service/clusterrole.service";
import {RoleBindingService} from "./logic-service/rolebinding.service";
import {AppService} from "./logic-service/app.service";
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
        routeRoleComponent
    ],
    bootstrap: [AppComponent],
    providers: [RoleService, ClusterRoleBindingService, ClusterRoleService, RoleBindingService, AppService],
})
export class AppModule {
}
