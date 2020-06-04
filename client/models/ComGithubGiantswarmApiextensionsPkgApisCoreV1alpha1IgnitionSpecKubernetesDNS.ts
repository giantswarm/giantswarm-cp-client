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
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNS
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNS {
    /**
     * IP is the IP of the in-cluster DNS service. Usually this is the same as the API server IP with the final component replaced with .10.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNS
     */
    ip: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNSFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNS {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNSFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNSFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNS {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ip': json['ip'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNSToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNS | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ip': value.ip,
    };
}


