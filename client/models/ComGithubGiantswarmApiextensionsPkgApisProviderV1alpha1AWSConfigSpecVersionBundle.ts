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
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundle
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundle {
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundle
     */
    version: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundleFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundle {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundleFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundleToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecVersionBundle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
    };
}


