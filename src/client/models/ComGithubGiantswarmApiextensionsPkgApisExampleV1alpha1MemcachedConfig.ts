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
    ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigSpec,
    ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigSpecFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigSpecFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig
 */
export interface ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigSpec}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig
     */
    spec: ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigSpec;
}

export function ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig {
    return ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigSpecFromJSON(json['spec']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfigSpecToJSON(value.spec),
    };
}


