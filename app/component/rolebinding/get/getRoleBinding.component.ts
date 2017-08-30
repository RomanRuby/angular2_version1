import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {DeleteOptions, DeleteOptionsDto, GetOptions, GetOptionsDto, TypeMeta} from "../../../logic-service/roles";
import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";

@Component({
    moduleId: module.id,
    selector: "get",
    templateUrl: "getRoleBinding.component.html",
})

export class GetRoleBindingComponent implements OnInit {
    getOptions: GetOptionsDto;
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
        this.getOptions.nameUrl = productForm.value.nameUrl;
        this.getOptions.apiVersion = productForm.value.apiVersion;
        this.getOptions.kind = productForm.value.kind;
        this.getOptions.resourceVersion = productForm.value.resourceVersion;
        this.getOptions.includeUninitialized = productForm.value.includeUninitialized;
        this.getOptions.name = productForm.value.name;

        let getOption = new GetOptions(
            new TypeMeta(this.getOptions.kind, this.getOptions.apiVersion),
            this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.name,this.getOptions.nameUrl,getOption)
            .subscribe(
                () => console.log("asdf"),
                error => this.errorMessage = error
            );
    }

    public reset() {
        this.productForm.reset();
    }

    private initForm() {
            this.getOptions = new GetOptionsDto();
            this.productForm.patchValue(this.getOptions);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            nameUrl: ["", Validators.required],
            name: ["", Validators.required],
            kind: ["", Validators.required],
            apiVersion: ["",],
            resourceVersion: ["", ],
            includeUninitialized: ["", ]
        });
    }
}