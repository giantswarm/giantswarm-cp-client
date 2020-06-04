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
import * as runtime from '../runtime';
import { ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig, IoK8sApimachineryPkgApisMetaV1APIResourceList } from '../models';
export interface ReadExampleGiantswarmIoV1alpha1NamespacedMemcachedConfigRequest {
    name: string;
    namespace: string;
    pretty?: string;
}
/**
 *
 */
export declare class ExampleGiantswarmIoV1alpha1Api extends runtime.BaseAPI {
    /**
     * get available resources
     */
    getExampleGiantswarmIoV1alpha1APIResourcesRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * get available resources
     */
    getExampleGiantswarmIoV1alpha1APIResources(): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * read the specified MemcachedConfig
     */
    readExampleGiantswarmIoV1alpha1NamespacedMemcachedConfigRaw(requestParameters: ReadExampleGiantswarmIoV1alpha1NamespacedMemcachedConfigRequest): Promise<runtime.ApiResponse<ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig>>;
    /**
     * read the specified MemcachedConfig
     */
    readExampleGiantswarmIoV1alpha1NamespacedMemcachedConfig(requestParameters: ReadExampleGiantswarmIoV1alpha1NamespacedMemcachedConfigRequest): Promise<ComGithubGiantswarmApiextensionsPkgApisExampleV1alpha1MemcachedConfig>;
}
//# sourceMappingURL=ExampleGiantswarmIoV1alpha1Api.d.ts.map