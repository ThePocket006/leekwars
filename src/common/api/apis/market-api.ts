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
 * MarketApi - axios parameter creator
 * @export
 */
export const MarketApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary market - buy-crystals
         * @param {string} itemId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        marketBuyCrystalsPostForm: async (itemId: string, file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling marketBuyCrystalsPostForm.');
            }
            const localVarPath = `/market/buy-crystals`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication bearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (itemId !== undefined) {
                localVarQueryParameter['item_id'] = itemId;
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary market - buy-habs
         * @param {string} itemId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        marketBuyHabsPostForm: async (itemId: string, file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling marketBuyHabsPostForm.');
            }
            const localVarPath = `/market/buy-habs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication bearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (itemId !== undefined) {
                localVarQueryParameter['item_id'] = itemId;
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary market - sell-habs
         * @param {number} itemId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        marketSellHabsPostForm: async (itemId: number, file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling marketSellHabsPostForm.');
            }
            const localVarPath = `/market/sell-habs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication bearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (itemId !== undefined) {
                localVarQueryParameter['item_id'] = itemId;
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MarketApi - functional programming interface
 * @export
 */
export const MarketApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary market - buy-crystals
         * @param {string} itemId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async marketBuyCrystalsPostForm(itemId: string, file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MarketApiAxiosParamCreator(configuration).marketBuyCrystalsPostForm(itemId, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary market - buy-habs
         * @param {string} itemId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async marketBuyHabsPostForm(itemId: string, file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MarketApiAxiosParamCreator(configuration).marketBuyHabsPostForm(itemId, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary market - sell-habs
         * @param {number} itemId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async marketSellHabsPostForm(itemId: number, file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MarketApiAxiosParamCreator(configuration).marketSellHabsPostForm(itemId, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MarketApi - factory interface
 * @export
 */
export const MarketApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary market - buy-crystals
         * @param {string} itemId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async marketBuyCrystalsPostForm(itemId: string, file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MarketApiFp(configuration).marketBuyCrystalsPostForm(itemId, file, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary market - buy-habs
         * @param {string} itemId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async marketBuyHabsPostForm(itemId: string, file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MarketApiFp(configuration).marketBuyHabsPostForm(itemId, file, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary market - sell-habs
         * @param {number} itemId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async marketSellHabsPostForm(itemId: number, file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MarketApiFp(configuration).marketSellHabsPostForm(itemId, file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MarketApi - object-oriented interface
 * @export
 * @class MarketApi
 * @extends {BaseAPI}
 */
export class MarketApi extends BaseAPI {
    /**
     * 
     * @summary market - buy-crystals
     * @param {string} itemId 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketApi
     */
    public async marketBuyCrystalsPostForm(itemId: string, file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MarketApiFp(this.configuration).marketBuyCrystalsPostForm(itemId, file, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary market - buy-habs
     * @param {string} itemId 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketApi
     */
    public async marketBuyHabsPostForm(itemId: string, file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MarketApiFp(this.configuration).marketBuyHabsPostForm(itemId, file, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary market - sell-habs
     * @param {number} itemId 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketApi
     */
    public async marketSellHabsPostForm(itemId: number, file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MarketApiFp(this.configuration).marketSellHabsPostForm(itemId, file, options).then((request) => request(this.axios, this.basePath));
    }
}
