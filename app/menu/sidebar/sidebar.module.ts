import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {MainRoleComponent} from "../../components/roles/single-value/main/mainRole.component";
import {MainClusterRoleComponent} from "../../components/roles/cluster/main/mainClusterRole.component";
import {MainClusterRoleBindingComponent} from "../../components/binding/clusterrole/main/mainClusterRoleBinding.component";
import {MainRoleBindingComponent} from "../../components/binding/role/main/mainRoleBinding.component";


@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent,MainRoleComponent,MainClusterRoleComponent,MainClusterRoleBindingComponent ,
    MainRoleBindingComponent],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
