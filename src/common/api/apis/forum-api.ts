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
 * ForumApi - axios parameter creator
 * @export
 */
export const ForumApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary forum - mark-as-read
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forumMarkAsReadPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/forum/mark-as-read`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
        /**
         * 
         * @summary forum - search2
         * @param {string} _query 
         * @param {string} farmer 
         * @param {string} category 
         * @param {number} page 
         * @param {string} order 
         * @param {boolean} admin 
         * @param {boolean} moderator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forumSearch2Get: async (_query: string, farmer: string, category: string, page: number, order: string, admin: boolean, moderator: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter '_query' is not null or undefined
            if (_query === null || _query === undefined) {
                throw new RequiredError('_query','Required parameter _query was null or undefined when calling forumSearch2Get.');
            }
            // verify required parameter 'farmer' is not null or undefined
            if (farmer === null || farmer === undefined) {
                throw new RequiredError('farmer','Required parameter farmer was null or undefined when calling forumSearch2Get.');
            }
            // verify required parameter 'category' is not null or undefined
            if (category === null || category === undefined) {
                throw new RequiredError('category','Required parameter category was null or undefined when calling forumSearch2Get.');
            }
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling forumSearch2Get.');
            }
            // verify required parameter 'order' is not null or undefined
            if (order === null || order === undefined) {
                throw new RequiredError('order','Required parameter order was null or undefined when calling forumSearch2Get.');
            }
            // verify required parameter 'admin' is not null or undefined
            if (admin === null || admin === undefined) {
                throw new RequiredError('admin','Required parameter admin was null or undefined when calling forumSearch2Get.');
            }
            // verify required parameter 'moderator' is not null or undefined
            if (moderator === null || moderator === undefined) {
                throw new RequiredError('moderator','Required parameter moderator was null or undefined when calling forumSearch2Get.');
            }
            const localVarPath = `/forum/search2`;
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

            if (_query !== undefined) {
                localVarQueryParameter['query'] = _query;
            }

            if (farmer !== undefined) {
                localVarQueryParameter['farmer'] = farmer;
            }

            if (category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (admin !== undefined) {
                localVarQueryParameter['admin'] = admin;
            }

            if (moderator !== undefined) {
                localVarQueryParameter['moderator'] = moderator;
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
 * ForumApi - functional programming interface
 * @export
 */
export const ForumApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary forum - mark-as-read
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forumMarkAsReadPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await ForumApiAxiosParamCreator(configuration).forumMarkAsReadPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary forum - search2
         * @param {string} _query 
         * @param {string} farmer 
         * @param {string} category 
         * @param {number} page 
         * @param {string} order 
         * @param {boolean} admin 
         * @param {boolean} moderator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forumSearch2Get(_query: string, farmer: string, category: string, page: number, order: string, admin: boolean, moderator: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await ForumApiAxiosParamCreator(configuration).forumSearch2Get(_query, farmer, category, page, order, admin, moderator, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ForumApi - factory interface
 * @export
 */
export const ForumApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary forum - mark-as-read
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forumMarkAsReadPost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return ForumApiFp(configuration).forumMarkAsReadPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary forum - search2
         * @param {string} _query 
         * @param {string} farmer 
         * @param {string} category 
         * @param {number} page 
         * @param {string} order 
         * @param {boolean} admin 
         * @param {boolean} moderator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forumSearch2Get(_query: string, farmer: string, category: string, page: number, order: string, admin: boolean, moderator: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return ForumApiFp(configuration).forumSearch2Get(_query, farmer, category, page, order, admin, moderator, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ForumApi - object-oriented interface
 * @export
 * @class ForumApi
 * @extends {BaseAPI}
 */
export class ForumApi extends BaseAPI {
    /**
     * 
     * @summary forum - mark-as-read
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ForumApi
     */
    public async forumMarkAsReadPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return ForumApiFp(this.configuration).forumMarkAsReadPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary forum - search2
     * @param {string} _query 
     * @param {string} farmer 
     * @param {string} category 
     * @param {number} page 
     * @param {string} order 
     * @param {boolean} admin 
     * @param {boolean} moderator 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ForumApi
     */
    public async forumSearch2Get(_query: string, farmer: string, category: string, page: number, order: string, admin: boolean, moderator: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return ForumApiFp(this.configuration).forumSearch2Get(_query, farmer, category, page, order, admin, moderator, options).then((request) => request(this.axios, this.basePath));
    }
}
