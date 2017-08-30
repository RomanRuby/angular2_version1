import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListOptions, ListDto, TypeMeta, PatchTypeDto, PatchType} from "../../../logic-service/roles";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";

@Component({
    moduleId: module.id,
    selector: "patch",
    templateUrl: "patchRoleBinding.component.html",
})

export class PatchRoleBindingComponent implements OnInit {
    patchOptions: PatchTypeDto;
    errorMessage: string;
    productForm: FormGroup;

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
        this.patchOptions.patchType = productForm.value.patchType;
        this.patchOptions.name = productForm.value.name;
        this.patchOptions.data = productForm.value.data;
        this.patchOptions.subresources = productForm.value.subresources;
        this.patchOptions.namespace = productForm.value.namespace;



        this.service.patchRole( this.patchOptions.name,this.patchOptions.namespace,
        this.patchOptions.patchType,this.patchOptions.data, this.patchOptions.subresources)
            .subscribe(
                () => console.log("asdf"),
                error => this.errorMessage = error
            );
    }

    public reset() {
        this.productForm.reset();
    }

    private initForm() {
            this.patchOptions = new PatchTypeDto();
            this.productForm.patchValue(this.patchOptions);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            patchType: ["", Validators.required],
            name: ["", Validators.required],
            data: ["", Validators.required],
            subresources: ["", Validators.required],
            namespace: ["", Validators.required],
        });
    }
}