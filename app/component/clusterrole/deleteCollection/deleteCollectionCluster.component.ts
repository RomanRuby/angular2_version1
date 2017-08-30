import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";


import {
    DeleteCollectionDto, DeleteOptions, ListOptions,
    TypeMeta
} from "../../../logic-service/roles";
import {listeners} from "cluster";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "deleteCollection",
    templateUrl: "deleteCollectionCluster.component.html",
})

export class DeleteCollectionClusterRoleComponent implements OnInit {
    deleteCollection: DeleteCollectionDto;
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
        this.deleteCollection.apiVersion = productForm.value.apiVersion;
        this.deleteCollection.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteCollection.orphanDependents = productForm.value.orphanDependents;
        this.deleteCollection.preconditions = productForm.value.preconditions;

        this.deleteCollection.apiVersionList = productForm.value.apiVersionList;


        let listOption = new ListOptions();
        listOption.setTypeMeta(new TypeMeta("ClusterRole", this.deleteCollection.apiVersionList));

        let deleteOption = new DeleteOptions(new TypeMeta("ClusterRole", this.deleteCollection.apiVersion), this.deleteCollection.gracePeriodSeconds, this.deleteCollection.orphanDependents,
            this.deleteCollection.preconditions);

        this.service.deleteCollectionRole(deleteOption, listOption)
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
            apiVersion: ["",],
            gracePeriodSeconds: ["",],
            preconditions: ["",],
            orphanDependents: ["",]
        });
    }
}