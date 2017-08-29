import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


import {
    DeleteOptions, DeleteOptionsDto, GetOptions, GetOptionsDto, RoleResponse,
    TypeMeta
} from "../../../logic-service/roles";
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
    responseRole: RoleResponse;
    type: boolean = false;
    responseValue: boolean =true;
    saveUsername: boolean = false;

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
        this.getOptions.name = productForm.value.name;
        this.getOptions.apiVersion = productForm.value.apiVersion;

        this.getOptions.resourceVersion = productForm.value.resourceVersion;
        this.getOptions.includeUninitialized = productForm.value.includeUninitialized;


        let getOption = new GetOptions(
            new TypeMeta("ClusterRole", this.getOptions.apiVersion),
            this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.name ,getOption)
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
        this.router.navigate(["/clusterrole"]);
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
            apiVersion: ["", ],
            resourceVersion: ["", ],
            includeUninitialized: ["",]
        });
    }
}