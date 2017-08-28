import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {MainRoleComponent} from "../../component/role/main/mainRole.component";

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent,MainRoleComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}