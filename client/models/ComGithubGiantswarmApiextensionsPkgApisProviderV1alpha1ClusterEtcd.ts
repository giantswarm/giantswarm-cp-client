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
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcd
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcd {
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcd
     */
    altNames: string;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcd
     */
    domain: string;
    /**
     * 
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcd
     */
    port: number;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcd
     */
    prefix: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcdFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcd {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcdFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcd {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'altNames': json['altNames'],
        'domain': json['domain'],
        'port': json['port'],
        'prefix': json['prefix'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcdToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterEtcd | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'altNames': value.altNames,
        'domain': value.domain,
        'port': value.port,
        'prefix': value.prefix,
    };
}


