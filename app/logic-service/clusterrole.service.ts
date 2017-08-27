import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import {DeleteOptions, GetOptions, ListOptions, Role} from "./roles";


@Injectable()
export class ClusterRoleService {
    // адрес сервиса
    private url = "http://localhost:8081";

    constructor(private http: Http) { }

    public createRole(role: Role) {
        return this.http.post(this.url +"/clusterrole/create", role)
            .catch(ClusterRoleService.handleError);
    }

    public updateRole(role: Role) {
        return this.http.post(this.url +"/clusterrole/update", role)
            .catch(ClusterRoleService.handleError);
    }

    public watchRole(listOptions: ListOptions) {
        return this.http.post(this.url +"/clusterrole/watch", listOptions)
            .catch(ClusterRoleService.handleError);
    }
    public listRole(listOptions: ListOptions) {
        return this.http.post(this.url +"/clusterrole/list", listOptions)
            .catch(ClusterRoleService.handleError);
    }

    public deleteRole(namespace:string, deleteOptions: DeleteOptions) {
        return this.http.post(this.url+"/clusterrole/delete/"+namespace, deleteOptions)
            .catch(ClusterRoleService.handleError);
    }

    public deleteCollectionRole( deleteOptions: DeleteOptions,listOptions: ListOptions) {
        return this.http.post(this.url +"/clusterrole/deleteCollection", deleteOptions,listOptions)
            .catch(ClusterRoleService.handleError);
    }

    // public patchRole(namespace:string, patchType: string,data :string,subresources:string) {
    //     return this.http.post(this.url +"/role/patch"+"/"+ namespace, patchType,data,subresources)
    //         .catch(RoleService.handleError);
    // }

    public getRole(namespace:string, getOptions: GetOptions) {
        return this.http.post(this.url +"/clusterrole/get/"+namespace, getOptions)
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