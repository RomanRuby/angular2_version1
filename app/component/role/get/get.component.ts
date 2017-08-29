import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {RoleService} from "../../../logic-service/role.service";
import {DeleteOptions, DeleteOptionsDto, GetOptions, GetOptionsDto, TypeMeta, RoleResponse} from "../../../logic-service/roles";

@Component({
    moduleId: module.id,
    selector: "get",
    templateUrl: "get.component.html",
})

export class GetRoleComponent implements OnInit {
    getOptions: GetOptionsDto;
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
        this.getOptions.nameUrl = productForm.value.nameUrl;
        this.getOptions.name = productForm.value.name;



        let getOption = new GetOptions(
            new TypeMeta("Role", this.getOptions.apiVersion),
            this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.name  ,this.getOptions.nameUrl,getOption)
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
        this.router.navigate(["/role"]);
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
            name: ["", Validators.required],
            nameUrl: ["", Validators.required],
            apiVersion: ["", ],
            resourceVersion: ["", ],
            includeUninitialized: ["",]
        });
    }
}