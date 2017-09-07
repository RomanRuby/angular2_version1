import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ListDto, ListOptions, TypeMeta} from "../../../../models/common";
import {RoleResponses} from "../../../../models/role";
import {RoleService} from "../../../../services/routings/role.service";


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
                    this.isInformationTable = true;
                    this.isInformationOutput = true;
                }
            );

    }

    public deleteList() {
        this.service.deleteCollectionRole(this.roleDto.namespace)
            .subscribe(
                data => {
                    this.response = data;
                    this.isInformationTable = false;
                },
                error => this.errorMessage = error
            );
    }

    public delete(name: string) {
        this.service.deleteRole(name, this.roleDto.namespace).subscribe(
            data => {
            }
        );
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