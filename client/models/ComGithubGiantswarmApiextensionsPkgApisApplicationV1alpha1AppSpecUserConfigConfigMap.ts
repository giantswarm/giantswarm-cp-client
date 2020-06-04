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
 * @interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMap
 */
export interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMap {
    /**
     * Name is the name of the config map containing user values to apply, e.g. prometheus-user-values.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMap
     */
    name: string;
    /**
     * Namespace is the namespace of the user values config map on the control plane, e.g. 123ab.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMap
     */
    namespace: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMapFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMap {
    return ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMapFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMapFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMap {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMapToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecUserConfigConfigMap | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
    };
}


