import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";

import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";
import {ResponseRoleBinding, RoleBinding, RoleBindingDto, Subject} from "../../../logic-service/models/rolebinding";
import {ObjectMeta, Role, RoleRef} from "../../../logic-service/models/role";
import {GetOptions, TypeMeta} from "../../../logic-service/models/common";


@Component({
    moduleId: module.id,
    selector: "update",
    templateUrl: "updateClusterBinding.component.html",
})

export class UpdateClusterBindingComponent implements OnInit {
    roleBindingDto:RoleBindingDto;
    errorMessage: string;
    productForm: FormGroup;
    viewAdditionalField: boolean = false;
    responseRole: RoleBinding;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = false;

    constructor(private service: ClusterRoleBindingService,
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
        let getOption = new GetOptions(
            new TypeMeta("ClusterRole",null),
           null, null);
        this.service.getRole(productForm.value.name, getOption)
            .subscribe(
                data => {
                    this.responseRole = data;
                    if (typeof this.responseRole != "string") {
                        this.isInformationTable = true;
                    }
                    else {
                        this.isInformationError = true;
                    }
                    this.isInformationOutput = true;
                },
                error => this.errorMessage = error
            );
    }

    public save() {
        let role = new RoleBinding(new TypeMeta("RoleBinding", null),
            new ObjectMeta(this.responseRole.metadata.name, null), this.responseRole.subjects,
            this.responseRole.roleRef);
        this.service.updateRole(role)
            .subscribe(
                data => {
                    this.responseRole = data;
                    if (typeof this.responseRole != "string") {
                        this.isInformationTable = true;
                    } else {
                        this.isInformationError = true;
                    }
                },
                error => this.errorMessage = error
            );
    }

    private initForm() {
        this.roleBindingDto = new RoleBindingDto();
        this.productForm.patchValue(this.roleBindingDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            name: ["", Validators.required],
        });
    }

}