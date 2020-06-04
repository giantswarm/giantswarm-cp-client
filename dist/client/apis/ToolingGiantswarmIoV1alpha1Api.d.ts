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
import { ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool, ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList, IoK8sApimachineryPkgApisMetaV1APIResourceList, IoK8sApimachineryPkgApisMetaV1DeleteOptions, IoK8sApimachineryPkgApisMetaV1Status, IoK8sApimachineryPkgApisMetaV1WatchEvent } from '../models';
export interface CreateToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest {
    namespace: string;
    body: ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}
export interface DeleteToolingGiantswarmIoV1alpha1CollectionNamespacedAzureToolRequest {
    namespace: string;
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}
export interface DeleteToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}
export interface ListToolingGiantswarmIoV1alpha1AzureToolForAllNamespacesRequest {
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}
export interface ListToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest {
    namespace: string;
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}
export interface PatchToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}
export interface ReadToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest {
    name: string;
    namespace: string;
    pretty?: string;
}
export interface ReplaceToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest {
    name: string;
    namespace: string;
    body: ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}
export interface WatchToolingGiantswarmIoV1alpha1AzureToolListForAllNamespacesRequest {
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}
export interface WatchToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest {
    name: string;
    namespace: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}
export interface WatchToolingGiantswarmIoV1alpha1NamespacedAzureToolListRequest {
    namespace: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}
/**
 *
 */
export declare class ToolingGiantswarmIoV1alpha1Api extends runtime.BaseAPI {
    /**
     * create an AzureTool
     */
    createToolingGiantswarmIoV1alpha1NamespacedAzureToolRaw(requestParameters: CreateToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<runtime.ApiResponse<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>>;
    /**
     * create an AzureTool
     */
    createToolingGiantswarmIoV1alpha1NamespacedAzureTool(requestParameters: CreateToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>;
    /**
     * delete collection of AzureTool
     */
    deleteToolingGiantswarmIoV1alpha1CollectionNamespacedAzureToolRaw(requestParameters: DeleteToolingGiantswarmIoV1alpha1CollectionNamespacedAzureToolRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>>;
    /**
     * delete collection of AzureTool
     */
    deleteToolingGiantswarmIoV1alpha1CollectionNamespacedAzureTool(requestParameters: DeleteToolingGiantswarmIoV1alpha1CollectionNamespacedAzureToolRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status>;
    /**
     * delete an AzureTool
     */
    deleteToolingGiantswarmIoV1alpha1NamespacedAzureToolRaw(requestParameters: DeleteToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>>;
    /**
     * delete an AzureTool
     */
    deleteToolingGiantswarmIoV1alpha1NamespacedAzureTool(requestParameters: DeleteToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status>;
    /**
     * get available resources
     */
    getToolingGiantswarmIoV1alpha1APIResourcesRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * get available resources
     */
    getToolingGiantswarmIoV1alpha1APIResources(): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * list or watch objects of kind AzureTool
     */
    listToolingGiantswarmIoV1alpha1AzureToolForAllNamespacesRaw(requestParameters: ListToolingGiantswarmIoV1alpha1AzureToolForAllNamespacesRequest): Promise<runtime.ApiResponse<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList>>;
    /**
     * list or watch objects of kind AzureTool
     */
    listToolingGiantswarmIoV1alpha1AzureToolForAllNamespaces(requestParameters: ListToolingGiantswarmIoV1alpha1AzureToolForAllNamespacesRequest): Promise<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList>;
    /**
     * list or watch objects of kind AzureTool
     */
    listToolingGiantswarmIoV1alpha1NamespacedAzureToolRaw(requestParameters: ListToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<runtime.ApiResponse<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList>>;
    /**
     * list or watch objects of kind AzureTool
     */
    listToolingGiantswarmIoV1alpha1NamespacedAzureTool(requestParameters: ListToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureToolList>;
    /**
     * partially update the specified AzureTool
     */
    patchToolingGiantswarmIoV1alpha1NamespacedAzureToolRaw(requestParameters: PatchToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<runtime.ApiResponse<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>>;
    /**
     * partially update the specified AzureTool
     */
    patchToolingGiantswarmIoV1alpha1NamespacedAzureTool(requestParameters: PatchToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>;
    /**
     * read the specified AzureTool
     */
    readToolingGiantswarmIoV1alpha1NamespacedAzureToolRaw(requestParameters: ReadToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<runtime.ApiResponse<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>>;
    /**
     * read the specified AzureTool
     */
    readToolingGiantswarmIoV1alpha1NamespacedAzureTool(requestParameters: ReadToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>;
    /**
     * replace the specified AzureTool
     */
    replaceToolingGiantswarmIoV1alpha1NamespacedAzureToolRaw(requestParameters: ReplaceToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<runtime.ApiResponse<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>>;
    /**
     * replace the specified AzureTool
     */
    replaceToolingGiantswarmIoV1alpha1NamespacedAzureTool(requestParameters: ReplaceToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<ComGithubGiantswarmApiextensionsPkgApisToolingV1alpha1AzureTool>;
    /**
     * watch individual changes to a list of AzureTool. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    watchToolingGiantswarmIoV1alpha1AzureToolListForAllNamespacesRaw(requestParameters: WatchToolingGiantswarmIoV1alpha1AzureToolListForAllNamespacesRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * watch individual changes to a list of AzureTool. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    watchToolingGiantswarmIoV1alpha1AzureToolListForAllNamespaces(requestParameters: WatchToolingGiantswarmIoV1alpha1AzureToolListForAllNamespacesRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * watch changes to an object of kind AzureTool. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    watchToolingGiantswarmIoV1alpha1NamespacedAzureToolRaw(requestParameters: WatchToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * watch changes to an object of kind AzureTool. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    watchToolingGiantswarmIoV1alpha1NamespacedAzureTool(requestParameters: WatchToolingGiantswarmIoV1alpha1NamespacedAzureToolRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * watch individual changes to a list of AzureTool. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    watchToolingGiantswarmIoV1alpha1NamespacedAzureToolListRaw(requestParameters: WatchToolingGiantswarmIoV1alpha1NamespacedAzureToolListRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * watch individual changes to a list of AzureTool. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    watchToolingGiantswarmIoV1alpha1NamespacedAzureToolList(requestParameters: WatchToolingGiantswarmIoV1alpha1NamespacedAzureToolListRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent>;
}
//# sourceMappingURL=ToolingGiantswarmIoV1alpha1Api.d.ts.map