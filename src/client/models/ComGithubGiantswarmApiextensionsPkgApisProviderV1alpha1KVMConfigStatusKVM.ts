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
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVM
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVM {
    /**
     * NodeIndexes is a map from nodeID -> nodeIndex. This is used to create deterministic iSCSI initiator names.
     * @type {{ [key: string]: number; }}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVM
     */
    nodeIndexes: { [key: string]: number; };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVMFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVM {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVMFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVMFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVM {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nodeIndexes': json['nodeIndexes'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVMToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigStatusKVM | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nodeIndexes': value.nodeIndexes,
    };
}


