import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import {DeleteOptions, GetOptions, ListOptions, PatchType, Role} from "./roles";


@Injectable()
export class RoleService {
    // адрес сервиса
    private url = "http://localhost:8081";

    constructor(private http: Http) { }

    public createRole(role: Role) {
        return this.http.post(this.url +"/role/create", role)
            .catch(RoleService.handleError);
    }

    public updateRole(role: Role) {
        return this.http.post(this.url +"/role/update", role)
            .catch(RoleService.handleError);
    }

    public watchRole(id: string, listOptions: ListOptions) {
        return this.http.post(this.url +"/role/watch"+ "/"+ id, listOptions)
            .catch(RoleService.handleError);
    }
    public listRole(id: string, listOptions: ListOptions) {
        return this.http.post(this.url +"/role/list"+ "/"+ id, listOptions)
            .catch(RoleService.handleError);
    }

    public deleteRole(id: string,namespace:string, deleteOptions: DeleteOptions) {
        return this.http.post(this.url + "/role/delete/"+ id+"/"+namespace, deleteOptions)
            .catch(RoleService.handleError);
    }

    public deleteCollectionRole(id: string, deleteOptions: DeleteOptions,listOptions: ListOptions) {
        return this.http.post(this.url +"/role/deleteCollection/"+ id, deleteOptions,listOptions)
            .catch(RoleService.handleError);
    }

    public patchRole(id: string,namespace:string, patchType: string,data :string,subresources:string) {
      let  patchTypes = new PatchType(patchType,data,subresources);
        return this.http.post(this.url +"/role/patch"+ "/"+ id+"/"+namespace, patchTypes)
            .catch(RoleService.handleError);
    }

    public getRole(id: string,namespace:string, getOptions: GetOptions) {
        return this.http.post(this.url +"/role/get"+ "/"+ id+"/"+namespace, getOptions)
            .catch(RoleService.handleError);
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