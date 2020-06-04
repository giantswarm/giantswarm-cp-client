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
import { ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestCredentialSecret, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestWorker, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundle } from './';
/**
 *
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest {
    /**
     *
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    availabilityZones?: number;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestCredentialSecret}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    credentialSecret: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestCredentialSecret;
    /**
     * DNSZone for guest cluster is supplemented with host prefixes for specific services such as Kubernetes API or Etcd. In general this DNS Zone should start with "k8s" like for example "k8s.cluster.example.com.".
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    dnsZone: string;
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    id: string;
    /**
     *
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    masters?: Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestMaster>;
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    releaseVersion?: string;
    /**
     *
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundle>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    versionBundles?: Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundle>;
    /**
     *
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestWorker>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest
     */
    workers?: Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestWorker>;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuestToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AWSClusterConfigSpecGuest.d.ts.map