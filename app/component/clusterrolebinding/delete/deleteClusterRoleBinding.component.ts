import {Component, OnInit} from "@angular/core";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";
import {DeleteOptionsDto, DeleteOptions} from "../../../logic-service/index";
import {TypeMeta} from "../../../logic-service/models/common";


@Component({
    moduleId: module.id,
    selector: "delete",
    templateUrl: "deleteClusterRoleBinding.component.html",
})

export class DeleteClusterRoleBindingComponent implements OnInit {
    deleteOptions: DeleteOptionsDto;
    errorMessage: string;
    productForm: FormGroup;
    response:string;
    type: boolean = false;
    viewAdditionalField: boolean = false;

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
        this.deleteOptions.name = productForm.value.name;
        this.deleteOptions.kind = productForm.value.kind;
        this.deleteOptions.apiVersion = productForm.value.apiVersion;
        this.deleteOptions.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteOptions.orphanDependents = productForm.value.orphanDependents;
        this.deleteOptions.preconditions = productForm.value.preconditions;

        let deleteOption = new DeleteOptions(
            new TypeMeta("ClusterRoleBinding", this.deleteOptions.apiVersion), this.deleteOptions.gracePeriodSeconds, this.deleteOptions.orphanDependents,
            this.deleteOptions.preconditions);
        this.service.deleteRole( this.deleteOptions.name,deleteOption)
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
            orphanDependents: ["",],
            deletionPropagation: ["",]
        });
    }
}