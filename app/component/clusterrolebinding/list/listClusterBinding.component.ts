import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder} from "@angular/forms";
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

                    if (typeof this.responseRole != "string") {
                        this.isInformationTable = true;
                    }
                    this.isInformationOutput = true;
                },
                error => this.errorMessage = error
            );
    }

    public deleteList() {
        this.service.deleteCollectionRole(null, null)
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
        this.service.deleteRole(name, null);
        this.responseRole.items = this.responseRole.items.filter(items => items.metadata.name != name);
    }

    private buildForm() {
        this.productForm = this.fb.group({});
    }


}