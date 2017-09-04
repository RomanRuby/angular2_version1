import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {
    ObjectMetaView, PolicyRuleDtoWithDeleteFunction,
    Role, RoleWithAllOptionsView, RoleWithAllOptionsViewDto,
} from "../../../logic-service/models/role";

import {PolicyRule} from "../../../logic-service/index";
import {RoleService} from "../../../logic-service/role.service";

@Component({
    moduleId: module.id,
    selector: "update",
    templateUrl: "update.component.html",
})

export class UpdateRoleComponent implements OnInit {
    productForm: FormGroup;
    responseRole: RoleWithAllOptionsView;
    responseRoleDto: RoleWithAllOptionsViewDto;
    policyRuleDtoWithDeleteFunction = [];
    errorMessage: string;
    response: string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = false;


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
        this.service.getRole(productForm.value.name, productForm.value.namespace,null)
            .subscribe(
                data => {
                    this.responseRole = data;

                    this.policyRuleDtoWithDeleteFunction = [];

                    if (typeof this.responseRole != "string") {
                        this.responseRoleDto = new RoleWithAllOptionsViewDto();
                        this.responseRoleDto.metadata = [];

                        this.responseRoleDto.metadata.push(new ObjectMetaView
                        (this.responseRole.metadata.name, this.responseRole.metadata.namespace,
                            this.responseRole.metadata.generateName));

                        for (let i = 0; i < this.responseRole.rules.length; i++) {
                            this.policyRuleDtoWithDeleteFunction.push(new PolicyRuleDtoWithDeleteFunction(
                                this.responseRole.rules[i].verbs.toString(),
                                false,
                                this.responseRole.rules[i].apiGroups.toString(),
                                this.responseRole.rules[i].resources.toString(),
                                this.responseRole.rules[i].resourceNames.toString()
                            ));
                        }
                        this.isInformationTable = true;
                        this.isInformationError = false;
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
        let policyRulesArrays: PolicyRule[] = [];

        for (let i = 0; i < this.policyRuleDtoWithDeleteFunction.length; i++) {
            if (this.policyRuleDtoWithDeleteFunction[i].isDelete == false) {
                policyRulesArrays.push(new PolicyRule(this.policyRuleDtoWithDeleteFunction[i].verbs.split(','),
                    this.policyRuleDtoWithDeleteFunction[i].apiGroups.split(','),
                    this.policyRuleDtoWithDeleteFunction[i].resources.split(','),
                    this.policyRuleDtoWithDeleteFunction[i].resourceNames.split(',')));
            }
            else {
                this.policyRuleDtoWithDeleteFunction =
                    this.policyRuleDtoWithDeleteFunction.filter(policy => policy.isDelete == false);
            }

        }
        let role = new Role(this.responseRole.typeMeta, this.responseRoleDto.metadata.pop(),
            policyRulesArrays);
        this.service.updateRole(role)
            .subscribe(
                data => {
                    if (typeof data != "string") {
                        this.isInformationTable = true;
                    } else {
                        this.isInformationTable = false;
                        this.isInformationError = true;
                    }
                    this.responseRole = data;

                    this.responseRoleDto.metadata.push(new ObjectMetaView
                    (this.responseRole.metadata.name, this.responseRole.metadata.namespace,
                        this.responseRole.metadata.generateName));
                },
                error => this.errorMessage = error
            );
    }

    private initForm() {
        this.responseRole = new RoleWithAllOptionsView();
        this.productForm.patchValue(this.responseRole);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            name: ["",Validators.required],
            namespace: ["",Validators.required]
        });
    }
    private addPolicy() {
        this.policyRuleDtoWithDeleteFunction.push(new PolicyRuleDtoWithDeleteFunction("", false, "", "", ""));
    }
}