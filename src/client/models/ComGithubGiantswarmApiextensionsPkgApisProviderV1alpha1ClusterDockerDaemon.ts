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
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemon
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemon {
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemon
     */
    cidr: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemonFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemon {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemonFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemonFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cidr': json['cidr'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemonToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterDockerDaemon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cidr': value.cidr,
    };
}


