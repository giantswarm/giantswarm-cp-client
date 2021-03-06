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
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusSecret,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusSecretFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusSecretFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusSecretToJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusVerification,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusVerificationFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusVerificationFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusVerificationToJSON,
} from './';

/**
 * IgnitionStatus holds the rendering result.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusSecret}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus
     */
    dataSecretName: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusSecret;
    /**
     * FailureMessage is a longer message indicating the reason rendering failed (if it did).
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus
     */
    failureMessage: string;
    /**
     * FailureReason is a short string indicating the reason rendering failed (if it did).
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus
     */
    failureReason: string;
    /**
     * Ready will be true when the referenced secret contains the rendered ignition and can be used for creating nodes.
     * @type {boolean}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus
     */
    ready: boolean;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusVerification}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus
     */
    verification: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusVerification;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataSecretName': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusSecretFromJSON(json['dataSecretName']),
        'failureMessage': json['failureMessage'],
        'failureReason': json['failureReason'],
        'ready': json['ready'],
        'verification': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusVerificationFromJSON(json['verification']),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataSecretName': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusSecretToJSON(value.dataSecretName),
        'failureMessage': value.failureMessage,
        'failureReason': value.failureReason,
        'ready': value.ready,
        'verification': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionStatusVerificationToJSON(value.verification),
    };
}


