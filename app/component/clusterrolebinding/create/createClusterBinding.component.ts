import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";


import {
    ListOptions, ListDto, TypeMeta, RoleDto, Role, ObjectMeta, PolicyRule,
    RoleBindingDto, Subject, RoleBinding, RoleRef, ResponseRoleBinding
} from "../../../logic-service/roles";
import {ClusterRoleBindingService} from "../../../logic-service/clusterrolebinding.service";

@Component({
    moduleId: module.id,
    selector: "create",
    templateUrl: "createClusterBinding.component.html",
})

export class CreateClusterBindingComponent implements OnInit {
    roleBindingDto: RoleBindingDto;
    errorMessage: string;
    productForm: FormGroup;
    saveUsername: boolean = false;
    responseRole: ResponseRoleBinding;
    type: boolean = false;
    responseValue: boolean =true;

    constructor(private service: ClusterRoleBindingService,
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
        this.roleBindingDto.namespace = productForm.value.namespace;
        this.roleBindingDto.name = productForm.value.name;
        this.roleBindingDto.subjectRules = productForm.value.subjectRules;
        this.roleBindingDto.apiGroup = productForm.value.apiGroup;

        this.roleBindingDto.apiVersion = productForm.value.apiVersion;
        this.roleBindingDto.generateName = productForm.value.generateName;
        this.roleBindingDto.kindRef = productForm.value.kindRef;
        this.roleBindingDto.nameRef = productForm.value.nameRef;

        let subjectRules: Subject[] = [];


        for (let i = 0; i < this.roleBindingDto.subjectRules.length; i++) {
            subjectRules.push(new Subject(this.roleBindingDto.subjectRules[i].apiGroup,
                this.roleBindingDto.subjectRules[i].kind, this.roleBindingDto.subjectRules[i].name,
                this.roleBindingDto.subjectRules[i].namespace));
        }
        let roleRef = new RoleRef(this.roleBindingDto.apiGroup,
            this.roleBindingDto.kindRef,
            this.roleBindingDto.nameRef);

        let rolebinding = new RoleBinding(new TypeMeta(this.roleBindingDto.kind, this.roleBindingDto.apiVersion), new ObjectMeta(this.roleBindingDto.namespace,
            this.roleBindingDto.name), subjectRules, roleRef);


        this.service.createRole(rolebinding)
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
        this.router.navigate(["/products/create"]);
    }

    private getProductFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];

            this.roleBindingDto = new RoleBindingDto();
            this.productForm.patchValue(this.roleBindingDto);
        });
    }

    private buildForm() {
        this.productForm = this.fb.group({
            apiVersion: ["", ],
            apiGroupRef: ["", Validators.required],
            generateName: ["", Validators.required],
            kindRef: ["", Validators.required],
            nameRef: ["", Validators.required],
            subjectRules: this.fb.array([
                this.initSubject(),
            ])
        });
    }

    initSubject() {
        return this.fb.group({
            apiGroup: ["", ],
            kind: ["", Validators.required],
            name: ["", Validators.required],
            namespace: ["", ]
        });
    }

    addSubjectRules() {
        const control = <FormArray>this.productForm.controls['subjectRules'];
        control.push(this.initSubject());
    }

    removeSubjectRules(i: number) {
        const control = <FormArray>this.productForm.controls['subjectRules'];
        control.removeAt(i);
    }

}