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
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMDocker,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMDockerFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMDockerFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMDockerToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMDocker}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM
     */
    docker: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMDocker;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM
     */
    storageType: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'docker': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMDockerFromJSON(json['docker']),
        'storageType': json['storageType'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'docker': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMDockerToJSON(value.docker),
        'storageType': value.storageType,
    };
}


