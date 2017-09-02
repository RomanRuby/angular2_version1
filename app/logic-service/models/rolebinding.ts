import {ObjectMeta, RoleRef} from "./role";
import {TypeMeta} from "./common";


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

export class SubjectDto {
    apiGroup: string;
    kind: string;
    name: string;
    namespace: string;


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

export class ResponseRoleBinding {
    typeMeta: TypeMeta;
    metadate: MetaData;
    subjects: Array<Subject>;
    roleRef: RoleRef;

    constructor() {
    }
}

export class MetaData {
    name: string;
    selfLink: string;
    resourceVersion: number;
    uid: string;
    creationTimestamp: string;
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
export class ResponsesRoleBindingList {
    items: ResponseRoleBinding;
    metadata: MetaDataMeta;
}

export class MetaDataMeta {

    selfLink: string;
    resourceVersion: number;
}