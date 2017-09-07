import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";

import {AppService} from "../app.service";
import {Role, RoleResponses, RoleWithAllOptionsView} from "../../models/role";
import {DeleteCol, DeleteOptions, GetOptions, ListOptions} from "../../models/common";


@Injectable()
export class ClusterRoleService {

    private url = location.protocol + '//' + location.host;

    constructor(private http: AppService) {
    }

    public createRole(role: Role): Observable<RoleWithAllOptionsView> {
        return this.http.post(this.url + "/clusterrole/create", role);
    }

    public updateRole(role: Role): Observable<RoleWithAllOptionsView> {
        return this.http.post(this.url + "/clusterrole/update", role);
    }

    public listRole(listOptions: ListOptions): Observable<RoleResponses> {
        return this.http.post(this.url + "/clusterrole/list", listOptions);
    }

    public deleteRole(namespace: string, deleteOptions?: DeleteOptions): Observable<string> {
        return this.http.post(this.url + "/clusterrole/delete/" + namespace, deleteOptions);
    }

    public deleteCollectionRole(deleteOptions?: DeleteOptions, listOptions?: ListOptions): Observable<string> {
        return this.http.post(this.url + "/clusterrole/deleteCollection", new DeleteCol(deleteOptions, listOptions));
    }

    public getRole(namespace: string, getOptions?: GetOptions): Observable<RoleWithAllOptionsView> {
        return this.http.post(this.url + "/clusterrole/get/" + namespace, getOptions);
    }
}