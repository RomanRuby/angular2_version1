import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {
     DeleteCollectionDto, DeleteOptions, DeleteOptionsDto, DeleteResult, ListOptions,
    TypeMeta
} from "../../../logic-service/roles";
import {listeners} from "cluster";
import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";

@Component({
    moduleId: module.id,
    selector: "deleteCollection",
    templateUrl: "deleteRoleBindingCollection.component.html",
})

export class DeleteCollectionRoleBindingComponent implements OnInit {
    deleteCollection: DeleteCollectionDto;
    errorMessage: string;
    productForm: FormGroup;

    constructor(private service: RoleBindingService,
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

        this.deleteCollection.name = productForm.value.name;
        this.deleteCollection.namespace = productForm.value.namespace;
        this.deleteCollection.kind = productForm.value.kind;
        this.deleteCollection.apiVersion = productForm.value.apiVersion;
        this.deleteCollection.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteCollection.orphanDependents = productForm.value.orphanDependents;
        this.deleteCollection.preconditions = productForm.value.preconditions;

        this.deleteCollection.kindList = productForm.value.kindList;
        this.deleteCollection.apiVersionList = productForm.value.apiVersionList;


      let listOption = new ListOptions();
      listOption.setTypeMeta(new TypeMeta(this.deleteCollection.kindList, this.deleteCollection.apiVersionList));

      let deleteOption = new DeleteOptions( new TypeMeta(this.deleteCollection.kind, this.deleteCollection.apiVersion),this.deleteCollection.gracePeriodSeconds, this.deleteCollection.orphanDependents,
          this.deleteCollection.preconditions);

        this.service.deleteCollectionRole(this.deleteCollection.namespace,deleteOption,listOption)
            .subscribe(
                () => console.log("asdf"),
                error => this.errorMessage = error
            );
    }

    public goBack() {
        this.router.navigate(["/products/create"]);
    }

    private getProductFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];

            this.deleteCollection = new DeleteCollectionDto();
            this.productForm.patchValue(this.deleteCollection);
        });
    }

    private buildForm() {
        this.productForm = this.fb.group({
            kind: ["", Validators.required],
            name: ["", Validators.required],
            namespace: ["", Validators.required],
            apiVersion: ["",],
            gracePeriodSeconds: ["",],
            preconditions: ["", ],
            orphanDependents: ["", ],
            deletionPropagation: ["", ],
            kindList: ["", Validators.required],
            apiVersionList: ["", ],
        });
    }
}