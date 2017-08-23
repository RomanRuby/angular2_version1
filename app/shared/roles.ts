export class Role {
    typeMeta: TypeMeta;
    objectMeta: ObjectMeta;
    policyRules: Array<PolicyRule>;
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
    nameUrl:string;
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
    deleteOption:DeleteOptions;
    name:string;

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
    patchType: string
}
export class GetOptions {
    typeMeta: TypeMeta;
}