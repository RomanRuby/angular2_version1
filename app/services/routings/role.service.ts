import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";

import {AppService} from "../app.service";
import {Role, RoleResponses, RoleWithAllOptionsView} from "../../models/role";
import {DeleteCol, DeleteOptions, GetOptions, ListOptions} from "../../models/common";


@Injectable()
export class RoleService {

    private url = location.protocol + '//' + location.host;

    constructor(private http: AppService) {
    }

    public createRole(role: Role): Observable<RoleWithAllOptionsView> {
        return this.http.post(this.url + "/role/create", role);
    }

    public updateRole(role: Role): Observable<RoleWithAllOptionsView> {
        return this.http.post(this.url + "/role/update", role);
    }

    public listRole(id: string, listOptions: ListOptions): Observable<RoleResponses> {
        return this.http.post(this.url + "/role/list/" + id, listOptions);
    }

    public deleteRole(id: string, namespace: string, deleteOptions?: DeleteOptions): Observable<string> {
        return this.http.post(this.url + "/role/delete/" + id + "/" + namespace, deleteOptions);
    }

    public deleteCollectionRole(id: string, deleteOptions?: DeleteOptions, listOptions?: ListOptions): Observable<string> {
        return this.http.post(this.url + "/role/deleteCollection/" + id, new DeleteCol(deleteOptions, listOptions));
    }

    public getRole(id: string, namespace: string, getOptions?: GetOptions): Observable<RoleWithAllOptionsView> {
        return this.http.post(this.url + "/role/get" + "/" + id + "/" + namespace, getOptions);
    }
}