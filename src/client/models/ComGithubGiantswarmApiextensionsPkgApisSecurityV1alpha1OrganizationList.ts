/* tslint:disable */
/* eslint-disable */
/**
 * giantswarm-cp-client
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1Organization,
    ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationList
 */
export interface ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1Organization>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationList
     */
    items: Array<ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1Organization>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationList
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationListFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationList {
    return ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationListFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationListToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisSecurityV1alpha1OrganizationToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


