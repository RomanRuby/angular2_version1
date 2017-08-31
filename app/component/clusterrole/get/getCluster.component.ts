import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";
import {GetOptions, GetOptionsDto, TypeMeta} from "../../../logic-service/models/common";
import {RoleResponse} from "../../../logic-service/models/role";

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
    responseValue: boolean = true;
    viewAdditionalField: boolean = false;

    constructor(private service: ClusterRoleService,
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
        this.getOptions.name = productForm.value.name;
        this.getOptions.apiVersion = productForm.value.apiVersion;

        this.getOptions.resourceVersion = productForm.value.resourceVersion;
        this.getOptions.includeUninitialized = productForm.value.includeUninitialized;


        let getOption = new GetOptions(
            new TypeMeta("ClusterRole", this.getOptions.apiVersion),
            this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.name, getOption)
            .subscribe(
                data => {
                    this.responseRole = data;
                    this.responseValue = typeof this.responseRole != "string";
                    this.type = true;
                },
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
            name: ["", Validators.required],
            apiVersion: ["",],
            resourceVersion: ["",],
            includeUninitialized: ["",]
        });
    }
}