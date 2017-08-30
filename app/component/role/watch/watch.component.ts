import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListOptions, ListDto, TypeMeta, ResponseRole} from "../../../logic-service/roles";

@Component({
    moduleId: module.id,
    selector: "watch",
    templateUrl: "watch.component.html",
})

export class WatchRoleComponent implements OnInit {
    roleDto: ListDto;
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
        this.roleDto.namespace = productForm.value.namespace;
        this.roleDto.apiVersion = productForm.value.apiVersion;

        let listOptions;
        listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("Role", this.roleDto.apiVersion));

        this.service.watchRole(this.roleDto.namespace, listOptions)
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
            namespace: ["", Validators.required],
            apiVersion: ["",]
        });
    }


}