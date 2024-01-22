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
 * TestScenarioApi - axios parameter creator
 * @export
 */
export const TestScenarioApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary test-scenario - add-leek
         * @param {number} scenarioId 
         * @param {number} leek 
         * @param {number} team 
         * @param {string} ai 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testScenarioAddLeekPostForm: async (scenarioId: number, leek: number, team: number, ai: string, file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scenarioId' is not null or undefined
            if (scenarioId === null || scenarioId === undefined) {
                throw new RequiredError('scenarioId','Required parameter scenarioId was null or undefined when calling testScenarioAddLeekPostForm.');
            }
            // verify required parameter 'leek' is not null or undefined
            if (leek === null || leek === undefined) {
                throw new RequiredError('leek','Required parameter leek was null or undefined when calling testScenarioAddLeekPostForm.');
            }
            // verify required parameter 'team' is not null or undefined
            if (team === null || team === undefined) {
                throw new RequiredError('team','Required parameter team was null or undefined when calling testScenarioAddLeekPostForm.');
            }
            // verify required parameter 'ai' is not null or undefined
            if (ai === null || ai === undefined) {
                throw new RequiredError('ai','Required parameter ai was null or undefined when calling testScenarioAddLeekPostForm.');
            }
            const localVarPath = `/test-scenario/add-leek`;
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

            if (scenarioId !== undefined) {
                localVarQueryParameter['scenario_id'] = scenarioId;
            }

            if (leek !== undefined) {
                localVarQueryParameter['leek'] = leek;
            }

            if (team !== undefined) {
                localVarQueryParameter['team'] = team;
            }

            if (ai !== undefined) {
                localVarQueryParameter['ai'] = ai;
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
         * @summary test-scenario - delete
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testScenarioDeleteDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling testScenarioDeleteDelete.');
            }
            const localVarPath = `/test-scenario/delete`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
         * @summary test-scenario - delete-leek
         * @param {number} scenarioId 
         * @param {number} leek 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testScenarioDeleteLeekDelete: async (scenarioId: number, leek: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scenarioId' is not null or undefined
            if (scenarioId === null || scenarioId === undefined) {
                throw new RequiredError('scenarioId','Required parameter scenarioId was null or undefined when calling testScenarioDeleteLeekDelete.');
            }
            // verify required parameter 'leek' is not null or undefined
            if (leek === null || leek === undefined) {
                throw new RequiredError('leek','Required parameter leek was null or undefined when calling testScenarioDeleteLeekDelete.');
            }
            const localVarPath = `/test-scenario/delete-leek`;
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

            if (scenarioId !== undefined) {
                localVarQueryParameter['scenario_id'] = scenarioId;
            }

            if (leek !== undefined) {
                localVarQueryParameter['leek'] = leek;
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
         * @summary test-scenario - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testScenarioGetAllGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/test-scenario/get-all`;
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
        /**
         * 
         * @summary test-scenario - new
         * @param {string} name 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testScenarioNewPostForm: async (name: string, file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling testScenarioNewPostForm.');
            }
            const localVarPath = `/test-scenario/new`;
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
         * @summary test-scenario - update
         * @param {number} id 
         * @param {string} data 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testScenarioUpdatePostForm: async (id: number, data: string, file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling testScenarioUpdatePostForm.');
            }
            // verify required parameter 'data' is not null or undefined
            if (data === null || data === undefined) {
                throw new RequiredError('data','Required parameter data was null or undefined when calling testScenarioUpdatePostForm.');
            }
            const localVarPath = `/test-scenario/update`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (data !== undefined) {
                localVarQueryParameter['data'] = data;
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
 * TestScenarioApi - functional programming interface
 * @export
 */
export const TestScenarioApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary test-scenario - add-leek
         * @param {number} scenarioId 
         * @param {number} leek 
         * @param {number} team 
         * @param {string} ai 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioAddLeekPostForm(scenarioId: number, leek: number, team: number, ai: string, file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TestScenarioApiAxiosParamCreator(configuration).testScenarioAddLeekPostForm(scenarioId, leek, team, ai, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary test-scenario - delete
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioDeleteDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TestScenarioApiAxiosParamCreator(configuration).testScenarioDeleteDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary test-scenario - delete-leek
         * @param {number} scenarioId 
         * @param {number} leek 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioDeleteLeekDelete(scenarioId: number, leek: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TestScenarioApiAxiosParamCreator(configuration).testScenarioDeleteLeekDelete(scenarioId, leek, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary test-scenario - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioGetAllGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TestScenarioApiAxiosParamCreator(configuration).testScenarioGetAllGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary test-scenario - new
         * @param {string} name 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioNewPostForm(name: string, file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TestScenarioApiAxiosParamCreator(configuration).testScenarioNewPostForm(name, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary test-scenario - update
         * @param {number} id 
         * @param {string} data 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioUpdatePostForm(id: number, data: string, file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TestScenarioApiAxiosParamCreator(configuration).testScenarioUpdatePostForm(id, data, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TestScenarioApi - factory interface
 * @export
 */
export const TestScenarioApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary test-scenario - add-leek
         * @param {number} scenarioId 
         * @param {number} leek 
         * @param {number} team 
         * @param {string} ai 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioAddLeekPostForm(scenarioId: number, leek: number, team: number, ai: string, file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TestScenarioApiFp(configuration).testScenarioAddLeekPostForm(scenarioId, leek, team, ai, file, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary test-scenario - delete
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioDeleteDelete(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TestScenarioApiFp(configuration).testScenarioDeleteDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary test-scenario - delete-leek
         * @param {number} scenarioId 
         * @param {number} leek 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioDeleteLeekDelete(scenarioId: number, leek: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TestScenarioApiFp(configuration).testScenarioDeleteLeekDelete(scenarioId, leek, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary test-scenario - get-all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioGetAllGet(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TestScenarioApiFp(configuration).testScenarioGetAllGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary test-scenario - new
         * @param {string} name 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioNewPostForm(name: string, file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TestScenarioApiFp(configuration).testScenarioNewPostForm(name, file, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary test-scenario - update
         * @param {number} id 
         * @param {string} data 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testScenarioUpdatePostForm(id: number, data: string, file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TestScenarioApiFp(configuration).testScenarioUpdatePostForm(id, data, file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TestScenarioApi - object-oriented interface
 * @export
 * @class TestScenarioApi
 * @extends {BaseAPI}
 */
export class TestScenarioApi extends BaseAPI {
    /**
     * 
     * @summary test-scenario - add-leek
     * @param {number} scenarioId 
     * @param {number} leek 
     * @param {number} team 
     * @param {string} ai 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestScenarioApi
     */
    public async testScenarioAddLeekPostForm(scenarioId: number, leek: number, team: number, ai: string, file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TestScenarioApiFp(this.configuration).testScenarioAddLeekPostForm(scenarioId, leek, team, ai, file, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary test-scenario - delete
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestScenarioApi
     */
    public async testScenarioDeleteDelete(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TestScenarioApiFp(this.configuration).testScenarioDeleteDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary test-scenario - delete-leek
     * @param {number} scenarioId 
     * @param {number} leek 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestScenarioApi
     */
    public async testScenarioDeleteLeekDelete(scenarioId: number, leek: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TestScenarioApiFp(this.configuration).testScenarioDeleteLeekDelete(scenarioId, leek, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary test-scenario - get-all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestScenarioApi
     */
    public async testScenarioGetAllGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TestScenarioApiFp(this.configuration).testScenarioGetAllGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary test-scenario - new
     * @param {string} name 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestScenarioApi
     */
    public async testScenarioNewPostForm(name: string, file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TestScenarioApiFp(this.configuration).testScenarioNewPostForm(name, file, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary test-scenario - update
     * @param {number} id 
     * @param {string} data 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestScenarioApi
     */
    public async testScenarioUpdatePostForm(id: number, data: string, file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TestScenarioApiFp(this.configuration).testScenarioUpdatePostForm(id, data, file, options).then((request) => request(this.axios, this.basePath));
    }
}
