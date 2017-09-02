import {PolicyRuleDto, PolicyRule} from "./role";
export class MetaResponse {
    creationTimestamp: string;
    name: string;
    resourceVersion: string;
    selfLink: string;
    uid: UID;
}

class UID {
    uid?: string;
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
        this.apiVersion = apiVersion;

    }
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
                preconditions?: string) {
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
export class Options {
    name: string;
    generateName: string;
    namespace: string;
    selfLink: string;
    uid: string;
    resourceVersion: string;
    generation:number;
    creationTimestamp:number;
    deletionTimestamp:number;
    deletionGracePeriodSeconds:number;
    finalizers:Array<string>;
    clusterName:string;
    rules:Array<PolicyRule>;

}