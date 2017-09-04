import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";

import {AppService} from "./app.service";
import {Role, RoleResponses, RoleWithAllOptionsView} from "./models/role";
import {DeleteCol, DeleteOptions, GetOptions, ListOptions} from "./models/common";


@Injectable()
export class ClusterRoleService {

    private url = location.protocol + '//' + location.host;

    constructor(private http: AppService) {
    }

    public createRole(role: Role): Observable<RoleWithAllOptionsView> {
        return this.http.post(this.url + "/clusterrole/create", role)
            .catch(ClusterRoleService.handleError);
    }

    public updateRole(role: Role): Observable<RoleWithAllOptionsView> {
        return this.http.post(this.url + "/clusterrole/update", role)
            .catch(ClusterRoleService.handleError);
    }

    public listRole(listOptions: ListOptions): Observable<RoleResponses> {
        return this.http.post(this.url + "/clusterrole/list", listOptions)
            .catch(ClusterRoleService.handleError);
    }

    public deleteRole(namespace: string, deleteOptions?: DeleteOptions): Observable<string> {
        return this.http.post(this.url + "/clusterrole/delete/" + namespace, deleteOptions)
            .catch(ClusterRoleService.handleError);
    }

    public deleteCollectionRole(deleteOptions: DeleteOptions, listOptions: ListOptions): Observable<string> {
        return this.http.post(this.url + "/clusterrole/deleteCollection", new DeleteCol(deleteOptions, listOptions))
            .catch(ClusterRoleService.handleError);
    }

    public getRole(namespace: string, getOptions: GetOptions): Observable<RoleWithAllOptionsView> {
        return this.http.post(this.url + "/clusterrole/get/" + namespace, getOptions)
            .catch(ClusterRoleService.handleError);
    }

    private static handleError(error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return Observable.throw(message);
    }
}