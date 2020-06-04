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
import { ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesAPI, ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesDNS, ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController, ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesKubelet, ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesNetworkSetup, ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesSSH } from './';
/**
 *
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes {
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesAPI}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes
     */
    api: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesAPI;
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes
     */
    cloudProvider: string;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesDNS}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes
     */
    dns: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesDNS;
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes
     */
    domain: string;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes
     */
    ingressController: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesIngressController;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesKubelet}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes
     */
    kubelet: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesKubelet;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesNetworkSetup}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes
     */
    networkSetup: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesNetworkSetup;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesSSH}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes
     */
    ssh: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesSSH;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes;
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes;
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetesToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1ClusterKubernetes.d.ts.map