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
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigContext,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigContextFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigContextFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigContextToJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecretFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecretFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecretToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig
 */
export interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigContext}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig
     */
    context: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigContext;
    /**
     * InCluster is a flag for whether to use InCluster credentials. When true the context name and secret should not be set.
     * @type {boolean}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig
     */
    inCluster: boolean;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig
     */
    secret: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret;
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig {
    return ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'context': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigContextFromJSON(json['context']),
        'inCluster': json['inCluster'],
        'secret': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecretFromJSON(json['secret']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'context': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigContextToJSON(value.context),
        'inCluster': value.inCluster,
        'secret': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecretToJSON(value.secret),
    };
}


