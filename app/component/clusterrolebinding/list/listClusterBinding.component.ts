import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";
import {ListDto, ListOptions, TypeMeta} from "../../../logic-service/models/common";
import {ResponsesRoleBindingList} from "../../../logic-service/models/rolebinding";

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
    type: boolean = false;
    responseValue: boolean =true;

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
        this.roleDto.apiVersion = productForm.value.apiVersion;
        this.roleDto.namespace = productForm.value.namespace;
        let listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("ClusterRoleBinding", this.roleDto.apiVersion));

        this.service.listRole(this.roleDto.namespace, listOptions)
            .subscribe(
                data => {
                    this.responseRole = data;
                    this.responseValue =true;
                    console.log(this.responseRole);
                    if (typeof this.responseRole =="string"){
                        this.responseValue =false;
                    }

                    this.type = true;
                },
                error => this.errorMessage = error
            );
    }

    public reset() {
        this.productForm.reset();
    }

    private initForm() {
        this.roleDto = new ListDto();
        this.productForm.patchValue(this.roleDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            namespace: ["", Validators.required],
            apiVersion: ["",]
        });
    }


}