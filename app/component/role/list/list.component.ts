import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListOptions, ListDto, TypeMeta, ResponseRole, RoleResponses} from "../../../logic-service/roles";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "list.component.html",
})

export class ListRoleComponent implements OnInit {
    roleDto: ListDto;
    errorMessage: string;
    productForm: FormGroup;
    saveUsername: boolean = false;
    responseRole: RoleResponses;
    type: boolean = false;
    responseValue: boolean =true;


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
        this.roleDto.namespace = productForm.value.namespace;
        this.roleDto.apiVersion = productForm.value.apiVersion;

        let listOptions;
        listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("Role", this.roleDto.apiVersion));

        this.service.listRole(this.roleDto.namespace, listOptions)
            .subscribe(
                data => {
                    if(data)
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

    public goBack() {

        this.router.navigate(["/role"]);
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
            namespace: ["", Validators.required],
            apiVersion: ["",]
        });
    }


}