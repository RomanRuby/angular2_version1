import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {AppService} from "../app.service";
import {ResponseRoleBinding, ResponsesRoleBindingList, RoleBinding} from "../../models/rolebinding";
import {DeleteOptions, GetOptions, ListOptions} from "../../models/common";


@Injectable()
export class RoleBindingService {

    private url = location.protocol + '//' + location.host;

    constructor(private http: AppService) {
    }

    public createRole(role: RoleBinding): Observable<ResponseRoleBinding> {
        return this.http.post(this.url + "/rolebinding/create", role);
    }

    public updateRole(role: RoleBinding): Observable<ResponseRoleBinding> {
        return this.http.post(this.url + "/rolebinding/update", role);
    }

    public listRole(id: string, listOptions: ListOptions): Observable<ResponsesRoleBindingList> {
        return this.http.post(this.url + "/rolebinding/list/" + id, listOptions);
    }

    public deleteRole(id: string, namespace: string, deleteOptions?: DeleteOptions): Observable<string> {
        return this.http.post(this.url + "/rolebinding/delete/" + id + "/" + namespace, deleteOptions);
    }

    public deleteCollectionRole(id: string, deleteOptions?: DeleteOptions, listOptions?: ListOptions): Observable<string> {
        return this.http.post(this.url + "/rolebinding/deleteCollection/" + id, deleteOptions, listOptions);
    }

    public getRole(id: string, namespace: string, getOptions: GetOptions): Observable<ResponseRoleBinding> {
        return this.http.post(this.url + "/rolebinding/get/" + id + "/" + namespace, getOptions);
    }

}