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
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalico
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalico {
    /**
     * 
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalico
     */
    cidr: number;
    /**
     * 
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalico
     */
    mtu: number;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalico
     */
    subnet: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalicoFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalico {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalicoFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalicoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalico {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cidr': json['cidr'],
        'mtu': json['mtu'],
        'subnet': json['subnet'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalicoToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterCalico | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cidr': value.cidr,
        'mtu': value.mtu,
        'subnet': value.subnet,
    };
}


