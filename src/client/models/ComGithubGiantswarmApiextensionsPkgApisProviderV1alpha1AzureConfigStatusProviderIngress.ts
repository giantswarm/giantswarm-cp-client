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
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressLoadBalancer,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressLoadBalancerFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressLoadBalancerFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressLoadBalancerToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngress
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngress {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressLoadBalancer}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngress
     */
    loadBalancer: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressLoadBalancer;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngress {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loadBalancer': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressLoadBalancerFromJSON(json['loadBalancer']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loadBalancer': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigStatusProviderIngressLoadBalancerToJSON(value.loadBalancer),
    };
}


