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
 * StatusClusterResourceCondition expresses the conditions in which an operatorkit resource may is.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceCondition
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceCondition
     */
    lastTransitionTime?: Date;
    /**
     * Status may be True, False or Unknown.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceCondition
     */
    status: string;
    /**
     * Type may be anything an operatorkit resource may define.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceCondition
     */
    type: string;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceConditionFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceCondition;
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceCondition;
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceConditionToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceCondition | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1StatusClusterResourceCondition.d.ts.map