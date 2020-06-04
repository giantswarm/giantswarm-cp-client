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
import { ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterDNS, ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy, ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterOIDC } from './';
/**
 * AWSClusterSpecCluster provides cluster specification details.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster {
    /**
     * User-friendly description that should explain the purpose of the cluster to humans.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster
     */
    description: string;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterDNS}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster
     */
    dns: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterDNS;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster
     */
    kubeProxy?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterKubeProxy;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterOIDC}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster
     */
    oidc?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterOIDC;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecClusterToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSClusterSpecCluster.d.ts.map