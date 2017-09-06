import { TypeMeta} from "./common";

export class Role {
    typeMeta: TypeMeta;
    metadata: ObjectMetaView;
    rules: Array<PolicyRule>;

    constructor(typeMeta: TypeMeta,
                metadata: ObjectMetaView,
                rules: Array<PolicyRule>) {
        this.typeMeta = typeMeta;
        this.metadata = metadata;
        this.rules = rules;
    }
}

export class RoleResponse {
    metadata: ObjectMetaView;
    rules: Array<PolicyRule>;

}
export class RoleResponses {
    metadata: MetaD;
    items: Array<RoleResponse>;

}
export class RoleDto {
    kind: string;
    apiVersion: string;
    name: string;
    generation: any;
    deletionTimestamp: any;
    deletionGracePeriodSeconds: any;
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

    constructor(verbs: string,
                apiGroups?: string,
                resources?: string,
                resourceNames?: string) {
        this.verbs = verbs;
        this.apiGroups = apiGroups;
        this.resources = resources;
        this.resourceNames = resourceNames;
    }
}

export class PolicyRuleDtoWithDeleteFunction {
    verbs: string;
    apiGroups: string;
    resources: string;
    resourceNames: string;
    isDelete:boolean;

    constructor(verbs: string,
                isDelete:boolean,
                apiGroups?: string,
                resources?: string,
                resourceNames?: string,
                ) {
        this.verbs = verbs;
        this.apiGroups = apiGroups;
        this.resources = resources;
        this.resourceNames = resourceNames;
        this.isDelete = isDelete;
    }
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
    generation: number;
    selfLink: string;
    uid: string;
    resourceVersion: string;
    namespace: string;
    finalizers: Array<string>;
    clusterName: string;
    creationTimestamp: any;
    deletionTimestamp: any;
    deletionGracePeriodSeconds: any;

    constructor(name: string,
                namespace: string,
                generateName?: string,
                deletionGracePeriodSeconds?: any,
                deletionTimestamp?: any,
                selfLink?: string,
                uid?: string,
                resourceVersion?: string,
                finalizers?: Array<string>,
                clusterName?: string,
                creationTimestamp?: any,
                generation?:number
              ) {
        this.name = name;
        this.namespace = namespace;
        this.deletionTimestamp = deletionTimestamp;
        this.deletionGracePeriodSeconds = deletionGracePeriodSeconds;
        this.selfLink = selfLink;
        this.uid = uid;
        this.resourceVersion = resourceVersion;
        this.finalizers = finalizers;
        this.clusterName = clusterName;
        this.generation = generation;
        this.creationTimestamp = creationTimestamp;

        this.generateName = generateName;

    }
}

export class RoleWithAllOptionsView {
    typeMeta: TypeMeta;
    metadata: ObjectMetaView;
    rules: Array<PolicyRule>;
}
export class RoleWithAllOptionsViewDto {
    typeMeta: Array<TypeMeta>;
    metadata: Array<ObjectMetaView>;
    rules: Array<PolicyRuleDto>;

    constructor() {
    }
}

