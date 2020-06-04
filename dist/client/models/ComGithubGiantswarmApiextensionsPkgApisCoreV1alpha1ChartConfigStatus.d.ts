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
 *
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatus
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatus {
    /**
     * Reason is the description of the last status of helm release when the chart is not installed successfully, e.g. deploy resource already exists.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatus
     */
    reason?: string;
    /**
     * ReleaseStatus is the status of the Helm release when the chart is installed, e.g. DEPLOYED.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatus
     */
    releaseStatus: string;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatusFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatus;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatus;
export declare function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatusToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatus | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ChartConfigStatus.d.ts.map