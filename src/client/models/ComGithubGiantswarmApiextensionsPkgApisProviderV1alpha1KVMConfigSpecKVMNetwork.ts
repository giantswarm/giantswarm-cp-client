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
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFlannel,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFlannelFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFlannelFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFlannelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetwork
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetwork {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFlannel}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetwork
     */
    flannel: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFlannel;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetwork {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetwork {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'flannel': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFlannelFromJSON(json['flannel']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetwork | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'flannel': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFlannelToJSON(value.flannel),
    };
}


