import { Component, OnInit } from '@angular/core';
import {ROUTCluster, ROUTDashboard, ROUTES, ROUTSingle} from './sidebar-routes.config';

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ["sidebar.component.css"]
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public menuClusters: any[];
    public menuSingles: any[];
    public menuDashboards: any[];
    ngOnInit() {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.menuClusters = ROUTCluster.filter(menuCluster => menuCluster);
        this.menuSingles = ROUTSingle.filter(menuSingle => menuSingle);
        this.menuDashboards = ROUTDashboard.filter(menuDashboard => menuDashboard);
    }
}
