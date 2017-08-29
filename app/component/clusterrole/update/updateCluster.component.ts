import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";


import {
    ListOptions, ListDto, TypeMeta, RoleDto, Role, ObjectMeta, PolicyRule,
    RoleResponse
} from "../../../logic-service/roles";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "update",
    templateUrl: "updateCluster.component.html",
})

export class UpdateClusterRoleComponent implements OnInit {
    roleDto: RoleDto;
    errorMessage: string;
    productForm: FormGroup;
    saveUsername: boolean = false;
    responseRole: RoleResponse;
    type: boolean = false;
    responseValue: boolean =true;

    constructor(private service: ClusterRoleService,
                private activatedRoute: ActivatedRoute,
                private fb: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.buildForm();
        this.getProductFromRoute();

    }

    public checkError(element: string, errorType: string) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched
    }

    public onSubmit(productForm: FormGroup) {
        this.roleDto.name = productForm.value.name;
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

        let role = new Role(new TypeMeta("ClusterRole", this.roleDto.apiVersion), new ObjectMeta(
            this.roleDto.name,this.roleDto.namespace), policyRulesArrsys);

        this.service.updateRole(role)
            .subscribe(
                data => {
                    if(data)
                        this.responseRole = data;
                    this.responseValue =true;
                    if (typeof this.responseRole =="string"){
                        this.responseValue =false;
                    }

                    this.type = true;
                },
                error => this.errorMessage = error
            );
    }

    public goBack() {
        this.router.navigate(["/clusterrole"]);
    }

    private getProductFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];

            this.roleDto = new RoleDto();
            this.productForm.patchValue(this.roleDto);
        });
    }

    private buildForm() {
        this.productForm = this.fb.group({
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