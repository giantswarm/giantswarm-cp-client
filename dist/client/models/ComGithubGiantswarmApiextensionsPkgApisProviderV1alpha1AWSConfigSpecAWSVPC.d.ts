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
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC {
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC
     */
    cidr: string;
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC
     */
    peerId: string;
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC
     */
    privateSubnetCidr: string;
    /**
     *
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC
     */
    publicSubnetCidr: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC
     */
    routeTableNames: Array<string>;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPCFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC;
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPCFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC;
export declare function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPCToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1AWSConfigSpecAWSVPC.d.ts.map