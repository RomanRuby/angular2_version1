export class Role {
    typeMeta: TypeMeta;
    objectMeta: ObjectMeta;
    policyRules: Array<PolicyRule>;

    constructor(typeMeta: TypeMeta,
                objectMeta: ObjectMeta,
                policyRules: Array<PolicyRule>) {
        this.typeMeta = typeMeta;
        this.objectMeta = objectMeta;
        this.policyRules = policyRules;
    }
}

export class ResponseRole {
    metaData: MetaDataMeta;
    items: Array<ItemsResponse>;

    constructor() {
    }
}
export class ItemsResponse {
    metaData: MetaData;
    responseRule: Array<Rules>;
}
export class Rules {
    apiGroups: Array<string>;
    resources: Array<string>;
    verbs: Array<string>;
}
export class MetaDataMeta {

    selfLink: string;
    resourceVersion: number;

}
export class MetaData {
    name: string;
    selfLink: string;
    resourceVersion: number;
    uid: string;
    creationTimestamp: string;
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

export class RoleBinding {
    typeMeta: TypeMeta;
    objectMeta: ObjectMeta;
    policyRules: Array<Subject>;
    roleRef: RoleRef;
}

export class RoleRef {
    apiGroup: string;
    kind: string;
    name: string;

    constructor() {
    }
}
export class DeleteCollectionDto {
    nameUrl: string;
    kind: string;
    apiVersion: string;
    name: string;
    namespace: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    preconditions?: string;
    propagationPolicy?: string;
    kindList: string;
    namespaceList: string;

}
export class Subject {
    apiGroup: string;
    kind: string;
    name: string;
    namespace: string;

    constructor() {
    }
}

export class DeleteResult {
    deleteOption: DeleteOptions;
    name: string;

    constructor() {
    }
}

export class ListDto {
    kind: string;
    namespace: string;
    apiVersion: string;

    constructor() {
    }
}
export class TypeMeta {
    kind: string;
    apiVersion: string;

    constructor(kind: string, apiVersion: string) {
        this.kind = kind;
        this.apiVersion = apiVersion;
    }
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

class UID {
    uid?: string;
}

export class PolicyRule {
    verbs: Array<string>;
    apiGroups: Array<string>;
    resources: Array<string>;
    resourceNames: Array<string>;
    nonResourceURLs: Array<string>;

    constructor(verbs: Array<string>,
                apiGroups: Array<string>,
                resources: Array<string>,
                resourceNames: Array<string>,
                nonResourceURLs: Array<string>) {

        this.verbs = verbs;
        this.apiGroups = apiGroups;
        this.resources = resources;
        this.resourceNames = resourceNames;
        this.nonResourceURLs = nonResourceURLs;
    }
}
export class PolicyRuleDto {
    verbs: string;
    apiGroups: string;
    resources: string;
    resourceNames: string;
    nonResourceURLs: string;
}
export class ListOptions {
    typeMeta: TypeMeta;
    labelSelector?: string;
    fieldSelector?: string;
    includeUninitialized?: boolean;
    watch?: boolean;
    resourceVersion?: string;
    timeoutSeconds?: number;

    setTypeMeta(typeMeta: TypeMeta) {
        this.typeMeta = typeMeta;
    }
}
export class DeleteOptions {
    typeMeta: TypeMeta;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    preconditions?: string;
    propagationPolicy?: string;

    constructor(typeMeta: TypeMeta,
                gracePeriodSeconds?: number,
                orphanDependents?: boolean,
                preconditions?: string,
                propagationPolicy?: string) {
        this.gracePeriodSeconds = gracePeriodSeconds;
        this.orphanDependents = orphanDependents;
        this.preconditions = preconditions;
        this.propagationPolicy = propagationPolicy;
    }

}
export class DeleteOptionsDto {
    kind: string;
    apiVersion: string;
    name: string;
    namespace: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    preconditions?: string;
    propagationPolicy?: string;


}
export class PatchType {
    patchType: string;
    data: string;
    subresources: string;

    constructor(patchType: string,
                data: string,
                subresources: string) {
        this.patchType = patchType;
        this.data = data;
        this.subresources = subresources;
    }
}
export class PatchTypeDto {
    namespace: string;
    patchType: string;
    name: string;
    data: string;
    subresources: string;
}
export class GetOptions {
    typeMeta: TypeMeta;
    resourceVersion: string;
    includeUninitialized: boolean;

    constructor(typeMeta: TypeMeta,
                resourceVersion: string,
                includeUninitialized: boolean) {
        this.typeMeta = typeMeta;
        this.resourceVersion = resourceVersion;
        this.includeUninitialized = includeUninitialized;
    }
}
export class GetOptionsDto {
    namespace: string;
    nameUrl: string;
    kind: string;
    apiVersion: string;
    resourceVersion: string;
    includeUninitialized: boolean;
}