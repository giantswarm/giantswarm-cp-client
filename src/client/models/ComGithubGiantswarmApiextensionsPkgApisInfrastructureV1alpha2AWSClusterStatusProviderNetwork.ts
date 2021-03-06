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
 * AWSClusterStatusProviderNetwork holds network details.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetwork
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetwork {
    /**
     * IPv4 address block used by the tenant cluster nodes, in CIDR notation.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetwork
     */
    cidr?: string;
    /**
     * Identifier of the AWS Virtual Private Cloud (VPC) of the tenant cluster, e.g. `vpc-1234567890abcdef0`.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetwork
     */
    vpcID?: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetworkFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetwork {
    return ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetworkFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetwork {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cidr': !exists(json, 'cidr') ? undefined : json['cidr'],
        'vpcID': !exists(json, 'vpcID') ? undefined : json['vpcID'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetworkToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterStatusProviderNetwork | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cidr': value.cidr,
        'vpcID': value.vpcID,
    };
}


