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
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigConfigMap,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigConfigMapFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigConfigMapFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigConfigMapToJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecretFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecretFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecretToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig
 */
export interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigConfigMap}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig
     */
    configMap: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigConfigMap;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig
     */
    secret: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret;
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig {
    return ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configMap': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigConfigMapFromJSON(json['configMap']),
        'secret': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecretFromJSON(json['secret']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configMap': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigConfigMapToJSON(value.configMap),
        'secret': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecretToJSON(value.secret),
    };
}


