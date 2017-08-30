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
export class MetaD {
    resourceVersion:string;
    selfLink:string;
}
export class RoleResponses {
    metadata:MetaD;
    roleResponse:RoleResponse;

}
export class MetaResponse {
    creationTimestamp: string;
    name: string;
    resourceVersion: string;
    selfLink: string;
    uid: UID;



}
export class RoleBindingDto {
    kind: string;
    kindMeta: string;
    apiVersion: string;
    apiGroupRef: string;
    name: string;
    generateName?: string;
    namespace: string;
    subjectRules: Array<Subject>;
    apiGroup: string;
    kindRef: string;
    nameRef: string;


}

export class RoleBinding {
    typeMeta: TypeMeta;

    metadata: ObjectMeta;
    subjects: Array<Subject>;
    roleRef: RoleRef;

    constructor(typeMeta: TypeMeta,
                metadata: ObjectMeta,
                subjects: Array<Subject>, roleRef: RoleRef) {
        this.typeMeta = typeMeta;
        this.metadata = metadata;
        this.subjects = subjects;
        this.roleRef = roleRef;
    }
}


export class ResponseRole {
    metaData: MetaDataMeta;
    items: Array<ItemsResponse>;
    constructor() {
    }
}

export class ResponseRoleBinding {
    metadate: MetaData;
    subjects: Array<Subject>;
    roleRef: RoleRef;

    constructor() {
    }
}
export class ResponsesRoleBindingList {
   items:ResponseRoleBinding;
   metadata:MetaDataMeta;
}
export class MetaDataResponse {
    Kind: string;
    APIVersion: string;
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
    apiVersionList: string;

}
export class Subject {
    apiGroup: string;
    kind: string;
    name: string;
    namespace: string;

    constructor(apiGroup: string,
                kind: string,
                name: string,
                namespace: string) {
        this.apiGroup = apiGroup;
        this.kind = kind;
        this.name = name;
        this.namespace = namespace;
    }
}

export class DeleteResult {
    deleteOption: DeleteOptions;
    name: string;

    constructor() {
    }
}
export class DeleteCol {
    deleteOption: DeleteOptions;
    list: ListOptions;

    constructor(deleteOption: DeleteOptions,
                list: ListOptions) {
        this.deleteOption = deleteOption;
        this.list = list;
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
    apiVersion?: string;

    constructor(kind: string, apiVersion?: string) {
        this.kind = kind;
        if (apiVersion != null) {
            this.apiVersion = apiVersion;
        }
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

    constructor(typeMeta: TypeMeta,
                gracePeriodSeconds?: number,
                orphanDependents?: boolean,
                preconditions?: string
               ) {
        this.gracePeriodSeconds = gracePeriodSeconds;
        this.orphanDependents = orphanDependents;
        this.preconditions = preconditions;
        this.typeMeta = typeMeta;

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
    name: string;
    nameUrl: string;
    kind: string;
    apiVersion: string;
    resourceVersion: string;
    includeUninitialized: boolean;
}