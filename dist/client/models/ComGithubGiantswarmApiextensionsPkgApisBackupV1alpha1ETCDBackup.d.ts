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
import { ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackupSpec, ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackupStatus, IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './';
/**
 *
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup
 */
export interface ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup
     */
    kind?: string;
    /**
     *
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackupSpec}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup
     */
    spec: ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackupSpec;
    /**
     *
     * @type {ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackupStatus}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup
     */
    status?: ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackupStatus;
}
export declare function ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackupFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup;
export declare function ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup;
export declare function ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackupToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup | null): any;
//# sourceMappingURL=ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDBackup.d.ts.map