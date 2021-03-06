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
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec
 */
export interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec
     */
    config: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfig;
    /**
     * Name is the name of the Helm chart to be deployed. e.g. kubernetes-prometheus
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec
     */
    name: string;
    /**
     * Namespace is the namespace where the chart should be deployed. e.g. monitoring
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec
     */
    namespace: string;
    /**
     * TarballURL is the URL for the Helm chart tarball to be deployed. e.g. https://example.com/path/to/prom-1-0-0.tgz
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec
     */
    tarballURL: string;
    /**
     * Version is the version of the chart that should be deployed. e.g. 1.0.0
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec
     */
    version: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec {
    return ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigFromJSON(json['config']),
        'name': json['name'],
        'namespace': json['namespace'],
        'tarballURL': json['tarballURL'],
        'version': json['version'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigToJSON(value.config),
        'name': value.name,
        'namespace': value.namespace,
        'tarballURL': value.tarballURL,
        'version': value.version,
    };
}


