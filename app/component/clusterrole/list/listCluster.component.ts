import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListOptions, ListDto, TypeMeta, ResponseRole} from "../../../logic-service/roles";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "listCluster.component.html",
})

export class ListClusterRoleComponent implements OnInit {
    roleDto: ListDto;
    errorMessage: string;
    productForm: FormGroup;
    responseRole: ResponseRole;
    type: boolean = false;


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
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.namespace = productForm.value.namespace;
        this.roleDto.apiVersion = productForm.value.apiVersion;

        let listOptions;
        listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta(this.roleDto.kind, this.roleDto.apiVersion));

        this.service.listRole( listOptions)
            .subscribe(
                data => {   console.log(data);
                    this.responseRole = data;
                    console.log(this.responseRole);
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