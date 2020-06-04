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
 * @interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret
 */
export interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret {
    /**
     * Name is the name of the secret containing chart values to apply, e.g. prometheus-chart-secret.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret
     */
    name: string;
    /**
     * Namespace is the namespace of the secret, e.g. kube-system.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret
     */
    namespace: string;
    /**
     * ResourceVersion is the Kubernetes resource version of the secret. Used to detect if the secret has changed, e.g. 12345.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret
     */
    resourceVersion: string;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecretFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret;
export declare function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret;
export declare function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecretToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1ChartSpecConfigSecret.d.ts.map