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
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfig,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigList
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfig>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigList
     */
    items: Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfig>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigList
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigListFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigList {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigListFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigListToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


