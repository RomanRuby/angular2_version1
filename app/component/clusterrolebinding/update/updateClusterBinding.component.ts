import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";
import {
    ResponseRoleBinding, RoleBinding, RoleBindingDto, Subject,
    SubjectDto
} from "../../../logic-service/models/rolebinding";
import {ObjectMeta} from "../../../logic-service/models/role";
import {GetOptions, TypeMeta} from "../../../logic-service/models/common";


@Component({
    moduleId: module.id,
    selector: "update",
    templateUrl: "updateClusterBinding.component.html",
})

export class UpdateClusterBindingComponent implements OnInit {
    roleBindingDto:RoleBindingDto;
    productForm: FormGroup;
    responseRole: ResponseRoleBinding;
    subjectRuleDtoWithDeleteFunction = [];
    errorMessage: string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = false;


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
        let getOption = new GetOptions(
            new TypeMeta("ClusterRole"),
           null, null);
        this.service.getRole(productForm.value.name, getOption)
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
            new ObjectMeta(this.responseRole.metadata.name, null), subjectRulesArrays,
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
        });
    }
    private addSubjectRules() {
        this.subjectRuleDtoWithDeleteFunction.push(new SubjectDto("", false, "User", "", ""));
    }
}