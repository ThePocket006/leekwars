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
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * HatApi - axios parameter creator
 * @export
 */
export const HatApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary hat - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        hatGetAllGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hat/get-all`;
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
 * HatApi - functional programming interface
 * @export
 */
export const HatApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary hat - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async hatGetAllGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await HatApiAxiosParamCreator(configuration).hatGetAllGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HatApi - factory interface
 * @export
 */
export const HatApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary hat - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async hatGetAllGet(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return HatApiFp(configuration).hatGetAllGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HatApi - object-oriented interface
 * @export
 * @class HatApi
 * @extends {BaseAPI}
 */
export class HatApi extends BaseAPI {
    /**
     * 
     * @summary hat - get-all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HatApi
     */
    public async hatGetAllGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return HatApiFp(this.configuration).hatGetAllGet(options).then((request) => request(this.axios, this.basePath));
    }
}
