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
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery
 */
export interface IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery {
    /**
     * groupVersion specifies the API group and version in the form "group/version"
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery
     */
    groupVersion: string;
    /**
     * version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery
     */
    version: string;
}
export declare function IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery;
export declare function IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery;
export declare function IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryToJSON(value?: IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery | null): any;
//# sourceMappingURL=IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery.d.ts.map