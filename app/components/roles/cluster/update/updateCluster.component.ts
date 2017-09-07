import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {
    ObjectMetaView, PolicyRuleDtoWithDeleteFunction, RoleWithAllOptionsView,
    RoleWithAllOptionsViewDto,
    PolicyRule, Role,
} from "../../../../models/role";
import {ClusterRoleService} from "../../../../services/routings/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "update",
    templateUrl: "updateCluster.component.html"
})

export class UpdateClusterRoleComponent implements OnInit {
    productForm: FormGroup;
    responseRole: RoleWithAllOptionsView;
    responseRoleDto: RoleWithAllOptionsViewDto;
    policyRuleDtoWithDeleteFunction = [];
    errorMessage: string;
    response: string;

    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = true;

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
        this.service.getRole(productForm.value.name)
            .subscribe(
                data => {
                    this.responseRole = data;

                    this.policyRuleDtoWithDeleteFunction = [];

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

                },
                error => {
                    this.errorMessage = error;
                    this.isInformationTable = false;
                    this.isInformationError = true;
                }
            );
        this.isInformationOutput = true;
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
                    this.isInformationTable = true;
                    this.responseRole = data;

                    this.responseRoleDto.metadata.push(new ObjectMetaView
                    (this.responseRole.metadata.name, this.responseRole.metadata.namespace,
                        this.responseRole.metadata.generateName));
                },
                error => {
                    this.errorMessage = error;
                        this.isInformationTable = false;
                    this.isInformationError = true;
                }
            );
    }

    private initForm() {
        this.responseRole = new RoleWithAllOptionsView();
        this.productForm.patchValue(this.responseRole);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            name: ["", Validators.required]
        });
    }

    private addPolicy() {
        this.policyRuleDtoWithDeleteFunction.push(new PolicyRuleDtoWithDeleteFunction("", false, "", "", ""));
    }

}