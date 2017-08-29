import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import {
    DeleteOptions, GetOptions, ListOptions, PatchType, ResponseRole, ResponseRoleBinding, Role,
    RoleBinding, RoleResponse
} from "./roles";
import {AppService} from "./app.service";


@Injectable()
export class ClusterRoleBindingService {

    private url = "http://localhost:8081";

    constructor(private http: AppService) { }

    public createRole(role: RoleBinding) :Observable<ResponseRoleBinding>{
        return this.http.post(this.url +"/clusterrolebinding/create", role)
            .catch(ClusterRoleBindingService.handleError);
    }

    public updateRole(role: RoleBinding) :Observable<ResponseRoleBinding>{
        return this.http.post(this.url +"/clusterrolebinding/update", role)
            .catch(ClusterRoleBindingService.handleError);
    }

    public watchRole( listOptions: ListOptions) :Observable<string>{
        return this.http.post(this.url +"/clusterrolebinding/watch", listOptions)
            .catch(ClusterRoleBindingService.handleError);
    }
    public listRole(listOptions: ListOptions) :Observable<ResponseRoleBinding>{
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

    public patchRole(id: string, patchType: string,data :string,subresources:string) :Observable<RoleResponse> {
        let  patchTypes = new PatchType(patchType,data,subresources);
        return this.http.post(this.url +"/clusterrolebinding/patch"+ "/"+ id, patchTypes)
            .catch(ClusterRoleBindingService.handleError);
    }
    public getRole(namespace:string, getOptions: GetOptions) :Observable<RoleResponse>{
        return this.http.post(this.url +"/clusterrolebinding/get/"+namespace, getOptions)
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