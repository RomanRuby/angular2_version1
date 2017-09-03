import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";
import {GetOptions, GetOptionsDto, Options, TypeMeta} from "../../../logic-service/models/common";
import {
    ObjectMeta, ObjectMetaView, PolicyRuleDto, PolicyRuleDtoWithDeleteFunction,
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
    policyRuleDtoWithDeleteFunction = new Array<PolicyRuleDtoWithDeleteFunction>();
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
                    this.policyRuleDtoWithDeleteFunction = [];
                    if (typeof this.responseRole != "string") {
                        this.responseRoleDto = new RoleWithAllOptionsViewDto();
                        this.responseRoleDto.metadata= [];
                        this.responseRoleDto.typeMeta =[];

                        this.responseRoleDto.metadata.push(this.responseRole.metadata);
                        this.responseRoleDto.typeMeta.push(this.responseRole.typeMeta);


                        for (let i = 0; i < this.responseRole.rules.length; i++) {
                            this.policyRuleDtoWithDeleteFunction.push(new PolicyRuleDtoWithDeleteFunction(this.responseRole.rules[i].verbs.toString(),
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
            if(this.policyRuleDtoWithDeleteFunction[i].isDelete==false){
            policyRulesArrays.push(new PolicyRule(this.policyRuleDtoWithDeleteFunction[i].verbs.split(','),
                this.policyRuleDtoWithDeleteFunction[i].apiGroups.split(','),
                this.policyRuleDtoWithDeleteFunction[i].resources.split(','),
                this.policyRuleDtoWithDeleteFunction[i].resourceNames.split(',')));}
        }

        let role = new Role(this.responseRoleDto.typeMeta.pop(), this.responseRoleDto.metadata.pop(),
            policyRulesArrays);
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
        this.policyRuleDtoWithDeleteFunction.push(new PolicyRuleDtoWithDeleteFunction("",false,"","",""));
    }


}