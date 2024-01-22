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
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import globalAxios from "axios";
import { Configuration } from '@/common/api';
import type {RequestArgs} from "@/common/api/base";
import {BASE_PATH, BaseAPI, RequiredError} from "@/common/api/base";
/**
 * CountryApi - axios parameter creator
 * @export
 */
export const CountryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary country - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        countryGetAllGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/country/get-all`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
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
 * CountryApi - functional programming interface
 * @export
 */
export const CountryApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary country - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async countryGetAllGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CountryApiAxiosParamCreator(configuration).countryGetAllGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CountryApi - factory interface
 * @export
 */
export const CountryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary country - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async countryGetAllGet(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CountryApiFp(configuration).countryGetAllGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CountryApi - object-oriented interface
 * @export
 * @class CountryApi
 * @extends {BaseAPI}
 */
export class CountryApi extends BaseAPI {
    /**
     * 
     * @summary country - get-all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApi
     */
    public async countryGetAllGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CountryApiFp(this.configuration).countryGetAllGet(options).then((request) => request(this.axios, this.basePath));
    }
}
