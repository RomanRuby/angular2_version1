import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {MainRoleComponent} from "../../component/role/main/mainRole.component";
import {ClusterRoleService} from "../../logic-service/clusterrole.service";
import {MainClusterRoleComponent} from "../../component/clusterrole/main/mainClusterRole.component";

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent,MainRoleComponent,MainClusterRoleComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
