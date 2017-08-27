import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import {RoleService} from "./logic-service/role.service";
import {SidebarModule} from "./view-menu/sidebar/sidebar.module";
import {NavbarModule} from "./view-menu/navbar/navbar.module";
import {FooterModule} from "./view-menu/footer/footer.module";
import {ClusterRoleBindingService} from "./logic-service/clusterrolebinding.service";
import {ClusterRoleService} from "./logic-service/clusterrole.service";
import {RoleBindingService} from "./logic-service/rolebinding.service";
import {AppService} from "./logic-service/app.service";




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
      ],
    bootstrap: [AppComponent],
    providers: [RoleService,ClusterRoleBindingService,ClusterRoleService,RoleBindingService,AppService]
})
export class AppModule { }
