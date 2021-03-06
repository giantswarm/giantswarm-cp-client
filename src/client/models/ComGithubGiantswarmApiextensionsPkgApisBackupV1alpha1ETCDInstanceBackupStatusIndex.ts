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
    ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus,
    ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndex
 */
export interface ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndex {
    /**
     * Name of the tenant cluster or 'Control Plane'
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndex
     */
    name: string;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndex
     */
    v2: ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndex
     */
    v3: ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus;
}

export function ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndexFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndex {
    return ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndexFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndexFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndex {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'v2': ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusFromJSON(json['v2']),
        'v3': ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusFromJSON(json['v3']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndexToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusIndex | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'v2': ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusToJSON(value.v2),
        'v3': ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusToJSON(value.v3),
    };
}


