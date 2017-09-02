import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";

import {AppService} from "./app.service";
import {ResponseRoleBinding, ResponsesRoleBindingList, RoleBinding} from "./models/rolebinding";
import {DeleteOptions, GetOptions, ListOptions} from "./models/common";


@Injectable()
export class ClusterRoleBindingService {

    private url = location.protocol + '//' + location.host;

    constructor(private http: AppService) { }

    public createRole(role: RoleBinding) :Observable<ResponseRoleBinding>{
        return this.http.post(this.url +"/clusterrolebinding/create", role)
            .catch(ClusterRoleBindingService.handleError);
    }

    public updateRole(role: RoleBinding) :Observable<RoleBinding>{
        return this.http.post(this.url +"/clusterrolebinding/update", role)
            .catch(ClusterRoleBindingService.handleError);
    }

    public listRole(listOptions: ListOptions) :Observable<ResponsesRoleBindingList>{
        return this.http.post(this.url +"/clusterrolebinding/list", listOptions)
            .catch(ClusterRoleBindingService.handleError);
    }

    public deleteRole(id: string, deleteOptions: DeleteOptions) :Observable<string>{
        return this.http.post(this.url + "/clusterrolebinding/delete/"+ id, deleteOptions)
            .catch(ClusterRoleBindingService.handleError);
    }

    public deleteCollectionRole( deleteOptions: DeleteOptions,listOptions: ListOptions):Observable<string> {
        return this.http.post(this.url +"/clusterrolebinding/deleteCollection", deleteOptions,listOptions)
            .catch(ClusterRoleBindingService.handleError);
    }

    public getRole(name:string, getOptions: GetOptions) :Observable<RoleBinding>{
        return this.http.post(this.url +"/clusterrolebinding/get/"+name, getOptions)
            .catch(ClusterRoleBindingService.handleError);
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