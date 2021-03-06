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
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELB,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELBFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELBFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELBToJSON,
} from './';

/**
 * AWSConfigSpecAWSAPI deprecated since aws-operator v12 resources.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPI
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPI {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELB}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPI
     */
    elb: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELB;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPI
     */
    hostedZones: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPI {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPI {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'elb': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELBFromJSON(json['elb']),
        'hostedZones': json['hostedZones'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPI | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'elb': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSAPIELBToJSON(value.elb),
        'hostedZones': value.hostedZones,
    };
}


