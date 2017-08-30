import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {
    ListOptions, ListDto, TypeMeta, RoleDto, Role, ObjectMeta, PolicyRule,
    RoleResponse
} from "../../../logic-service/roles";

@Component({
    moduleId: module.id,
    selector: "create",
    templateUrl: "create.component.html",
})

export class CreateRoleComponent implements OnInit {
    roleDto: RoleDto;
    errorMessage: string;
    productForm: FormGroup;
    viewAdditionalField: boolean = false;
    responseRole: RoleResponse;
    type: boolean = false;
    responseValue: boolean =true;

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
        this.roleDto.namespace = productForm.value.namespace;
        this.roleDto.name = productForm.value.name;
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        this.roleDto.generateName = productForm.value.generateName;
        this.roleDto.selfLink = productForm.value.selfLink;
        this.roleDto.uid = productForm.value.uid;
        this.roleDto.policyRules = productForm.value.policyRules;

        let policyRulesArrsys: PolicyRule[] = [];


        for (let i = 0; i < this.roleDto.policyRules.length; i++) {
            policyRulesArrsys.push(new PolicyRule(this.roleDto.policyRules[i].verbs.split(','),
            this.roleDto.policyRules[i].apiGroups.split(','), this.roleDto.policyRules[i].resources.split(','),
            this.roleDto.policyRules[i].resourceNames.split(',')));
        }

        let role = new Role(new TypeMeta("Role", this.roleDto.apiVersion), new ObjectMeta(
            this.roleDto.name,this.roleDto.namespace), policyRulesArrsys);

        this.service.createRole(role)
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
            this.roleDto = new RoleDto();
            this.productForm.patchValue(this.roleDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({
            namespace: ["",Validators.required ],
            name: ["",  Validators.required],
            apiVersion: ["", ],
            generateName: ["", ],
            selfLink: ["", ],
            uid: ["", ],
            policyRules: this.fb.array([
                this.initPolicyRules(),
            ])
        });
    }

    initPolicyRules() {
        return this.fb.group({
            verbs: ["", Validators.required],
            apiGroups: ["", ],
            resources: ["", ],
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