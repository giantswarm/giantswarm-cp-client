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
 * AWSClusterSpecProviderCredentialSecret details how to chose the AWS IAM identity ARN to use with this cluster.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret {
    /**
     * Name of the provider credential resoure.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret
     */
    name: string;
    /**
     * Kubernetes namespace holding the provider credential.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret
     */
    namespace: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecretFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret {
    return ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecretFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecretToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecProviderCredentialSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
    };
}


