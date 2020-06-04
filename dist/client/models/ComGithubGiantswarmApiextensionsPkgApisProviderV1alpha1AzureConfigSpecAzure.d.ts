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
import { ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureDNSZones, ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureNode, ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureVirtualNetwork, ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret } from './';
/**
 *
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure {
    /**
     *
     * @type {Array<number>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure
     */
    availabilityZones: Array<number>;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure
     */
    credentialSecret: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1CredentialSecret;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureDNSZones}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure
     */
    dnsZones: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureDNSZones;
    /**
     *
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureNode>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure
     */
    masters: Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureNode>;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureVirtualNetwork}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure
     */
    virtualNetwork: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureVirtualNetwork;
    /**
     *
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureNode>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure
     */
    workers: Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureNode>;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure;
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure;
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzureToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AzureConfigSpecAzure.d.ts.map