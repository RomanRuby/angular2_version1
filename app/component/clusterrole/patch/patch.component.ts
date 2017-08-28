import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListOptions, ListDto, TypeMeta, PatchTypeDto, PatchType} from "../../../logic-service/roles";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "patch",
    templateUrl: "patch.component.html",
})

export class PatchRoleComponent implements OnInit {
    patchOptions: PatchTypeDto;
    errorMessage: string;
    productForm: FormGroup;

    constructor(private service: ClusterRoleService,
                private activatedRoute: ActivatedRoute,
                private fb: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.buildForm();
        this.getProductFromRoute();
    }

    public checkError(element: string, errorType: string) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched
    }

    public onSubmit(productForm: FormGroup) {
        this.patchOptions.patchType = productForm.value.patchType;
        this.patchOptions.data = productForm.value.data;
        this.patchOptions.subresources = productForm.value.subresources;
        this.patchOptions.namespace = productForm.value.namespace;



        this.service.patchRole( this.patchOptions.namespace,
        this.patchOptions.patchType,this.patchOptions.data, this.patchOptions.subresources)
            .subscribe(
                () => console.log("asdf"),
                error => this.errorMessage = error
            );
    }

    public goBack() {
        this.router.navigate(["/products/create"]);
    }

    private getProductFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];

            this.patchOptions = new PatchTypeDto();
            this.productForm.patchValue(this.patchOptions);
        });
    }

    private buildForm() {
        this.productForm = this.fb.group({
            patchType: ["", Validators.required],
            data: ["", Validators.required],
            subresources: ["", Validators.required],
            namespace: ["", Validators.required],
        });
    }
}