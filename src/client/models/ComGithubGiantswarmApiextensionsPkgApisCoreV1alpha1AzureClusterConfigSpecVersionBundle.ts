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
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundle
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundle {
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundle
     */
    version: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundleFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundle {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundleFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundleToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecVersionBundle | null): any {
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


