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
/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDocker
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDocker {
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDocker
     */
    image: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDockerFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDocker {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDockerFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDockerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDocker {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': json['image'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDockerToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterDocker | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': value.image,
    };
}


