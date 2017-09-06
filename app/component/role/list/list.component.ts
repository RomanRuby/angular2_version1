import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators} from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListDto, ListOptions, TypeMeta} from "../../../logic-service/models/common";
import {RoleResponses} from "../../../logic-service/models/role";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "list.component.html",
})

export class ListRoleComponent implements OnInit {
    roleDto: ListDto;
    productForm: FormGroup;
    responseRole: RoleResponses;
    errorMessage: string;
    response: string;
    deleteRole: string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;


    constructor(private service: RoleService,
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
        this.roleDto.namespace = productForm.value.namespace;

       let listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("Role", this.roleDto.apiVersion));

        this.service.listRole(this.roleDto.namespace, listOptions)
            .subscribe(
                data => {
                    this.responseRole = data;

                    if (typeof this.responseRole == "string") {
                    } else {
                        this.isInformationTable = true;
                    }
                    this.isInformationOutput = true;
                },
                error => this.errorMessage = error
            );
    }
    public deleteList(namespace:string) {
        console.log(namespace);
        this.service.deleteCollectionRole(namespace)
            .subscribe(
                data => {
                    this.response = data;
                    this.isInformationTable = false;
                },
                error => this.errorMessage = error
            );
    }
    public delete(name: string) {
        this.service.deleteRole(name,this.roleDto.namespace);
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