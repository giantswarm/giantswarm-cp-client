/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdater,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterToJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMToJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetwork,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkToJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNode,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeToJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeController,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeControllerFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeControllerFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeControllerToJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMPortMappings,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMPortMappingsFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMPortMappingsFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMPortMappingsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM
 */
export interface ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM {
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdater}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM
     */
    endpointUpdater: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdater;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM
     */
    k8sKVM: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVM;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNode>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM
     */
    masters: Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNode>;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetwork}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM
     */
    network: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetwork;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeController}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM
     */
    nodeController: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeController;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMPortMappings>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM
     */
    portMappings: Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMPortMappings>;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNode>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM
     */
    workers: Array<ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNode>;
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM {
    return ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endpointUpdater': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterFromJSON(json['endpointUpdater']),
        'k8sKVM': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMFromJSON(json['k8sKVM']),
        'masters': ((json['masters'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeFromJSON)),
        'network': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkFromJSON(json['network']),
        'nodeController': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeControllerFromJSON(json['nodeController']),
        'portMappings': ((json['portMappings'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMPortMappingsFromJSON)),
        'workers': ((json['workers'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeFromJSON)),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVM | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endpointUpdater': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMEndpointUpdaterToJSON(value.endpointUpdater),
        'k8sKVM': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMK8sKVMToJSON(value.k8sKVM),
        'masters': ((value.masters as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeToJSON)),
        'network': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNetworkToJSON(value.network),
        'nodeController': ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeControllerToJSON(value.nodeController),
        'portMappings': ((value.portMappings as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMPortMappingsToJSON)),
        'workers': ((value.workers as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisProviderV1alpha1KVMConfigSpecKVMNodeToJSON)),
    };
}


