import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";
import {DeleteOptions, ListDto, ListOptions, TypeMeta} from "../../../logic-service/models/common";
import {ResponsesRoleBindingList} from "../../../logic-service/models/rolebinding";
import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "listClusterBinding.component.html",
})

export class ListClusterBindingComponent implements OnInit {
    roleDto: ListDto;
    errorMessage: string;
    productForm: FormGroup;
    responseRole: ResponsesRoleBindingList;
    response: string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = false;

    constructor(private service: ClusterRoleBindingService,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
        this.initForm();
    }

    public checkError(element: string, errorType: string) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched
    }

    public onSubmit() {
        let listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("ClusterRoleBinding", null));

        this.service.listRole(listOptions)
            .subscribe(
                data => {
                    this.responseRole = data;
                    this.isInformationTable =true;
                    console.log(this.responseRole);
                    if (typeof this.responseRole =="string"){
                        this.isInformationTable =false;
                    }

                    this.isInformationOutput = true;
                },
                error => this.errorMessage = error
            );
    }

    public deleteList() {
        let listOption = new ListOptions();
        listOption.setTypeMeta(new TypeMeta("ClusterRoleBinding", null));

        let deleteOption = new DeleteOptions( new TypeMeta("ClusterRoleBinding", null),null,
            null,
            null);

        this.service.deleteCollectionRole(deleteOption,listOption)
            .subscribe(
                data => {  this.response = data;
                    this.isInformationTable = false;
                    this.isInformationError = true;
                },
                error => this.errorMessage = error
            );
    }

    private initForm() {
        this.roleDto = new ListDto();
        this.productForm.patchValue(this.roleDto);
    }

    public delete(name:string) {
        this.service.deleteRole(name, null).subscribe(
            data => {
            },
            error => this.errorMessage = error
        );
        this.service.deleteRole(name, null).subscribe(
            data => {
            },
            error => this.errorMessage = error
        );
        this.onSubmit();
    }

    private buildForm() {
        this.productForm = this.fb.group({
        });
    }


}