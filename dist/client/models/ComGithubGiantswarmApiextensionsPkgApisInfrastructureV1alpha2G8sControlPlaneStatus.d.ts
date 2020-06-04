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
 * G8sControlPlaneStatus defines the observed state of G8sControlPlane.
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatus
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatus {
    /**
     * Total number of fully running and ready control plane machines.
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatus
     */
    readyReplicas?: number;
    /**
     * Total number of non-terminated machines targeted by this control plane (their labels match the selector).
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatus
     */
    replicas?: number;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatusFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatus;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatus;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatusToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatus | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2G8sControlPlaneStatus.d.ts.map