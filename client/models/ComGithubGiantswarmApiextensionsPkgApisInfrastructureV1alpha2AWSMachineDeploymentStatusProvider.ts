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
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderWorker,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderWorkerFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderWorkerFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderWorkerToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProvider
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProvider {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderWorker}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProvider
     */
    worker?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderWorker;
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProvider {
    return ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProvider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'worker': !exists(json, 'worker') ? undefined : ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderWorkerFromJSON(json['worker']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProvider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'worker': ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentStatusProviderWorkerToJSON(value.worker),
    };
}


