import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListOptions, ListDto, TypeMeta, PatchTypeDto, PatchType, RoleResponse} from "../../../logic-service/roles";

@Component({
    moduleId: module.id,
    selector: "patch",
    templateUrl: "patch.component.html",
})

export class PatchRoleComponent implements OnInit {
    patchOptions: PatchTypeDto;
    errorMessage: string;
    productForm: FormGroup;
    responseRole: RoleResponse;
    type: boolean = false;
    responseValue: boolean =true;
    saveUsername: boolean = false;

    constructor(private service: RoleService,
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
        this.patchOptions.name = productForm.value.name;
        this.patchOptions.data = productForm.value.data;
        this.patchOptions.subresources = productForm.value.subresources;
        this.patchOptions.namespace = productForm.value.namespace;



        this.service.patchRole( this.patchOptions.name,this.patchOptions.namespace,
        this.patchOptions.patchType,this.patchOptions.data, this.patchOptions.subresources)
            .subscribe(
                data => {
                    if(data)
                        this.responseRole = data;
                    this.responseValue =true;
                    if (typeof this.responseRole =="string"){
                        this.responseValue =false;
                    }

                    this.type = true;
                },
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
            name: ["", Validators.required],
            data: ["", Validators.required],
            subresources: ["", Validators.required],
            namespace: ["", Validators.required],
        });
    }
}