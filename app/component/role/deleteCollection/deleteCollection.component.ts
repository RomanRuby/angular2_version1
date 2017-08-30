import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {RoleService} from "../../../logic-service/role.service";
import {
     DeleteCollectionDto, DeleteOptions, DeleteOptionsDto, DeleteResult, ListOptions,
    TypeMeta
} from "../../../logic-service/roles";
import {listeners} from "cluster";

@Component({
    moduleId: module.id,
    selector: "deleteCollection",
    templateUrl: "deleteCollection.component.html",
})

export class DeleteCollectionRoleComponent implements OnInit {
    deleteCollection: DeleteCollectionDto;
    errorMessage: string;
    productForm: FormGroup;
    response:string;
    type: boolean = false;
    viewAdditionalField: boolean = false;

    constructor(private service: RoleService,
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
        this.deleteCollection.nameUrl = productForm.value.namespace;
        this.deleteCollection.namespace = productForm.value.namespace;
        this.deleteCollection.apiVersion = productForm.value.apiVersion;
        this.deleteCollection.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteCollection.orphanDependents = productForm.value.orphanDependents;
        this.deleteCollection.preconditions = productForm.value.preconditions;
        this.deleteCollection.propagationPolicy = productForm.value.propagationPolicy;

        this.deleteCollection.kindList = productForm.value.kindList;
        this.deleteCollection.apiVersionList = productForm.value.apiVersionList;


      let listOption = new ListOptions();
      listOption.setTypeMeta(new TypeMeta(this.deleteCollection.kindList, this.deleteCollection.apiVersionList));

      let deleteOption = new DeleteOptions( new TypeMeta("Role", this.deleteCollection.apiVersion),this.deleteCollection.gracePeriodSeconds,
       this.deleteCollection.orphanDependents,
          this.deleteCollection.preconditions);

        this.service.deleteCollectionRole(this.deleteCollection.nameUrl,deleteOption,listOption)
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
            namespace: ["", Validators.required],
            apiVersion: ["", ],
            gracePeriodSeconds: ["",],
            preconditions: ["", ],
            orphanDependents: ["", ],
            propagationPolicy: ["", ],
            kindList: ["", Validators.required],
            namespaceList: [""],
        });
    }
}