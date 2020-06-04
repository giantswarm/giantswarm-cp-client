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
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecretFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecretFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecretToJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderMaster,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderMasterFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderMasterFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderMasterToJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderPods,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderPodsFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderPodsFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderPodsToJSON,
} from './';

/**
 * AWSClusterSpecProvider holds some AWS details.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProvider
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProvider {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProvider
     */
    credentialSecret: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderMaster}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProvider
     */
    master?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderMaster;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderPods}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProvider
     */
    pods?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderPods;
    /**
     * AWS region the cluster is to be running in.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProvider
     */
    region: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProvider {
    return ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProvider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'credentialSecret': ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecretFromJSON(json['credentialSecret']),
        'master': !exists(json, 'master') ? undefined : ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderMasterFromJSON(json['master']),
        'pods': !exists(json, 'pods') ? undefined : ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderPodsFromJSON(json['pods']),
        'region': json['region'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProvider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'credentialSecret': ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecretToJSON(value.credentialSecret),
        'master': ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderMasterToJSON(value.master),
        'pods': ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderPodsToJSON(value.pods),
        'region': value.region,
    };
}


