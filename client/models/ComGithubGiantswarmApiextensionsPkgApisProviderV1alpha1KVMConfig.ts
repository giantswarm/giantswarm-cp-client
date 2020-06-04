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
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpec,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecToJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatus,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpec}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig
     */
    spec: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpec;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatus}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig
     */
    status: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatus;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecFromJSON(json['spec']),
        'status': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusFromJSON(json['status']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfig | null): any {
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
        'spec': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecToJSON(value.spec),
        'status': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusToJSON(value.status),
    };
}


