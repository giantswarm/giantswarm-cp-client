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
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroup
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroup {
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroup
     */
    name: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroupFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroup {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroupFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroupToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigStatusAWSAutoScalingGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}


