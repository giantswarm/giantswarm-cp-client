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
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC {
    /**
     * The client ID for the OpenID Connect client, must be set if IssuerURL is set.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC
     */
    clientID: string;
    /**
     * Enabled indicates that the OIDC settings should be applied when true.
     * @type {boolean}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC
     */
    enabled: boolean;
    /**
     * If provided, the name of a custom OpenID Connect claim for specifying user groups. The claim value is expected to be a string or JSON encoded array of strings.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC
     */
    groupsClaim: string;
    /**
     * If provided, all groups will be prefixed with this value to prevent conflicts with other authentication strategies.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC
     */
    groupsPrefix: string;
    /**
     * The URL of the OpenID issuer, only HTTPS scheme will be accepted. If set, it will be used to verify the OIDC JSON Web Token (JWT).
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC
     */
    issuerUrl: string;
    /**
     * The OpenID claim to use as the user name. Note that claims other than the default ('sub') is not guaranteed to be unique and immutable.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC
     */
    usernameClaim: string;
    /**
     * If provided, all usernames will be prefixed with this value. If not provided, username claims other than 'email' are prefixed by the issuer URL to avoid clashes. To skip any prefixing, provide the value '-'.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC
     */
    usernamePrefix: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDCFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDCFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDCFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientID': json['clientID'],
        'enabled': json['enabled'],
        'groupsClaim': json['groupsClaim'],
        'groupsPrefix': json['groupsPrefix'],
        'issuerUrl': json['issuerUrl'],
        'usernameClaim': json['usernameClaim'],
        'usernamePrefix': json['usernamePrefix'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDCToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientID': value.clientID,
        'enabled': value.enabled,
        'groupsClaim': value.groupsClaim,
        'groupsPrefix': value.groupsPrefix,
        'issuerUrl': value.issuerUrl,
        'usernameClaim': value.usernameClaim,
        'usernamePrefix': value.usernamePrefix,
    };
}


