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
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeDocker,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeDockerFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeDockerFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeDockerToJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeSpec,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeSpecFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeSpecFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeSpecToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridge
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridge {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeDocker}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridge
     */
    docker: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeDocker;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeSpec}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridge
     */
    spec: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeSpec;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridge {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'docker': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeDockerFromJSON(json['docker']),
        'spec': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeSpecFromJSON(json['spec']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'docker': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeDockerToJSON(value.docker),
        'spec': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1FlannelConfigSpecBridgeSpecToJSON(value.spec),
    };
}


