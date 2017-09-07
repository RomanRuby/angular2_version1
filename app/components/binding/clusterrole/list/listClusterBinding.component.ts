import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder} from "@angular/forms";
import {ListDto, ListOptions, TypeMeta} from "../../../../models/common";
import {ResponsesRoleBindingList} from "../../../../models/rolebinding";
import {ClusterRoleBindingService} from "../../../../services/routings/clusterrolebinding.service";

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
    isInformationError: boolean = true;


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
        listOptions.setTypeMeta(new TypeMeta("ClusterRoleBinding"));

        this.service.listRole(listOptions)
            .subscribe(
                data => {
                    this.responseRole = data;
                    this.isInformationTable = true;
                    this.isInformationOutput = true;
                }
            );
    }

    public deleteList() {
        this.service.deleteCollectionRole()
            .subscribe(
                data => {
                    this.response = data;
                    this.isInformationTable = false;
                },
                error => this.errorMessage = error
            );
    }

    private initForm() {
        this.roleDto = new ListDto();
        this.productForm.patchValue(this.roleDto);
    }

    public delete(name: string) {
        this.service.deleteRole(name) .subscribe(
            data => {
            }
        );
        this.responseRole.items = this.responseRole.items.filter(items => items.metadata.name != name);
    }

    private buildForm() {
        this.productForm = this.fb.group({});
    }

}