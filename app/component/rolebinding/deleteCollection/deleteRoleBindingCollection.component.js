"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var roles_1 = require("../../../logic-service/roles");
var rolebinding_service_1 = require("../../../logic-service/rolebinding.service");
var DeleteCollectionRoleBindingComponent = (function () {
    function DeleteCollectionRoleBindingComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    DeleteCollectionRoleBindingComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    DeleteCollectionRoleBindingComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    DeleteCollectionRoleBindingComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.deleteCollection.name = productForm.value.name;
        this.deleteCollection.namespace = productForm.value.namespace;
        this.deleteCollection.kind = productForm.value.kind;
        this.deleteCollection.apiVersion = productForm.value.apiVersion;
        this.deleteCollection.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteCollection.orphanDependents = productForm.value.orphanDependents;
        this.deleteCollection.preconditions = productForm.value.preconditions;
        this.deleteCollection.kindList = productForm.value.kindList;
        this.deleteCollection.apiVersionList = productForm.value.apiVersionList;
        var listOption = new roles_1.ListOptions();
        listOption.setTypeMeta(new roles_1.TypeMeta(this.deleteCollection.kindList, this.deleteCollection.apiVersionList));
        var deleteOption = new roles_1.DeleteOptions(new roles_1.TypeMeta(this.deleteCollection.kind, this.deleteCollection.apiVersion), this.deleteCollection.gracePeriodSeconds, this.deleteCollection.orphanDependents, this.deleteCollection.preconditions);
        this.service.deleteCollectionRole(this.deleteCollection.namespace, deleteOption, listOption)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    DeleteCollectionRoleBindingComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    DeleteCollectionRoleBindingComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.deleteCollection = new roles_1.DeleteCollectionDto();
            _this.productForm.patchValue(_this.deleteCollection);
        });
    };
    DeleteCollectionRoleBindingComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            kind: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            namespace: ["", forms_1.Validators.required],
            apiVersion: ["",],
            gracePeriodSeconds: ["",],
            preconditions: ["",],
            orphanDependents: ["",],
            deletionPropagation: ["",],
            kindList: ["", forms_1.Validators.required],
            apiVersionList: ["",],
        });
    };
    return DeleteCollectionRoleBindingComponent;
}());
DeleteCollectionRoleBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "deleteCollection",
        templateUrl: "deleteRoleBindingCollection.component.html",
    }),
    __metadata("design:paramtypes", [rolebinding_service_1.RoleBindingService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], DeleteCollectionRoleBindingComponent);
exports.DeleteCollectionRoleBindingComponent = DeleteCollectionRoleBindingComponent;
//# sourceMappingURL=deleteRoleBindingCollection.component.js.map