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
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpec
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpec {
    /**
     * Configures which AWS availability zones to use by master nodes, as a list of availability zone names like e. g. `eu-central-1c`. We support either 1 or 3 availability zones.
     * @type {Array<string>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpec
     */
    availabilityZones?: Array<string>;
    /**
     * EC2 instance type identifier to use for the master node(s).
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpec
     */
    instanceType?: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpecFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpec {
    return ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpecFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availabilityZones': !exists(json, 'availabilityZones') ? undefined : json['availabilityZones'],
        'instanceType': !exists(json, 'instanceType') ? undefined : json['instanceType'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpecToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSControlPlaneSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availabilityZones': value.availabilityZones,
        'instanceType': value.instanceType,
    };
}


