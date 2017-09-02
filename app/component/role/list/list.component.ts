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
    errorMessage: string;
    productForm: FormGroup;
    responseRole: RoleResponses;
    response: string;
    deleterole: string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = false;


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
        this.service.deleteCollectionRole(namespace,null, null)
            .subscribe(
                data => {
                    this.response = data;
                    this.isInformationTable = false;
                    this.isInformationError = true;
                },
                error => this.errorMessage = error
            );
    }
    public delete(name:string) {
        this.service.deleteRole(name,this.roleDto.namespace, null).subscribe(
            data => {
            },
            error => this.errorMessage = error
        );
        this.service.deleteRole(name,this.roleDto.namespace, null).subscribe(
            data => {
            },
            error => this.errorMessage = error
        );
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