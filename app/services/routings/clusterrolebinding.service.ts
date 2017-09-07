import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";

import {AppService} from "../app.service";
import {ResponseRoleBinding, ResponsesRoleBindingList, RoleBinding} from "../../models/rolebinding";
import {DeleteOptions, GetOptions, ListOptions} from "../../models/common";


@Injectable()
export class ClusterRoleBindingService {

    private url = location.protocol + '//' + location.host;

    constructor(private http: AppService) { }

    public createRole(role: RoleBinding) :Observable<ResponseRoleBinding>{
        return this.http.post(this.url +"/clusterrolebinding/create", role);
    }

    public updateRole(role: RoleBinding) :Observable<ResponseRoleBinding>{
        return this.http.post(this.url +"/clusterrolebinding/update", role);
    }

    public listRole(listOptions: ListOptions) :Observable<ResponsesRoleBindingList>{
        return this.http.post(this.url +"/clusterrolebinding/list", listOptions);
    }

    public deleteRole(id: string, deleteOptions?: DeleteOptions) :Observable<string>{
        return this.http.post(this.url + "/clusterrolebinding/delete/"+ id, deleteOptions);
    }

    public deleteCollectionRole( deleteOptions?: DeleteOptions,listOptions?: ListOptions):Observable<string> {
        return this.http.post(this.url +"/clusterrolebinding/deleteCollection", deleteOptions,listOptions);
    }

    public getRole(name:string, getOptions: GetOptions) :Observable<ResponseRoleBinding>{
        return this.http.post(this.url +"/clusterrolebinding/get/"+name, getOptions);
    }
}