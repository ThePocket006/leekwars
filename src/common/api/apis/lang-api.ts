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
 * LangApi - axios parameter creator
 * @export
 */
export const LangApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary lang - get
         * @param {string} file 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        langGetGet: async (file: string, lang: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            if (file === null || file === undefined) {
                throw new RequiredError('file','Required parameter file was null or undefined when calling langGetGet.');
            }
            // verify required parameter 'lang' is not null or undefined
            if (lang === null || lang === undefined) {
                throw new RequiredError('lang','Required parameter lang was null or undefined when calling langGetGet.');
            }
            const localVarPath = `/lang/get`;
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

            if (file !== undefined) {
                localVarQueryParameter['file'] = file;
            }

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
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
 * LangApi - functional programming interface
 * @export
 */
export const LangApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary lang - get
         * @param {string} file 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async langGetGet(file: string, lang: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await LangApiAxiosParamCreator(configuration).langGetGet(file, lang, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LangApi - factory interface
 * @export
 */
export const LangApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary lang - get
         * @param {string} file 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async langGetGet(file: string, lang: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return LangApiFp(configuration).langGetGet(file, lang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LangApi - object-oriented interface
 * @export
 * @class LangApi
 * @extends {BaseAPI}
 */
export class LangApi extends BaseAPI {
    /**
     * 
     * @summary lang - get
     * @param {string} file 
     * @param {string} lang 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LangApi
     */
    public async langGetGet(file: string, lang: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return LangApiFp(this.configuration).langGetGet(file, lang, options).then((request) => request(this.axios, this.basePath));
    }
}
