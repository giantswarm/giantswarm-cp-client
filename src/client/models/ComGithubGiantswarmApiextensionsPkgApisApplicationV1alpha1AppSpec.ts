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
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecConfig,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecConfigFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecConfigFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecConfigToJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigToJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfig,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec
 */
export interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec {
    /**
     * Catalog is the name of the app catalog this app belongs to. e.g. giantswarm
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec
     */
    catalog: string;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecConfig}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec
     */
    config: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecConfig;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec
     */
    kubeConfig: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfig;
    /**
     * Name is the name of the app to be deployed. e.g. kubernetes-prometheus
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec
     */
    name: string;
    /**
     * Namespace is the namespace where the app should be deployed. e.g. monitoring
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec
     */
    namespace: string;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfig}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec
     */
    userConfig: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfig;
    /**
     * Version is the version of the app that should be deployed. e.g. 1.0.0
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec
     */
    version: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec {
    return ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'catalog': json['catalog'],
        'config': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecConfigFromJSON(json['config']),
        'kubeConfig': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigFromJSON(json['kubeConfig']),
        'name': json['name'],
        'namespace': json['namespace'],
        'userConfig': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigFromJSON(json['userConfig']),
        'version': json['version'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'catalog': value.catalog,
        'config': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecConfigToJSON(value.config),
        'kubeConfig': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigToJSON(value.kubeConfig),
        'name': value.name,
        'namespace': value.namespace,
        'userConfig': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigToJSON(value.userConfig),
        'version': value.version,
    };
}


