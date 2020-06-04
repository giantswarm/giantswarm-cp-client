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
import { ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfig, IoK8sApimachineryPkgApisMetaV1ListMeta } from './';
/**
 *
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList
     */
    apiVersion?: string;
    /**
     *
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfig>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList
     */
    items: Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfig>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList
     */
    kind?: string;
    /**
     *
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigListFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigListToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigList.d.ts.map