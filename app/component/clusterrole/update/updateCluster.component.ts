import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";
import {GetOptions, GetOptionsDto, Options, TypeMeta} from "../../../logic-service/models/common";
import {
    ObjectMeta, ObjectMetaView, PolicyRuleDto,
    Role, RoleResponse, RoleWithAllOptionsView, RoleWithAllOptionsViewDto,
} from "../../../logic-service/models/role";
import {FormArray} from "@angular/forms";
import {PolicyRule} from "../../../logic-service/index";
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: "update",
    templateUrl: "updateCluster.component.html"
})

export class UpdateClusterRoleComponent implements OnInit {
    productForm: FormGroup;
    responseRole: RoleWithAllOptionsView;
    responseRoleDto: RoleWithAllOptionsViewDto;
    errorMessage: string;
    response: string;

    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = false;

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
        this.service.getRole(productForm.value.name, null)
            .subscribe(
                data => {
                    this.responseRole = data;

                    if (typeof this.responseRole != "string") {
                        this.responseRoleDto = new RoleWithAllOptionsViewDto();
                        this.responseRoleDto.metadata= [];
                        this.responseRoleDto.typeMeta =[];

                        this.responseRoleDto.metadata.push(this.responseRole.metadata);
                        this.responseRoleDto.typeMeta.push(this.responseRole.typeMeta);


                        let policyRulesArrsysDto: PolicyRuleDto[] = [];

                        for (let i = 0; i < this.responseRole.rules.length; i++) {
                            policyRulesArrsysDto.push(new PolicyRuleDto(this.responseRole.rules[i].verbs.toString(),
                                this.responseRole.rules[i].apiGroups.toString(),
                                this.responseRole.rules[i].resources.toString(),
                                this.responseRole.rules[i].resourceNames.toString()));
                        }
                        this.responseRoleDto.rules = policyRulesArrsysDto;
                        this.isInformationTable = true;
                        this.isInformationError = false;
                    }
                    else {
                        this.isInformationError = true;
                    }

                    this.isInformationOutput = true;
                },
                error => this.errorMessage = error
            );
    }

    public save() {
        let policyRulesArrsys: PolicyRule[] = [];

        for (let i = 0; i < this.responseRoleDto.rules.length; i++) {
            policyRulesArrsys.push(new PolicyRule(this.responseRoleDto.rules[i].verbs.split(','),
                this.responseRoleDto.rules[i].apiGroups.split(','), this.responseRoleDto.rules[i].resources.split(','),
                this.responseRoleDto.rules[i].resourceNames.split(',')));
        }

        let role = new Role(this.responseRoleDto.typeMeta.pop(), this.responseRoleDto.metadata.pop(),
            policyRulesArrsys);
        console.log(role);
        this.service.updateRole(role)
            .subscribe(
                data => {
                    if (typeof data != "string") {
                        this.isInformationTable = true;
                    }else{

                        this.isInformationError = true;
                    }
                    this.responseRole = data;

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
            name: ["",Validators.required]
        });
    }
    private addPolicy() {
        this.responseRoleDto.rules.push(new PolicyRuleDto("null"));
    }

}