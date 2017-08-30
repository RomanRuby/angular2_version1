import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {MainRoleComponent} from "../../component/role/main/mainRole.component";
import {MainClusterRoleComponent} from "../../component/clusterrole/main/mainClusterRole.component";
import {MainClusterRoleBindingComponent} from "../../component/clusterrolebinding/main/mainClusterRoleBinding.component";
import {MainRoleBindingComponent} from "../../component/rolebinding/main/mainRoleBinding.component";

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent,MainRoleComponent,MainClusterRoleComponent,MainClusterRoleBindingComponent ,MainRoleBindingComponent],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
