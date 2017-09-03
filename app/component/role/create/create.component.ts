import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {
    ObjectMetaView, PolicyRule, Role, RoleDto, RoleWithAllOptionsView
} from "../../../logic-service/models/role";
import {TypeMeta} from "../../../logic-service/models/common";
import {RoleService} from "../../../logic-service/role.service";

@Component({
    moduleId: module.id,
    selector: "create",
    templateUrl: "create.component.html",
})

export class CreateRoleComponent implements OnInit {

    roleDto: RoleDto;
    responseRole: RoleWithAllOptionsView;
    productForm: FormGroup;
    errorMessage: string;
    viewAdditionalField: boolean = false;
    isInformationOutput: boolean = false;
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
        this.roleDto.name = productForm.value.name;
        this.roleDto.namespace = productForm.value.namespace;
        this.roleDto.policyRules = productForm.value.policyRules;

        let policyRulesArrays: PolicyRule[] = [];

        for (let i = 0; i < this.roleDto.policyRules.length; i++) {
            policyRulesArrays.push(new PolicyRule(this.roleDto.policyRules[i].verbs.split(','),
                this.roleDto.policyRules[i].apiGroups.split(','), this.roleDto.policyRules[i].resources.split(','),
                this.roleDto.policyRules[i].resourceNames.split(',')));
        }

        let role = new Role(new TypeMeta("ClusterRole", this.roleDto.apiVersion), new ObjectMetaView(
            this.roleDto.name, this.roleDto.namespace, this.roleDto.generation, this.roleDto.deletionTimestamp,
            this.roleDto.deletionGracePeriodSeconds), policyRulesArrays);

        this.service.createRole(role)
            .subscribe(
                data => {
                    console.log(data);
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
        this.roleDto = new RoleDto();
        this.productForm.patchValue(this.roleDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            name: ["", Validators.required],
            namespace: ["", Validators.required],
            policyRules: this.fb.array([
                this.initPolicyRules(),
            ])
        });
    }

    initPolicyRules() {
        return this.fb.group({
            verbs: ["", Validators.required],
            apiGroups: ["",],
            resources: ["",],
            resourceNames: ["",],
        });
    }

    addPolicyRules() {
        const control = <FormArray>this.productForm.controls['policyRules'];
        control.push(this.initPolicyRules());
    }

    removePolicyRules(i: number) {
        const control = <FormArray>this.productForm.controls['policyRules'];
        control.removeAt(i);
    }

}