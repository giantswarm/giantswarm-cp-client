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
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundle
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundle {
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundle
     */
    version: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundleFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundle {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundleFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundleToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1KVMClusterConfigSpecVersionBundle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
    };
}


