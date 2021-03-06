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
/**
 * 
 * @export
 * @interface ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus
 */
export interface ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus {
    /**
     * Size of the backup file
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus
     */
    backupFileSize?: number;
    /**
     * Time took by the backup creation process
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus
     */
    creationTime?: number;
    /**
     * Time took by the backup encryption process
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus
     */
    encryptionTime?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus
     */
    finishedTimestamp?: Date;
    /**
     * Latest backup error message
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus
     */
    latestError?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus
     */
    startedTimestamp?: Date;
    /**
     * Status of this isntance's backup job (can be 'Pending', 'Running'. 'Completed', 'Failed')
     * @type {string}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus
     */
    status: string;
    /**
     * Time took by the backup upload process
     * @type {number}
     * @memberof ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus
     */
    uploadTime?: number;
}

export function ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusFromJSON(json: any): ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus {
    return ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusFromJSONTyped(json, false);
}

export function ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backupFileSize': !exists(json, 'backupFileSize') ? undefined : json['backupFileSize'],
        'creationTime': !exists(json, 'creationTime') ? undefined : json['creationTime'],
        'encryptionTime': !exists(json, 'encryptionTime') ? undefined : json['encryptionTime'],
        'finishedTimestamp': !exists(json, 'finishedTimestamp') ? undefined : (new Date(json['finishedTimestamp'])),
        'latestError': !exists(json, 'latestError') ? undefined : json['latestError'],
        'startedTimestamp': !exists(json, 'startedTimestamp') ? undefined : (new Date(json['startedTimestamp'])),
        'status': json['status'],
        'uploadTime': !exists(json, 'uploadTime') ? undefined : json['uploadTime'],
    };
}

export function ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatusToJSON(value?: ComGithubGiantswarmApiextensionsPkgApisBackupV1alpha1ETCDInstanceBackupStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backupFileSize': value.backupFileSize,
        'creationTime': value.creationTime,
        'encryptionTime': value.encryptionTime,
        'finishedTimestamp': value.finishedTimestamp === undefined ? undefined : (value.finishedTimestamp.toISOString()),
        'latestError': value.latestError,
        'startedTimestamp': value.startedTimestamp === undefined ? undefined : (value.startedTimestamp.toISOString()),
        'status': value.status,
        'uploadTime': value.uploadTime,
    };
}


