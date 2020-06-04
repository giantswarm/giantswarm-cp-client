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
 * @interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret
 */
export interface ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret {
    /**
     * Name is the name of the secret containing the kubeconfig, e.g. app-operator-kubeconfig.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret
     */
    name: string;
    /**
     * Namespace is the namespace of the secret containing the kubeconfig, e.g. giantswarm.
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret
     */
    namespace: string;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecretFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret;
export declare function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret;
export declare function ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecretToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisApplicationV1alpha1AppSpecKubeConfigSecret.d.ts.map