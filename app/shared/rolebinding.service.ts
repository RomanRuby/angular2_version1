import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import {DeleteOptions, GetOptions, ListOptions, RoleBinding,} from "./roles";


@Injectable()
export class RoleBindingService {
    // адрес сервиса
    private url = "http://localhost:8081";

    constructor(private http: Http) { }

    public createRole(role: RoleBinding) {
        return this.http.post(this.url +"/rolebinding/create", role)
            .catch(RoleBindingService.handleError);
    }

    public updateRole(role: RoleBinding) {
        return this.http.post(this.url +"/rolebinding/update", role)
            .catch(RoleBindingService.handleError);
    }

    public watchRole(id: string, listOptions: ListOptions) {
        return this.http.post(this.url +"/rolebinding/watch/"+ id, listOptions)
            .catch(RoleBindingService.handleError);
    }
    public listRole(id: string, listOptions: ListOptions) {
        return this.http.post(this.url +"/rolebinding/list/"+ id, listOptions)
            .catch(RoleBindingService.handleError);
    }

    public deleteRole(id: string,namespace:string, deleteOptions: DeleteOptions) {
        return this.http.post(this.url + "/rolebinding/delete/"+ id+"/"+namespace, deleteOptions)
            .catch(RoleBindingService.handleError);
    }

    public deleteCollectionRole(id: string, deleteOptions: DeleteOptions,listOptions: ListOptions) {
        return this.http.post(this.url +"/rolebinding/deleteCollection/"+ id, deleteOptions,listOptions)
            .catch(RoleBindingService.handleError);
    }

    // public patchRole(id: string,namespace:string, patchType: string,data :string,subresources:string) {
    //     return this.http.post(this.url +"/role/patch"+ "/"+ id+"/"+namespace, patchType,data,subresources)
    //         .catch(RoleBinding.handleError);
    // }

    public getRole(id: string,namespace:string, getOptions: GetOptions) {
        return this.http.post(this.url +"/rolebinding/get/"+ id+"/"+namespace, getOptions)
            .catch(RoleBindingService.handleError);
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