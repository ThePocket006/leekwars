/* tslint:disable */
/* eslint-disable */
/**
 * Leekwars API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import type {AxiosResponse, AxiosInstance, AxiosRequestConfig} from "axios";
import globalAxios from "axios";
import { Configuration } from '@/common/api';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * ChipApi - axios parameter creator
 * @export
 */
export const ChipApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary chip - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        chipGetAllGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/chip/get-all`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChipApi - functional programming interface
 * @export
 */
export const ChipApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary chip - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async chipGetAllGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await ChipApiAxiosParamCreator(configuration).chipGetAllGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ChipApi - factory interface
 * @export
 */
export const ChipApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary chip - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async chipGetAllGet(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return ChipApiFp(configuration).chipGetAllGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChipApi - object-oriented interface
 * @export
 * @class ChipApi
 * @extends {BaseAPI}
 */
export class ChipApi extends BaseAPI {
    /**
     * 
     * @summary chip - get-all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChipApi
     */
    public async chipGetAllGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return ChipApiFp(this.configuration).chipGetAllGet(options).then((request) => request(this.axios, this.basePath));
    }
}
