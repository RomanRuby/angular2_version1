import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";
import {DeleteOptions, ListDto, ListOptions, TypeMeta} from "../../../logic-service/models/common";
import {ResponsesRoleBindingList} from "../../../logic-service/models/rolebinding";
import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "listBinding.component.html",
})

export class ListBindingComponent implements OnInit {
    roleDto: ListDto;
    errorMessage: string;
    productForm: FormGroup;
    responseRole: ResponsesRoleBindingList;
    response: string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = false;
    namespace:string;
    constructor(private service: RoleBindingService,
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
        let listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("RoleBinding", null));

        this.namespace = productForm.value.namespace;

        this.service.listRole(this.namespace ,listOptions)
            .subscribe(
                data => {
                    this.responseRole = data;
                    this.isInformationTable =true;
                    console.log(this.responseRole);
                    if (typeof this.responseRole =="string"){
                        this.isInformationTable =false;
                    }

                    this.isInformationOutput = true;
                },
                error => this.errorMessage = error
            );
    }

    public deleteList() {
        let listOption = new ListOptions();
        listOption.setTypeMeta(new TypeMeta("RoleBinding", null));

        let deleteOption = new DeleteOptions( new TypeMeta("RoleBinding", null),null,
            null,
            null);

        this.service.deleteCollectionRole(this.namespace ,deleteOption,listOption)
            .subscribe(
                data => {  this.response = data;
                    this.isInformationTable = false;
                    this.isInformationError = true;
                },
                error => this.errorMessage = error
            );
    }


    public delete(name:string) {
        this.service.deleteRole(name,this.namespace , null).subscribe(
            data => {
            },
            error => this.errorMessage = error
        );
        this.service.deleteRole(name,this.namespace , null).subscribe(
            data => {
            },
            error => this.errorMessage = error
        );
        let listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("RoleBinding", null));

        this.service.listRole(this.namespace ,listOptions)
            .subscribe(
                data => {
                    this.responseRole = data;
                    this.isInformationTable =true;
                    console.log(this.responseRole);
                    if (typeof this.responseRole =="string"){
                        this.isInformationTable =false;
                    }

                    this.isInformationOutput = true;
                },
                error => this.errorMessage = error
            );
    }


    private initForm() {
        this.roleDto = new ListDto();
        this.productForm.patchValue(this.roleDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            namespace: ["", Validators.required],
        });
    }

}