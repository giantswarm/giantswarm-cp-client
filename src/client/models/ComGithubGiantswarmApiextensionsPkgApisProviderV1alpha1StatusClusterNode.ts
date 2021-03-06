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
 * StatusClusterNode holds information about a guest cluster node.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNode
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNode {
    /**
     * Labels contains the kubernetes labels for corresponding node.
     * @type {{ [key: string]: string; }}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNode
     */
    labels?: { [key: string]: string; };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNode
     */
    lastTransitionTime?: Date;
    /**
     * Name referrs to a tenant cluster node name.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNode
     */
    name: string;
    /**
     * Version referrs to the version used by the node as mandated by the provider operator.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNode
     */
    version: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNodeFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNode {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNodeFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'name': json['name'],
        'version': json['version'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNodeToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterNode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labels': value.labels,
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'name': value.name,
        'version': value.version,
    };
}


