///<reference path="../../../logic-service/models/common.ts"/>
import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {listeners} from "cluster";

import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";
import {DeleteCollectionDto, DeleteOptions, ListOptions, TypeMeta} from "../../../logic-service/models/common";

@Component({
    moduleId: module.id,
    selector: "deleteRoleBindingCollection",
    templateUrl: "deleteClusterRoleBindingCollection.component.html",
})

export class DeleteCollectionClusterRoleBindingComponent implements OnInit {
    deleteCollection: DeleteCollectionDto;
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
        this.deleteCollection.apiVersion = productForm.value.apiVersion;
        this.deleteCollection.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteCollection.orphanDependents = productForm.value.orphanDependents;
        this.deleteCollection.preconditions = productForm.value.preconditions;
        this.deleteCollection.propagationPolicy = productForm.value.propagationPolicy;

        this.deleteCollection.apiVersionList = productForm.value.apiVersionList;


        let listOption = new ListOptions();
        listOption.setTypeMeta(new TypeMeta("ClusterRoleBinding", this.deleteCollection.apiVersionList));

        let deleteOption = new DeleteOptions( new TypeMeta("ClusterRoleBinding", this.deleteCollection.apiVersion),this.deleteCollection.gracePeriodSeconds,
            this.deleteCollection.orphanDependents,
            this.deleteCollection.preconditions);

        this.service.deleteCollectionRole(deleteOption,listOption)
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
        this.deleteCollection = new DeleteCollectionDto();
        this.productForm.patchValue(this.deleteCollection);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            apiVersion: ["", ],
            gracePeriodSeconds: ["",],
            preconditions: ["", ],
            orphanDependents: ["", ],
            propagationPolicy: ["", ],
            namespaceList: [""],
        });
    }
}