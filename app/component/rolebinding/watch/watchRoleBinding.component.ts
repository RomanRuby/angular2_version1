import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListOptions, ListDto, TypeMeta} from "../../../logic-service/roles";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";

@Component({
    moduleId: module.id,
    selector: "watch",
    templateUrl: "watchRoleBinding.component.html",
})

export class WatchRoleBindingComponent implements OnInit {
    roleDto: ListDto ;
    errorMessage: string;
    productForm: FormGroup;

    constructor(private service: RoleBindingService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router) { }

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
        this.roleDto.namespace = productForm.value.namespace;
        this.roleDto.apiVersion = productForm.value.apiVersion;

        let listOptions;
        listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta(this.roleDto.kind,this.roleDto.apiVersion));

        this.service.watchRole(this.roleDto.namespace,listOptions)
                .subscribe(
                () => console.log("asdf"),
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
            apiVersion: ["", Validators.required]
        });
    }
}