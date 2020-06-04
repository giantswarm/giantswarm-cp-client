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


import * as runtime from '../runtime';
import {
    IoK8sApimachineryPkgApisMetaV1APIGroup,
    IoK8sApimachineryPkgApisMetaV1APIGroupFromJSON,
    IoK8sApimachineryPkgApisMetaV1APIGroupToJSON,
} from '../models';

/**
 * 
 */
export class ApplicationGiantswarmIoApi extends runtime.BaseAPI {

    /**
     * get information of a group
     */
    async getApplicationGiantswarmIoAPIGroupRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIGroup>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("oauth2", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/apis/application.giantswarm.io/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIGroupFromJSON(jsonValue));
    }

    /**
     * get information of a group
     */
    async getApplicationGiantswarmIoAPIGroup(): Promise<IoK8sApimachineryPkgApisMetaV1APIGroup> {
        const response = await this.getApplicationGiantswarmIoAPIGroupRaw();
        return await response.value();
    }

}
