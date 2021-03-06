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
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusRelease,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusReleaseFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusReleaseFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusReleaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatus
 */
export interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatus {
    /**
     * AppVersion is the value of the AppVersion field in the Chart.yaml of the deployed app. This is an optional field with the version of the component being deployed. e.g. 0.21.0. https://helm.sh/docs/topics/charts/#the-chartyaml-file
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatus
     */
    appVersion: string;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusRelease}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatus
     */
    release: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusRelease;
    /**
     * Version is the value of the Version field in the Chart.yaml of the deployed app. e.g. 1.0.0.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatus
     */
    version: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatus {
    return ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appVersion': json['appVersion'],
        'release': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusReleaseFromJSON(json['release']),
        'version': json['version'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appVersion': value.appVersion,
        'release': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppStatusReleaseToJSON(value.release),
        'version': value.version,
    };
}


