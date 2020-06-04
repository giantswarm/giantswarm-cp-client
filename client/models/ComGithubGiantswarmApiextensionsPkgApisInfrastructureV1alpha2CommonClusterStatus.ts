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
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusConditionFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusConditionFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusConditionToJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusVersion,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusVersionFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusVersionFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusVersionToJSON,
} from './';

/**
 * CommonClusterStatus is shared type to contain provider independent cluster status information.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatus
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatus {
    /**
     * One or several conditions that are currently applicable to the cluster.
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatus
     */
    conditions?: Array<ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition>;
    /**
     * Identifier of the cluster.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatus
     */
    id?: string;
    /**
     * Release versions the cluster used so far.
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusVersion>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatus
     */
    versions?: Array<ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusVersion>;
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatus {
    return ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusConditionFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'versions': !exists(json, 'versions') ? undefined : ((json['versions'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusVersionFromJSON)),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusConditionToJSON)),
        'id': value.id,
        'versions': value.versions === undefined ? undefined : ((value.versions as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusVersionToJSON)),
    };
}


