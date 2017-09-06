import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {
    ResponseRoleBinding, RoleBinding, RoleBindingDto, Subject,
    SubjectDto
} from "../../../logic-service/models/rolebinding";
import {ObjectMeta} from "../../../logic-service/models/role";
import {GetOptions, TypeMeta} from "../../../logic-service/models/common";
import {RoleBindingService} from "../../../logic-service/rolebinding.service";


@Component({
    moduleId: module.id,
    selector: "update",
    templateUrl: "updateBinding.component.html",
})

export class UpdateBindingComponent implements OnInit {
    roleBindingDto:RoleBindingDto;
    productForm: FormGroup;
    responseRole: ResponseRoleBinding;
    subjectRuleDtoWithDeleteFunction = [];
    errorMessage: string;
    namespace:string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
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
        this.namespace = productForm.value.namespace;
        let getOption = new GetOptions(
            new TypeMeta("ClusterRole"),
            null, null);
        this.service.getRole(productForm.value.name,this.namespace, getOption)
            .subscribe(
                data => {
                    this.responseRole = data;
                    this.subjectRuleDtoWithDeleteFunction = [];

                    if (typeof this.responseRole != "string") {
                        this.isInformationTable = true;
                        this.isInformationError = false;
                        for (let i = 0; i < this.responseRole.subjects.length; i++) {
                            this.subjectRuleDtoWithDeleteFunction.push(new SubjectDto(
                                this.responseRole.subjects[i].apiGroup,
                                false,
                                this.responseRole.subjects[i].kind,
                                this.responseRole.subjects[i].name,
                                this.responseRole.subjects[i].namespace
                            ));
                        }
                    }
                    else {
                        this.isInformationTable = false;
                        this.isInformationError = true;
                    }
                    this.isInformationOutput = true;
                },
                error => this.errorMessage = error
            );
    }

    public save() {
        let subjectRulesArrays: Subject[] = [];

        for (let i = 0; i < this.subjectRuleDtoWithDeleteFunction.length; i++) {
            if (this.subjectRuleDtoWithDeleteFunction[i].isDelete == false) {
                subjectRulesArrays.push(new Subject(this.subjectRuleDtoWithDeleteFunction[i].apiGroup,
                    this.subjectRuleDtoWithDeleteFunction[i].kind,
                    this.subjectRuleDtoWithDeleteFunction[i].name,
                    this.subjectRuleDtoWithDeleteFunction[i].namespace));
            }
            else {
                this.subjectRuleDtoWithDeleteFunction =
                    this.subjectRuleDtoWithDeleteFunction.filter(subject => subject.isDelete == false);
            }

        }

        let role = new RoleBinding(new TypeMeta("RoleBinding"),
            new ObjectMeta(this.responseRole.metadata.name, this.namespace), subjectRulesArrays,
            this.responseRole.roleRef);
        this.service.updateRole(role)
            .subscribe(
                data => {
                    if (typeof data != "string") {
                        this.isInformationTable = true;
                    } else {
                        this.isInformationError = true;
                        this.isInformationTable = false;
                    }
                    this.responseRole = data;
                    console.log(this.responseRole);
                },
                error => this.errorMessage = error
            );
    }

    private initForm() {
        this.roleBindingDto = new RoleBindingDto();
        this.productForm.patchValue(this.roleBindingDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            name: ["", Validators.required],
            namespace: ["", Validators.required],
        });
    }
    private addSubjectRules() {
        this.subjectRuleDtoWithDeleteFunction.push(new SubjectDto("", false, "User", "", ""));
    }
}