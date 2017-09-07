import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {routeRoleComponent, routes} from "./app.routes";
import {SidebarModule} from "../menu/sidebar/sidebar.module";
import {NavbarModule} from "../menu/navbar/navbar.module";
import {FooterModule} from "../menu/footer/footer.module";
import {RoleService} from "../services/routings/role.service";
import {ClusterRoleBindingService} from "../services/routings/clusterrolebinding.service";
import {ClusterRoleService} from "../services/routings/clusterrole.service";
import {RoleBindingService} from "../services/routings/rolebinding.service";
import {AppService} from "../services/app.service";
import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        InputTextModule,DataTableModule,ButtonModule,DialogModule,NgxPaginationModule,
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
