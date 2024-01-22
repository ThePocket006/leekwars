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
 * AiFolderApi - axios parameter creator
 * @export
 */
export const AiFolderApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary ai-folder - change-folder
         * @param {number} folderId 
         * @param {number} destFolderId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aiFolderChangeFolderPostForm: async (folderId: number, destFolderId: number, file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            if (folderId === null || folderId === undefined) {
                throw new RequiredError('folderId','Required parameter folderId was null or undefined when calling aiFolderChangeFolderPostForm.');
            }
            // verify required parameter 'destFolderId' is not null or undefined
            if (destFolderId === null || destFolderId === undefined) {
                throw new RequiredError('destFolderId','Required parameter destFolderId was null or undefined when calling aiFolderChangeFolderPostForm.');
            }
            const localVarPath = `/ai-folder/change-folder`;
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

            if (folderId !== undefined) {
                localVarQueryParameter['folder_id'] = folderId;
            }

            if (destFolderId !== undefined) {
                localVarQueryParameter['dest_folder_id'] = destFolderId;
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
         * @summary ai-folder - delete
         * @param {number} folderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aiFolderDeleteDelete: async (folderId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            if (folderId === null || folderId === undefined) {
                throw new RequiredError('folderId','Required parameter folderId was null or undefined when calling aiFolderDeleteDelete.');
            }
            const localVarPath = `/ai-folder/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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

            if (folderId !== undefined) {
                localVarQueryParameter['folder_id'] = folderId;
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
         * @summary ai-folder - new-name
         * @param {number} folderId 
         * @param {string} name 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aiFolderNewNamePostForm: async (folderId: number, name: string, file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            if (folderId === null || folderId === undefined) {
                throw new RequiredError('folderId','Required parameter folderId was null or undefined when calling aiFolderNewNamePostForm.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling aiFolderNewNamePostForm.');
            }
            const localVarPath = `/ai-folder/new-name`;
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

            if (folderId !== undefined) {
                localVarQueryParameter['folder_id'] = folderId;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
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
         * @summary ai-folder - rename
         * @param {number} folderId 
         * @param {string} newName 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aiFolderRenamePostForm: async (folderId: number, newName: string, file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            if (folderId === null || folderId === undefined) {
                throw new RequiredError('folderId','Required parameter folderId was null or undefined when calling aiFolderRenamePostForm.');
            }
            // verify required parameter 'newName' is not null or undefined
            if (newName === null || newName === undefined) {
                throw new RequiredError('newName','Required parameter newName was null or undefined when calling aiFolderRenamePostForm.');
            }
            const localVarPath = `/ai-folder/rename`;
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

            if (folderId !== undefined) {
                localVarQueryParameter['folder_id'] = folderId;
            }

            if (newName !== undefined) {
                localVarQueryParameter['new_name'] = newName;
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
 * AiFolderApi - functional programming interface
 * @export
 */
export const AiFolderApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary ai-folder - change-folder
         * @param {number} folderId 
         * @param {number} destFolderId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aiFolderChangeFolderPostForm(folderId: number, destFolderId: number, file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AiFolderApiAxiosParamCreator(configuration).aiFolderChangeFolderPostForm(folderId, destFolderId, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary ai-folder - delete
         * @param {number} folderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aiFolderDeleteDelete(folderId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AiFolderApiAxiosParamCreator(configuration).aiFolderDeleteDelete(folderId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary ai-folder - new-name
         * @param {number} folderId 
         * @param {string} name 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aiFolderNewNamePostForm(folderId: number, name: string, file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AiFolderApiAxiosParamCreator(configuration).aiFolderNewNamePostForm(folderId, name, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary ai-folder - rename
         * @param {number} folderId 
         * @param {string} newName 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aiFolderRenamePostForm(folderId: number, newName: string, file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AiFolderApiAxiosParamCreator(configuration).aiFolderRenamePostForm(folderId, newName, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AiFolderApi - factory interface
 * @export
 */
export const AiFolderApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary ai-folder - change-folder
         * @param {number} folderId 
         * @param {number} destFolderId 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aiFolderChangeFolderPostForm(folderId: number, destFolderId: number, file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AiFolderApiFp(configuration).aiFolderChangeFolderPostForm(folderId, destFolderId, file, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary ai-folder - delete
         * @param {number} folderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aiFolderDeleteDelete(folderId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AiFolderApiFp(configuration).aiFolderDeleteDelete(folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary ai-folder - new-name
         * @param {number} folderId 
         * @param {string} name 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aiFolderNewNamePostForm(folderId: number, name: string, file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AiFolderApiFp(configuration).aiFolderNewNamePostForm(folderId, name, file, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary ai-folder - rename
         * @param {number} folderId 
         * @param {string} newName 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aiFolderRenamePostForm(folderId: number, newName: string, file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AiFolderApiFp(configuration).aiFolderRenamePostForm(folderId, newName, file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AiFolderApi - object-oriented interface
 * @export
 * @class AiFolderApi
 * @extends {BaseAPI}
 */
export class AiFolderApi extends BaseAPI {
    /**
     * 
     * @summary ai-folder - change-folder
     * @param {number} folderId 
     * @param {number} destFolderId 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AiFolderApi
     */
    public async aiFolderChangeFolderPostForm(folderId: number, destFolderId: number, file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AiFolderApiFp(this.configuration).aiFolderChangeFolderPostForm(folderId, destFolderId, file, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary ai-folder - delete
     * @param {number} folderId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AiFolderApi
     */
    public async aiFolderDeleteDelete(folderId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AiFolderApiFp(this.configuration).aiFolderDeleteDelete(folderId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary ai-folder - new-name
     * @param {number} folderId 
     * @param {string} name 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AiFolderApi
     */
    public async aiFolderNewNamePostForm(folderId: number, name: string, file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AiFolderApiFp(this.configuration).aiFolderNewNamePostForm(folderId, name, file, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary ai-folder - rename
     * @param {number} folderId 
     * @param {string} newName 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AiFolderApi
     */
    public async aiFolderRenamePostForm(folderId: number, newName: string, file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AiFolderApiFp(this.configuration).aiFolderRenamePostForm(folderId, newName, file, options).then((request) => request(this.axios, this.basePath));
    }
}
