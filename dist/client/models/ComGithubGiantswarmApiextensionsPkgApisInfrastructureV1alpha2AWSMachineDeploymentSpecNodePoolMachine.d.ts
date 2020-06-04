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
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine {
    /**
     * Size of the volume reserved for Docker images and overlay file systems of Docker containers. Unit: 1 GB = 1,000,000,000 Bytes.
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine
     */
    dockerVolumeSizeGB: number;
    /**
     * Size of the volume reserved for the kubelet, which can be used by Pods via volumes of type EmptyDir. Unit: 1 GB = 1,000,000,000 Bytes.
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine
     */
    kubeletVolumeSizeGB: number;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachineFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachineFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachineToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecNodePoolMachine.d.ts.map