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
    ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool,
    ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * AzureToolList is the type returned when listing AzureToolList resources.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList
 */
export interface ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList
     */
    items: Array<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolListFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList {
    return ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolListFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolListToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


