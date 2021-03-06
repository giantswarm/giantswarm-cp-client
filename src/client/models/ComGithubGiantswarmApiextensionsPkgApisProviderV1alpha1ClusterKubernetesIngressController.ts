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
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerDocker,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerDockerFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerDockerFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerDockerToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerDocker}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController
     */
    docker: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerDocker;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController
     */
    domain: string;
    /**
     * 
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController
     */
    insecurePort: number;
    /**
     * 
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController
     */
    securePort: number;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController
     */
    wildcardDomain: string;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'docker': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerDockerFromJSON(json['docker']),
        'domain': json['domain'],
        'insecurePort': json['insecurePort'],
        'securePort': json['securePort'],
        'wildcardDomain': json['wildcardDomain'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'docker': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressControllerDockerToJSON(value.docker),
        'domain': value.domain,
        'insecurePort': value.insecurePort,
        'securePort': value.securePort,
        'wildcardDomain': value.wildcardDomain,
    };
}


