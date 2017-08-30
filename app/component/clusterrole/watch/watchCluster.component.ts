import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import {ListOptions, ListDto, TypeMeta, ResponseRole} from "../../../logic-service/roles";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "watch",
    templateUrl: "watchCluster.component.html",
})

export class WatchClusterRoleComponent implements OnInit {
    roleDto: ListDto;
    errorMessage: string;
    productForm: FormGroup;
    response:string;
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
        this.roleDto.apiVersion = productForm.value.apiVersion;
        let listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("ClusterRole", this.roleDto.apiVersion));

        this.service.watchRole( listOptions)
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
            this.roleDto = new ListDto();
            this.productForm.patchValue(this.roleDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            apiVersion: ["",]
        });
    }
}