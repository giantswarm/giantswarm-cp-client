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
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1App,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppList
 */
export interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1App>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppList
     */
    items: Array<ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1App>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppList
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppListFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppList {
    return ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppListFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppListToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


