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
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorage
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorage {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorage
     */
    data: { [key: string]: string; };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorageFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorage {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorageFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': json['data'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorageToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1StorageConfigSpecStorage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
    };
}


