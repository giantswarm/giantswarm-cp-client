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
 * StatusClusterCondition expresses the conditions in which a guest cluster may is.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterCondition
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterCondition
     */
    lastTransitionTime?: Date;
    /**
     * Status may be True, False or Unknown.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterCondition
     */
    status: string;
    /**
     * Type may be Creating, Created, Scaling, Scaled, Draining, Drained, Updating, Updated, Deleting, Deleted.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterCondition
     */
    type: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterConditionFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterCondition {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterConditionFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'status': json['status'],
        'type': json['type'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterConditionToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'status': value.status,
        'type': value.type,
    };
}


