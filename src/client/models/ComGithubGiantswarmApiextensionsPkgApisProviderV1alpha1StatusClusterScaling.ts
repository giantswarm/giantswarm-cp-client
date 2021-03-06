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
 * StatusClusterScaling expresses the current status of desired number of worker nodes in guest cluster.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScaling
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScaling {
    /**
     * 
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScaling
     */
    desiredCapacity: number;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScalingFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScaling {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScalingFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScalingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScaling {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'desiredCapacity': json['desiredCapacity'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScalingToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterScaling | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'desiredCapacity': value.desiredCapacity,
    };
}


