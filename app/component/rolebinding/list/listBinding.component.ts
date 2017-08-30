import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListOptions, ListDto, TypeMeta, ResponseRole, ResponseRoleBinding} from "../../../logic-service/roles";
import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "listBinding.component.html",
})

export class ListBindingComponent implements OnInit {
    roleDto: ListDto;
    errorMessage: string;
    productForm: FormGroup;
    responseRole: ResponseRole;
    responseRoleBinding: ResponseRoleBinding;
    type: boolean = false;


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
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        this.roleDto.namespace = productForm.value.namespace;
        let listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta(this.roleDto.kind, this.roleDto.apiVersion));

        this.service.listRole(this.roleDto.namespace, listOptions)
            .subscribe(
                data => {
                    console.log(data);
                     this.responseRoleBinding = data;
                    console.log(this.responseRoleBinding);
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
            kind: ["", Validators.required],
            namespace: ["", Validators.required],
            apiVersion: ["",]
        });
    }


}