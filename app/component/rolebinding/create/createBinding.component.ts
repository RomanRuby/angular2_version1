import {Component, OnInit} from "@angular/core";

import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";

import {RoleBindingService} from "../../../logic-service/rolebinding.service";
import {ResponseRoleBinding, RoleBinding, RoleBindingDto, Subject} from "../../../logic-service/models/rolebinding";
import {ObjectMeta, RoleRef} from "../../../logic-service/models/role";
import {TypeMeta} from "../../../logic-service/models/common";

@Component({
    moduleId: module.id,
    selector: "create",
    templateUrl: "createBinding.component.html",
})

export class CreateBindingComponent implements OnInit {
    roleBindingDto: RoleBindingDto;
    productForm: FormGroup;
    responseRole: ResponseRoleBinding;
    errorMessage: string;
    viewAdditionalField: boolean = false;
    isInformationOutput: boolean = false;
    isInformationError: boolean = false;


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
        this.roleBindingDto.name = productForm.value.name;
        this.roleBindingDto.kind = productForm.value.kind;
        this.roleBindingDto.nameRef = productForm.value.nameRef;
        this.roleBindingDto.namespace = productForm.value.namespace;
        this.roleBindingDto.subjectRules = productForm.value.subjectRules;


        let subjectRules: Subject[] = [];


        for (let i = 0; i < this.roleBindingDto.subjectRules.length; i++) {
            subjectRules.push(new Subject(this.roleBindingDto.subjectRules[i].apiGroup,
                this.roleBindingDto.subjectRules[i].kind, this.roleBindingDto.subjectRules[i].name,
                this.roleBindingDto.subjectRules[i].namespace));
        }
        let roleRef = new RoleRef(this.roleBindingDto.apiGroup,  this.roleBindingDto.kind, this.roleBindingDto.nameRef);

        let rolebinding = new RoleBinding(new TypeMeta("RoleBinding", this.roleBindingDto.apiVersion),
            new ObjectMeta(this.roleBindingDto.name, this.roleBindingDto.namespace), subjectRules, roleRef);


        this.service.createRole(rolebinding)
            .subscribe(
                data => {
                    this.responseRole = data;

                    this.isInformationError = typeof this.responseRole == "string";
                    this.isInformationOutput = true;
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
            namespace: ["", Validators.required],
            name: ["", Validators.required],
            nameRef: ["", Validators.required],
            kind: ["", Validators.required],
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