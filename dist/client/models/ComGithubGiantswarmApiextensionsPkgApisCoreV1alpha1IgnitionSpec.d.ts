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
import { ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecCalico, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecDocker, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecEtcd, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtension, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecIngress, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry, ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecSSO } from './';
/**
 * IgnitionSpec is the interface which defines the input parameters for a newly rendered g8s ignition template.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec {
    /**
     * APIServerEncryptionKey is used in EncryptionConfiguration to encrypt Kubernetes secrets at rest.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    apiServerEncryptionKey: string;
    /**
     * BaseDomain is the base domain for all cluster services. For test installations, this may be in the form <clusterId>.k8s.<installation>.<region>.<provider>.gigantic.io.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    baseDomain: string;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecCalico}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    calico: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecCalico;
    /**
     * ClusterID is the name of the tenant cluster to be created.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    clusterID: string;
    /**
     * DisableEncryptionAtRest will disable secret encryption at rest when set to true.
     * @type {boolean}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    disableEncryptionAtRest: boolean;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecDocker}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    docker: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecDocker;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecEtcd}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    etcd: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecEtcd;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtension}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    extension: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecExtension;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecIngress}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    ingress: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecIngress;
    /**
     * IsMaster determines if the rendered ignition should contain master-specific configuration.
     * @type {boolean}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    isMaster: boolean;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    kubernetes: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecKubernetes;
    /**
     * Defines the provider which should be rendered.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    provider: string;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    registry: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecRegistry;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecSSO}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec
     */
    sso: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecSSO;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpecToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1IgnitionSpec.d.ts.map