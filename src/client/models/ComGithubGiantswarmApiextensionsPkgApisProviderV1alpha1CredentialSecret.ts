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
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret {
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret
     */
    namespace: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecretFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecretFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecretToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret | null): any {
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


