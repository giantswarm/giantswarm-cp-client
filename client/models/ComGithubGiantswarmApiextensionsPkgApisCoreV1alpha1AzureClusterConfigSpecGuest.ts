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
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestCredentialSecret,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestCredentialSecretFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestCredentialSecretFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestCredentialSecretToJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestMaster,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestMasterFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestMasterFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestMasterToJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestWorker,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestWorkerFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestWorkerFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestWorkerToJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundle,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundleFromJSON,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundleFromJSONTyped,
    ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundleToJSON,
} from './';

/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
 */
export interface ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest {
    /**
     * 
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    availabilityZones?: number;
    /**
     * 
     * @type {ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestCredentialSecret}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    credentialSecret: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestCredentialSecret;
    /**
     * DNSZone for guest cluster is supplemented with host prefixes for specific services such as Kubernetes API or Etcd. In general this DNS Zone should start with "k8s" like for example "k8s.cluster.example.com.".
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    dnsZone: string;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    id: string;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestMaster>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    masters?: Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestMaster>;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    releaseVersion?: string;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundle>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    versionBundles?: Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundle>;
    /**
     * 
     * @type {Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestWorker>}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest
     */
    workers?: Array<ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestWorker>;
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest {
    return ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availabilityZones': !exists(json, 'availabilityZones') ? undefined : json['availabilityZones'],
        'credentialSecret': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestCredentialSecretFromJSON(json['credentialSecret']),
        'dnsZone': json['dnsZone'],
        'id': json['id'],
        'masters': !exists(json, 'masters') ? undefined : ((json['masters'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestMasterFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'releaseVersion': !exists(json, 'releaseVersion') ? undefined : json['releaseVersion'],
        'versionBundles': !exists(json, 'versionBundles') ? undefined : ((json['versionBundles'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundleFromJSON)),
        'workers': !exists(json, 'workers') ? undefined : ((json['workers'] as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestWorkerFromJSON)),
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availabilityZones': value.availabilityZones,
        'credentialSecret': ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestCredentialSecretToJSON(value.credentialSecret),
        'dnsZone': value.dnsZone,
        'id': value.id,
        'masters': value.masters === undefined ? undefined : ((value.masters as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestMasterToJSON)),
        'name': value.name,
        'owner': value.owner,
        'releaseVersion': value.releaseVersion,
        'versionBundles': value.versionBundles === undefined ? undefined : ((value.versionBundles as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1ClusterGuestConfigVersionBundleToJSON)),
        'workers': value.workers === undefined ? undefined : ((value.workers as Array<any>).map(ComGithubGiantswarmApiextensionsPkgApisCoreV1alpha1AzureClusterConfigSpecGuestWorkerToJSON)),
    };
}


