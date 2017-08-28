import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {RoleService} from "../../../logic-service/role.service";
import {DeleteOptions, DeleteOptionsDto, GetOptions, GetOptionsDto, TypeMeta} from "../../../logic-service/roles";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "get",
    templateUrl: "getCluster.component.html",
})

export class GetClusterRoleComponent implements OnInit {
    getOptions: GetOptionsDto;
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
        this.getOptions.namespace = productForm.value.namespace;
        this.getOptions.apiVersion = productForm.value.apiVersion;
        this.getOptions.kind = productForm.value.kind;
        this.getOptions.resourceVersion = productForm.value.resourceVersion;
        this.getOptions.includeUninitialized = productForm.value.includeUninitialized;


        let getOption = new GetOptions(
            new TypeMeta(this.getOptions.kind, this.getOptions.apiVersion),
            this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.namespace ,getOption)
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

            this.getOptions = new GetOptionsDto();
            this.productForm.patchValue(this.getOptions);
        });
    }

    private buildForm() {
        this.productForm = this.fb.group({
            namespace: ["", Validators.required],
            kind: ["", Validators.required],
            apiVersion: ["", Validators.required],
            resourceVersion: ["", Validators.required],
            includeUninitialized: ["", Validators.required]
        });
    }
}