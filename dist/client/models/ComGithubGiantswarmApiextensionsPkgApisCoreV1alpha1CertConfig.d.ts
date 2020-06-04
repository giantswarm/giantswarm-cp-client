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
import { ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfigSpec, IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './';
/**
 *
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig
     */
    kind?: string;
    /**
     *
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfigSpec}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig
     */
    spec: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfigSpec;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfigFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfigToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1CertConfig.d.ts.map