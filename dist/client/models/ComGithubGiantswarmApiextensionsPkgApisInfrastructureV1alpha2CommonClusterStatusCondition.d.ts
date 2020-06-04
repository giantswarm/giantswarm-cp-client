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
 * CommonClusterStatusCondition explains the current condition(s) of the cluster.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition {
    /**
     * Condition string, e. g. `Creating`, `Created`, `Upgraded`.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition
     */
    condition: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition
     */
    lastTransitionTime: Date;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusConditionFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusConditionToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2CommonClusterStatusCondition.d.ts.map