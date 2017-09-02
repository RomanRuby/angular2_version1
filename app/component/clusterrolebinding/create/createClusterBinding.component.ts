import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";
import {ResponseRoleBinding, RoleBinding, RoleBindingDto, Subject} from "../../../logic-service/models/rolebinding";
import {ObjectMeta, RoleRef} from "../../../logic-service/models/role";
import {TypeMeta} from "../../../logic-service/models/common";


@Component({
    moduleId: module.id,
    selector: "create",
    templateUrl: "createClusterBinding.component.html",
})

export class CreateClusterBindingComponent implements OnInit {
    roleBindingDto: RoleBindingDto;
    errorMessage: string;
    productForm: FormGroup;
    viewAdditionalField: boolean = false;
    responseRole: ResponseRoleBinding;
    type: boolean = false;
    responseValue: boolean =true;

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
        this.roleBindingDto.namespace = productForm.value.namespace;
        this.roleBindingDto.name = productForm.value.name;
        this.roleBindingDto.kind = productForm.value.kind;
        this.roleBindingDto.subjectRules = productForm.value.subjectRules;

        this.roleBindingDto.generateName = productForm.value.generateName;
        this.roleBindingDto.nameRef = productForm.value.nameRef;

        let subjectRules: Subject[] = [];


        for (let i = 0; i < this.roleBindingDto.subjectRules.length; i++) {
            subjectRules.push(new Subject(this.roleBindingDto.subjectRules[i].apiGroup,
                this.roleBindingDto.subjectRules[i].kind, this.roleBindingDto.subjectRules[i].name,
                this.roleBindingDto.subjectRules[i].namespace));
        }
        let roleRef = new RoleRef(this.roleBindingDto.apiGroup,
           "ClusterRole",
            this.roleBindingDto.nameRef);

        let rolebinding = new RoleBinding(new TypeMeta("ClusterRoleBinding", this.roleBindingDto.apiVersion), new ObjectMeta(
            this.roleBindingDto.name ,this.roleBindingDto.namespace), subjectRules, roleRef);


        this.service.createRole(rolebinding)
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