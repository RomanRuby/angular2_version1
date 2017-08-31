import {MetaResponse, TypeMeta} from "./common";

export class Role {
    typeMeta: TypeMeta;
    metadata: ObjectMeta;
    rules: Array<PolicyRule>;

    constructor(typeMeta: TypeMeta,
                metadata: ObjectMeta,
                rules: Array<PolicyRule>) {
        this.typeMeta = typeMeta;
        this.metadata = metadata;
        this.rules = rules;
    }
}

export class RoleResponse {
    metadata: MetaResponse;
    rules: Array<PolicyRule>;

}
export class RoleResponses {
    metadata: MetaD;
    roleResponse: RoleResponse;

}
export class RoleDto {
    kind: string;
    apiVersion: string;
    name: string;
    generateName?: string;
    namespace: string;
    selfLink?: string;
    uid?: UID;
    policyRules: Array<PolicyRuleDto>;
}
export class RoleRef {
    apiGroup: string;
    kind: string;
    name: string;

    constructor(apiGroup: string,
                kind: string,
                name: string) {
        this.apiGroup = apiGroup;
        this.kind = kind;
        this.name = name;
    }
}

export class MetaD {
    resourceVersion: string;
    selfLink: string;
}
export class PolicyRule {
    verbs: Array<string>;
    apiGroups: Array<string>;
    resources: Array<string>;
    resourceNames: Array<string>;


    constructor(verbs: Array<string>,
                apiGroups: Array<string>,
                resources: Array<string>,
                resourceNames: Array<string>) {

        this.verbs = verbs;
        this.apiGroups = apiGroups;
        this.resources = resources;
        this.resourceNames = resourceNames;

    }
}

export class PolicyRuleDto {
    verbs: string;
    apiGroups: string;
    resources: string;
    resourceNames: string;
}
class UID {
    uid?: string;
}

export class ObjectMeta {

    name: string;
    generateName?: string;
    namespace: string;
    selfLink?: string;
    uid?: UID;

    constructor(name: string, namespace: string) {
        this.namespace = namespace;
        this.name = name;
    }
}

export class ObjectMetaView {
    name: string;
    generateName: string;
    namespace: string;
    selfLink: string;
    uid: UID;
    resourceVersion: string;
    generation:number;
    creationTimesmamp:number;
    deletionTimestamp:number;
    deletionGracePeriodSeconds:number;
    finalizers:Array<string>;
    clusterName:string;

    constructor(){

    }
}

export class RoleWithAllOptionsView {
    typeMeta: TypeMeta;
    objectMeta:ObjectMetaView;
    rules: Array<PolicyRuleDto>;
}