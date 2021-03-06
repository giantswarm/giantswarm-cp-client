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
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpec,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfig
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfig
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfig
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfig
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpec}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfig
     */
    spec: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpec;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfig {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecFromJSON(json['spec']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfig | null): any {
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
        'spec': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecToJSON(value.spec),
    };
}


