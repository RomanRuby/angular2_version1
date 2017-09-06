import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";
import {ListDto, ListOptions, TypeMeta} from "../../../logic-service/models/common";
import {ResponsesRoleBindingList} from "../../../logic-service/models/rolebinding";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "listBinding.component.html",
})

export class ListBindingComponent implements OnInit {
    roleDto: ListDto;
    errorMessage: string;
    productForm: FormGroup;
    responseRole: ResponsesRoleBindingList;
    response: string;
    namespace: string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = false;


    constructor(private service: RoleBindingService,
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

    public onSubmit(productForm: FormGroup) {
        this.namespace = productForm.value.namespace;

        let listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("RoleBinding", null));

        this.service.listRole(this.namespace, listOptions)
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
        this.service.deleteCollectionRole(this.namespace, null, null)
            .subscribe(
                data => {
                    this.response = data;
                    this.isInformationTable = false;
                },
                error => this.errorMessage = error
            );
    }

    public delete(name: string) {
        this.service.deleteRole(name, this.namespace, null);
        this.responseRole.items = this.responseRole.items.filter(items => items.metadata.name != name);
    }

    private initForm() {
        this.roleDto = new ListDto();
        this.productForm.patchValue(this.roleDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            namespace: ["", Validators.required],
        });
    }

}