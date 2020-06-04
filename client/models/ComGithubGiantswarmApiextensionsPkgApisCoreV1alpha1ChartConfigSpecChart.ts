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
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMap,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMapFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMapFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMapToJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecSecret,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecSecretFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecSecretFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecSecretToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart {
    /**
     * Channel is the name of the Appr channel to reconcile against, e.g. 1-0-stable.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart
     */
    channel: string;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMap}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart
     */
    configMap: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMap;
    /**
     * Name is the name of the Helm chart to deploy, e.g. kubernetes-node-exporter.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart
     */
    name: string;
    /**
     * Namespace is the namespace where the Helm chart is to be deployed, e.g. giantswarm.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart
     */
    namespace: string;
    /**
     * Release is the name of the Helm release when the chart is deployed, e.g. node-exporter.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart
     */
    release: string;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecSecret}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart
     */
    secret: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecSecret;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMap}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart
     */
    userConfigMap: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMap;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChartFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChartFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChartFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channel': json['channel'],
        'configMap': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMapFromJSON(json['configMap']),
        'name': json['name'],
        'namespace': json['namespace'],
        'release': json['release'],
        'secret': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecSecretFromJSON(json['secret']),
        'userConfigMap': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMapFromJSON(json['userConfigMap']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChartToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecChart | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel': value.channel,
        'configMap': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMapToJSON(value.configMap),
        'name': value.name,
        'namespace': value.namespace,
        'release': value.release,
        'secret': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecSecretToJSON(value.secret),
        'userConfigMap': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigSpecConfigMapToJSON(value.userConfigMap),
    };
}


