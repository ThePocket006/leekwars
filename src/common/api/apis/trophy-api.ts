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
 * TrophyApi - axios parameter creator
 * @export
 */
export const TrophyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary trophy - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trophyGetAllGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/trophy/get-all`;
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
         * @summary trophy - get-categories
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trophyGetCategoriesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/trophy/get-categories`;
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
         * @summary trophy - get-farmer-trophies
         * @param {number} farmerId 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trophyGetFarmerTrophiesGet: async (farmerId: number, lang: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'farmerId' is not null or undefined
            if (farmerId === null || farmerId === undefined) {
                throw new RequiredError('farmerId','Required parameter farmerId was null or undefined when calling trophyGetFarmerTrophiesGet.');
            }
            // verify required parameter 'lang' is not null or undefined
            if (lang === null || lang === undefined) {
                throw new RequiredError('lang','Required parameter lang was null or undefined when calling trophyGetFarmerTrophiesGet.');
            }
            const localVarPath = `/trophy/get-farmer-trophies`;
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

            if (farmerId !== undefined) {
                localVarQueryParameter['farmer_id'] = farmerId;
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
        /**
         * 
         * @summary trophy - get-trophy-words
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trophyGetTrophyWordsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/trophy/get-trophy-words`;
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
         * @summary trophy - my-trophies
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trophyMyTrophiesGet: async (lang: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'lang' is not null or undefined
            if (lang === null || lang === undefined) {
                throw new RequiredError('lang','Required parameter lang was null or undefined when calling trophyMyTrophiesGet.');
            }
            const localVarPath = `/trophy/my-trophies`;
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
        /**
         * 
         * @summary trophy - retrieve-all-rewards
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trophyRetrieveAllRewardsPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/trophy/retrieve-all-rewards`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
         * @summary trophy - retrieve-reward
         * @param {number} trophyId 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trophyRetrieveRewardPost: async (trophyId: number, body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trophyId' is not null or undefined
            if (trophyId === null || trophyId === undefined) {
                throw new RequiredError('trophyId','Required parameter trophyId was null or undefined when calling trophyRetrieveRewardPost.');
            }
            const localVarPath = `/trophy/retrieve-reward`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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

            if (trophyId !== undefined) {
                localVarQueryParameter['trophy_id'] = trophyId;
            }

            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TrophyApi - functional programming interface
 * @export
 */
export const TrophyApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary trophy - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyGetAllGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await TrophyApiAxiosParamCreator(configuration).trophyGetAllGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary trophy - get-categories
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyGetCategoriesGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await TrophyApiAxiosParamCreator(configuration).trophyGetCategoriesGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary trophy - get-farmer-trophies
         * @param {number} farmerId 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyGetFarmerTrophiesGet(farmerId: number, lang: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await TrophyApiAxiosParamCreator(configuration).trophyGetFarmerTrophiesGet(farmerId, lang, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary trophy - get-trophy-words
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyGetTrophyWordsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await TrophyApiAxiosParamCreator(configuration).trophyGetTrophyWordsGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary trophy - my-trophies
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyMyTrophiesGet(lang: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await TrophyApiAxiosParamCreator(configuration).trophyMyTrophiesGet(lang, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary trophy - retrieve-all-rewards
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyRetrieveAllRewardsPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await TrophyApiAxiosParamCreator(configuration).trophyRetrieveAllRewardsPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary trophy - retrieve-reward
         * @param {number} trophyId 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyRetrieveRewardPost(trophyId: number, body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await TrophyApiAxiosParamCreator(configuration).trophyRetrieveRewardPost(trophyId, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TrophyApi - factory interface
 * @export
 */
export const TrophyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary trophy - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyGetAllGet(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return TrophyApiFp(configuration).trophyGetAllGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary trophy - get-categories
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyGetCategoriesGet(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return TrophyApiFp(configuration).trophyGetCategoriesGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary trophy - get-farmer-trophies
         * @param {number} farmerId 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyGetFarmerTrophiesGet(farmerId: number, lang: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return TrophyApiFp(configuration).trophyGetFarmerTrophiesGet(farmerId, lang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary trophy - get-trophy-words
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyGetTrophyWordsGet(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return TrophyApiFp(configuration).trophyGetTrophyWordsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary trophy - my-trophies
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyMyTrophiesGet(lang: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return TrophyApiFp(configuration).trophyMyTrophiesGet(lang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary trophy - retrieve-all-rewards
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyRetrieveAllRewardsPost(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return TrophyApiFp(configuration).trophyRetrieveAllRewardsPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary trophy - retrieve-reward
         * @param {number} trophyId 
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trophyRetrieveRewardPost(trophyId: number, body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return TrophyApiFp(configuration).trophyRetrieveRewardPost(trophyId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TrophyApi - object-oriented interface
 * @export
 * @class TrophyApi
 * @extends {BaseAPI}
 */
export class TrophyApi extends BaseAPI {
    /**
     * 
     * @summary trophy - get-all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrophyApi
     */
    public async trophyGetAllGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return TrophyApiFp(this.configuration).trophyGetAllGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary trophy - get-categories
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrophyApi
     */
    public async trophyGetCategoriesGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return TrophyApiFp(this.configuration).trophyGetCategoriesGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary trophy - get-farmer-trophies
     * @param {number} farmerId 
     * @param {string} lang 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrophyApi
     */
    public async trophyGetFarmerTrophiesGet(farmerId: number, lang: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return TrophyApiFp(this.configuration).trophyGetFarmerTrophiesGet(farmerId, lang, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary trophy - get-trophy-words
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrophyApi
     */
    public async trophyGetTrophyWordsGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return TrophyApiFp(this.configuration).trophyGetTrophyWordsGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary trophy - my-trophies
     * @param {string} lang 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrophyApi
     */
    public async trophyMyTrophiesGet(lang: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return TrophyApiFp(this.configuration).trophyMyTrophiesGet(lang, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary trophy - retrieve-all-rewards
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrophyApi
     */
    public async trophyRetrieveAllRewardsPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return TrophyApiFp(this.configuration).trophyRetrieveAllRewardsPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary trophy - retrieve-reward
     * @param {number} trophyId 
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrophyApi
     */
    public async trophyRetrieveRewardPost(trophyId: number, body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return TrophyApiFp(this.configuration).trophyRetrieveRewardPost(trophyId, body, options).then((request) => request(this.axios, this.basePath));
    }
}
