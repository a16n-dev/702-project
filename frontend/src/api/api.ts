/* tslint:disable */
/* eslint-disable */
/**
 * HCI Backend
 * HCI Backend
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateReflectionRequest
 */
export interface CreateReflectionRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateReflectionRequest
     */
    'answers': Array<string>;
    /**
     * 
     * @type {object}
     * @memberof CreateReflectionRequest
     */
    'levelData': object;
}
/**
 * 
 * @export
 * @interface GetReflections200Response
 */
export interface GetReflections200Response {
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof GetReflections200Response
     */
    'answers': Array<Array<string>>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetReflections200Response
     */
    'questions': Array<string>;
}
/**
 * Schema which represents the JSON returned for errors and other conditions which expect status updates.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * The status message.
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get api info
         * @summary Get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Get api info
         * @summary Get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rootGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rootGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Get api info
         * @summary Get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootGet(options?: any): AxiosPromise<void> {
            return localVarFp.rootGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Get api info
     * @summary Get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public rootGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).rootGet(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ReflectionsApi - axios parameter creator
 * @export
 */
export const ReflectionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a reflection
         * @summary Create a reflection
         * @param {CreateReflectionRequest} createReflectionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReflection: async (createReflectionRequest: CreateReflectionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createReflectionRequest' is not null or undefined
            assertParamExists('createReflection', 'createReflectionRequest', createReflectionRequest)
            const localVarPath = `/reflections`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createReflectionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all reflections
         * @summary Get all reflections
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReflections: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/reflections`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReflectionsApi - functional programming interface
 * @export
 */
export const ReflectionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReflectionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a reflection
         * @summary Create a reflection
         * @param {CreateReflectionRequest} createReflectionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReflection(createReflectionRequest: CreateReflectionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createReflection(createReflectionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all reflections
         * @summary Get all reflections
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReflections(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetReflections200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReflections(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReflectionsApi - factory interface
 * @export
 */
export const ReflectionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReflectionsApiFp(configuration)
    return {
        /**
         * Create a reflection
         * @summary Create a reflection
         * @param {CreateReflectionRequest} createReflectionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReflection(createReflectionRequest: CreateReflectionRequest, options?: any): AxiosPromise<void> {
            return localVarFp.createReflection(createReflectionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all reflections
         * @summary Get all reflections
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReflections(options?: any): AxiosPromise<GetReflections200Response> {
            return localVarFp.getReflections(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReflectionsApi - object-oriented interface
 * @export
 * @class ReflectionsApi
 * @extends {BaseAPI}
 */
export class ReflectionsApi extends BaseAPI {
    /**
     * Create a reflection
     * @summary Create a reflection
     * @param {CreateReflectionRequest} createReflectionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReflectionsApi
     */
    public createReflection(createReflectionRequest: CreateReflectionRequest, options?: AxiosRequestConfig) {
        return ReflectionsApiFp(this.configuration).createReflection(createReflectionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all reflections
     * @summary Get all reflections
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReflectionsApi
     */
    public getReflections(options?: AxiosRequestConfig) {
        return ReflectionsApiFp(this.configuration).getReflections(options).then((request) => request(this.axios, this.basePath));
    }
}

