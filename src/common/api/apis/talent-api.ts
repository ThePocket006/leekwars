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
 * TalentApi - axios parameter creator
 * @export
 */
export const TalentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary talent - farmer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        talentFarmerGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/talent/farmer`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

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
        /**
         * 
         * @summary talent - leek
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        talentLeekGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/talent/leek`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

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
 * TalentApi - functional programming interface
 * @export
 */
export const TalentApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary talent - farmer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async talentFarmerGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await TalentApiAxiosParamCreator(configuration).talentFarmerGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary talent - leek
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async talentLeekGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await TalentApiAxiosParamCreator(configuration).talentLeekGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TalentApi - factory interface
 * @export
 */
export const TalentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary talent - farmer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async talentFarmerGet(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return TalentApiFp(configuration).talentFarmerGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary talent - leek
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async talentLeekGet(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return TalentApiFp(configuration).talentLeekGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TalentApi - object-oriented interface
 * @export
 * @class TalentApi
 * @extends {BaseAPI}
 */
export class TalentApi extends BaseAPI {
    /**
     * 
     * @summary talent - farmer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TalentApi
     */
    public async talentFarmerGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return TalentApiFp(this.configuration).talentFarmerGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary talent - leek
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TalentApi
     */
    public async talentLeekGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return TalentApiFp(this.configuration).talentLeekGet(options).then((request) => request(this.axios, this.basePath));
    }
}
