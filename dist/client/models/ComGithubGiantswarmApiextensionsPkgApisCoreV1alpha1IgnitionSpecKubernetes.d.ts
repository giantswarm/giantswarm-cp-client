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
import { ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesAPI, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNS, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesKubelet, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC } from './';
/**
 *
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes {
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesAPI}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes
     */
    api: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesAPI;
    /**
     * CloudProvider is the provider upon which the cluster is running. It is passed to API server as a flag.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes
     */
    cloudProvider: string;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNS}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes
     */
    dns: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesDNS;
    /**
     * Domain is the domain used for services running in the cluster. Usually this is "cluster.local".
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes
     */
    domain: string;
    /**
     * IPRange is the range of IPs used for pod networking.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes
     */
    ipRange: string;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesKubelet}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes
     */
    kubelet: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesKubelet;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes
     */
    oidc: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecOIDC;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetesToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes.d.ts.map