import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";
import {ListDto, ListOptions, TypeMeta} from "../../../logic-service/models/common";
import {RoleResponses} from "../../../logic-service/index";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "listCluster.component.html",
})

export class ListClusterRoleComponent implements OnInit {
    roleDto: ListDto;
    errorMessage: string;
    productForm: FormGroup;
    viewAdditionalField: boolean = false;
    responseRole: RoleResponses;
    type: boolean = false;
    responseValue: boolean = true;


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
        this.roleDto.kind = productForm.value.kind;

        this.roleDto.apiVersion = productForm.value.apiVersion;

        let listOptions;
        listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("ClusterRole", this.roleDto.apiVersion));

        this.service.listRole(listOptions)
            .subscribe(
                data => {
                    this.responseRole = data;
                    this.responseValue = true;
                    console.log(this.responseRole);
                    if (typeof this.responseRole == "string") {
                        this.responseValue = false;
                    }

                    this.type = true;
                },
                error => this.errorMessage = error
            );
    }

    public reset() {
        this.productForm.reset();
    }

    private initForm() {
        this.roleDto = new ListDto();
        this.productForm.patchValue(this.roleDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            apiVersion: ["",]
        });
    }

}