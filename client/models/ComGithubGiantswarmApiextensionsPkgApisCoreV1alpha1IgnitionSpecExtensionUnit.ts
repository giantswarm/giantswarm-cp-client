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
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitMetadata,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitMetadataFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitMetadataFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitMetadataToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnit
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnit {
    /**
     * Content is the string containing a systemd unit with optional go-template-style replacements.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnit
     */
    content: string;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitMetadata}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnit
     */
    metadata: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitMetadata;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnit {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': json['content'],
        'metadata': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitMetadataFromJSON(json['metadata']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'metadata': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtensionUnitMetadataToJSON(value.metadata),
    };
}


