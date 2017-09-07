import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {ResponseRoleBinding, RoleBinding, RoleBindingDto, Subject} from "../../../../models/rolebinding";
import {ClusterRoleBindingService} from "../../../../services/routings/clusterrolebinding.service";
import {ObjectMeta, RoleRef} from "../../../../models/role";
import {TypeMeta} from "../../../../models/common";


@Component({
    moduleId: module.id,
    selector: "create",
    templateUrl: "createClusterBinding.component.html",
})

export class CreateClusterBindingComponent implements OnInit {
    roleBindingDto: RoleBindingDto;
    productForm: FormGroup;
    responseRole: ResponseRoleBinding;
    errorMessage: string;
    viewAdditionalField: boolean = false;
    isInformationOutput: boolean = false;
    isInformationError: boolean = true;


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
        this.roleBindingDto.name = productForm.value.name;
        this.roleBindingDto.nameRef = productForm.value.nameRef;

        this.roleBindingDto.subjectRules = productForm.value.subjectRules;


        let subjectRules: Subject[] = [];


        for (let i = 0; i < this.roleBindingDto.subjectRules.length; i++) {
            subjectRules.push(new Subject(this.roleBindingDto.subjectRules[i].apiGroup,
                this.roleBindingDto.subjectRules[i].kind, this.roleBindingDto.subjectRules[i].name,
                this.roleBindingDto.subjectRules[i].namespace));
        }
        let roleRef = new RoleRef(this.roleBindingDto.apiGroup, "ClusterRole", this.roleBindingDto.nameRef);

        let roleBinding = new RoleBinding(new TypeMeta("ClusterRoleBinding", this.roleBindingDto.apiVersion),
            new ObjectMeta(this.roleBindingDto.name, this.roleBindingDto.namespace), subjectRules, roleRef);


        this.service.createRole(roleBinding)
            .subscribe(
                data => {
                    this.responseRole = data;

                    this.isInformationError = false;

                },
                error => {
                    this.errorMessage = error;
                    this.isInformationError = true;
                }
            );
        this.isInformationOutput = true;
    }

    public reset() {
        this.productForm.reset();
    }

    private initForm() {
        this.roleBindingDto = new RoleBindingDto();
        this.productForm.patchValue(this.roleBindingDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            name: ["", Validators.required],
            nameRef: ["", Validators.required],
            subjectRules: this.fb.array([
                this.initSubject(),
            ])
        });
    }

    initSubject() {
        return this.fb.group({
            apiGroup: ["",],
            kind: ["", Validators.required],
            name: ["", Validators.required],
            namespace: ["",]
        });
    }

    addSubjectRules() {
        const control = <FormArray>this.productForm.controls['subjectRules'];
        control.push(this.initSubject());
    }

    removeSubjectRules(i: number) {
        const control = <FormArray>this.productForm.controls['subjectRules'];
        control.removeAt(i);
    }

}