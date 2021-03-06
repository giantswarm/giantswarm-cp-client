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
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachineFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachineFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachineToJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolScaling,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolScalingFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolScalingFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolScalingToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePool
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePool {
    /**
     * User-friendly name or description of the purpose of the node pool.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePool
     */
    description: string;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePool
     */
    machine: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolScaling}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePool
     */
    scaling: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolScaling;
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePool {
    return ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePool {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'machine': ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachineFromJSON(json['machine']),
        'scaling': ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolScalingFromJSON(json['scaling']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePool | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'machine': ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachineToJSON(value.machine),
        'scaling': ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolScalingToJSON(value.scaling),
    };
}


