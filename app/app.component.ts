import {Component, OnInit} from "@angular/core";
import "./rx-js.operators";
declare var $: any;
@Component({
    moduleId: module.id,
    selector: "my-app",

    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
})
export class AppComponent implements OnInit {
    ngOnInit() {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
}