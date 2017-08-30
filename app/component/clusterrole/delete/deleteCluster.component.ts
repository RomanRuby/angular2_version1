import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {DeleteOptions, DeleteOptionsDto, TypeMeta} from "../../../logic-service/roles";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "delete",
    templateUrl: "deleteCluster.component.html",
})

export class DeleteClusterRoleComponent implements OnInit {
    deleteOptions: DeleteOptionsDto;
    errorMessage: string;
    productForm: FormGroup;
    response: string;
    type: boolean = false;
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
        this.deleteOptions.name = productForm.value.name;
        this.deleteOptions.apiVersion = productForm.value.apiVersion;
        this.deleteOptions.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteOptions.orphanDependents = productForm.value.orphanDependents;
        this.deleteOptions.preconditions = productForm.value.preconditions;


        let deleteOption = new DeleteOptions(
            new TypeMeta("ClusterRole", this.deleteOptions.apiVersion), this.deleteOptions.gracePeriodSeconds,
            this.deleteOptions.orphanDependents,
            this.deleteOptions.preconditions);
        this.service.deleteRole(this.deleteOptions.name, deleteOption)
            .subscribe(
                data => {
                    this.response = data;
                    this.type = true;
                    console.log(this.response)
                },
                error => this.errorMessage = error
            );
    }

    public reset() {
        this.productForm.reset();
    }

    private initForm() {
        this.deleteOptions = new DeleteOptionsDto();
        this.productForm.patchValue(this.deleteOptions);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            name: ["", Validators.required],
            apiVersion: ["",],
            gracePeriodSeconds: ["",],
            preconditions: ["",],
            orphanDependents: ["",]
        });
    }
}