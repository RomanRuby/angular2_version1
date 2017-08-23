import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


import {RoleService} from "../../shared/role.service";
import {ListOptions, ListDto, TypeMeta} from "../../shared/roles";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "list.component.html",
})

export class ListRoleComponent implements OnInit {
    roleDto: ListDto ;
    errorMessage: string;
    productForm: FormGroup;

    constructor(private service: RoleService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.buildForm();
        this.getProductFromRoute();
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

        this.service.listRole(this.roleDto.namespace,listOptions)
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

                this.roleDto = new ListDto();
                this.productForm.patchValue(this.roleDto);
        });
    }

    private buildForm() {
        this.productForm = this.fb.group({
            kind: ["", Validators.required],
            namespace: ["", Validators.required],
            apiVersion: ["", Validators.required]
        });
    }
}