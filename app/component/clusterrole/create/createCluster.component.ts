import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";


import {RoleService} from "../../../logic-service/role.service";
import {ListOptions, ListDto, TypeMeta, RoleDto, Role, ObjectMeta, PolicyRule} from "../../../logic-service/roles";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "create",
    templateUrl: "createCluster.component.html",
})

export class CreateClusterRoleComponent implements OnInit {
    roleDto: RoleDto;
    errorMessage: string;
    productForm: FormGroup;

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
            this.roleDto.policyRules[i].resourceNames.split(','), this.roleDto.policyRules[i].nonResourceURLs.split(',')));
        }

        let role = new Role(new TypeMeta(this.roleDto.kind, this.roleDto.apiVersion), new ObjectMeta(this.roleDto.namespace,
            this.roleDto.name), policyRulesArrsys);


        this.service.createRole(role)
            .subscribe(
                () => console.log("asdf"),
                error => this.errorMessage = error
            );
    }

    public goBack() {
        this.router.navigate(["/products/create"]);
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
            kind: ["", Validators.required],
            name: ["", Validators.required],
            apiVersion: ["", Validators.required],
            generateName: ["", Validators.required],
            selfLink: ["", Validators.required],
            uid: ["", Validators.required],
            policyRules: this.fb.array([
                this.initPolicyRules(),
            ])
        });
    }

    initPolicyRules() {
        return this.fb.group({
            verbs: ["", Validators.required],
            apiGroups: ["", Validators.required],
            resources: ["", Validators.required],
            nonResourceURLs: ["", Validators.required],
            resourceNames: ["", Validators.required],
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