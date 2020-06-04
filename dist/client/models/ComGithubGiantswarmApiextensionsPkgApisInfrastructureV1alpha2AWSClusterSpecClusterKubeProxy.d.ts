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
/**
 * AWSClusterSpecClusterKubeProxy describes values passed to the kube-proxy running in a tenant cluster.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy {
    /**
     * Maximum number of NAT connections to track per CPU core (0 for default). Passed to kube-proxy as --conntrack-max-per-core.
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy
     */
    conntrackMaxPerCore?: number;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxyFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxyToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy.d.ts.map