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
 * AWSConfigSpecAWSAPIELB deprecated since aws-operator v12 resources.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELB
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELB {
    /**
     * 
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELB
     */
    idleTimeoutSeconds: number;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELBFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELB {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELBFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELBFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELB {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'idleTimeoutSeconds': json['idleTimeoutSeconds'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELBToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELB | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'idleTimeoutSeconds': value.idleTimeoutSeconds,
    };
}


