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
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry {
    /**
     * Domain is the domain of the registry to be used for pulling core component images.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry
     */
    domain: string;
    /**
     * Pull progress deadline is a string representing a duration to be used as a deadline for pulling images.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry
     */
    pullProgressDeadline: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistryFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistryFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domain': json['domain'],
        'pullProgressDeadline': json['pullProgressDeadline'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistryToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domain': value.domain,
        'pullProgressDeadline': value.pullProgressDeadline,
    };
}


