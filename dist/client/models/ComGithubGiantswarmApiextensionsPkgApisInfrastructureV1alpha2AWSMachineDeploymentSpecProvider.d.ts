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
import { ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecInstanceDistribution, ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProviderWorker } from './';
/**
 *
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProvider
 */
export interface ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProvider {
    /**
     * Name(s) of the availability zone(s) to use for worker nodes. Using multiple availability zones results in higher resilience but can also result in higher cost due to network traffic between availability zones.
     * @type {Array<string>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProvider
     */
    availabilityZones: Array<string>;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecInstanceDistribution}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProvider
     */
    instanceDistribution?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecInstanceDistribution;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProviderWorker}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProvider
     */
    worker: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProviderWorker;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProviderFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProvider;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProvider;
export declare function ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProviderToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProvider | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisInfrastructureV1alpha2AWSMachineDeploymentSpecProvider.d.ts.map