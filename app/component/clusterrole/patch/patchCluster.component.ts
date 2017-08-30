import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {PatchTypeDto, RoleResponse} from "../../../logic-service/roles";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "patch",
    templateUrl: "patchCluster.component.html",
})

export class PatchClusterRoleComponent implements OnInit {
    patchOptions: PatchTypeDto;
    errorMessage: string;
    productForm: FormGroup;
    responseRole: RoleResponse;
    type: boolean = false;
    responseValue: boolean = true;
    saveUsername: boolean = false;

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
        this.patchOptions.patchType = productForm.value.patchType;
        this.patchOptions.name = productForm.value.name;
        this.patchOptions.data = productForm.value.data;
        this.patchOptions.subresources = productForm.value.subresources;


        this.service.patchRole(this.patchOptions.name,
            this.patchOptions.patchType, this.patchOptions.data, this.patchOptions.subresources)
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
        this.patchOptions = new PatchTypeDto();
        this.productForm.patchValue(this.patchOptions);

    }

    private buildForm() {
        this.productForm = this.fb.group({
            patchType: ["", Validators.required],
            name: ["", Validators.required],
            data: ["", Validators.required],
            subresources: ["", Validators.required],
        });
    }
}