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
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster {
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster
     */
    instanceType?: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMasterFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMasterFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMasterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'instanceType': !exists(json, 'instanceType') ? undefined : json['instanceType'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMasterToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'instanceType': value.instanceType,
    };
}


