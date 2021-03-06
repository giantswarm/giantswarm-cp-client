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
 * DrainerConfigStatusCondition expresses a condition in which a node may is.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusCondition
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusCondition
     */
    lastHeartbeatTime: Date;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusCondition
     */
    lastTransitionTime: Date;
    /**
     * Status may be True, False or Unknown.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusCondition
     */
    status: string;
    /**
     * Type may be Pending, Ready, Draining, Drained.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusCondition
     */
    type: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusConditionFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusCondition {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusConditionFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastHeartbeatTime': (new Date(json['lastHeartbeatTime'])),
        'lastTransitionTime': (new Date(json['lastTransitionTime'])),
        'status': json['status'],
        'type': json['type'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusConditionToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1DrainerConfigStatusCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastHeartbeatTime': (value.lastHeartbeatTime.toISOString()),
        'lastTransitionTime': (value.lastTransitionTime.toISOString()),
        'status': value.status,
        'type': value.type,
    };
}


