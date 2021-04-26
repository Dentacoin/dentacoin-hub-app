(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/common/fesm2015/http.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/http.js ***!
  \*******************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @license Angular v8.1.3
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@publicApi
 * @abstract
 */
class HttpHandler {
}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@publicApi
 * @abstract
 */
class HttpBackend {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Represents the header configuration options for an HTTP request.
 *
 * Instances should be assumed immutable with lazy parsing.
 *
 * \@publicApi
 */
class HttpHeaders {
    /**
     * Constructs a new HTTP header object with the given values.
     * @param {?=} headers
     */
    constructor(headers) {
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = (/**
             * @return {?}
             */
            () => {
                this.headers = new Map();
                headers.split('\n').forEach((/**
                 * @param {?} line
                 * @return {?}
                 */
                line => {
                    /** @type {?} */
                    const index = line.indexOf(':');
                    if (index > 0) {
                        /** @type {?} */
                        const name = line.slice(0, index);
                        /** @type {?} */
                        const key = name.toLowerCase();
                        /** @type {?} */
                        const value = line.slice(index + 1).trim();
                        this.maybeSetNormalizedName(name, key);
                        if (this.headers.has(key)) {
                            (/** @type {?} */ (this.headers.get(key))).push(value);
                        }
                        else {
                            this.headers.set(key, [value]);
                        }
                    }
                }));
            });
        }
        else {
            this.lazyInit = (/**
             * @return {?}
             */
            () => {
                this.headers = new Map();
                Object.keys(headers).forEach((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => {
                    /** @type {?} */
                    let values = headers[name];
                    /** @type {?} */
                    const key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        this.headers.set(key, values);
                        this.maybeSetNormalizedName(name, key);
                    }
                }));
            });
        }
    }
    /**
     * Checks for existence of a header by a given name.
     *
     * @param {?} name The header name to check for existence.
     *
     * @return {?} Whether the header exits.
     */
    has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first header value that matches a given name.
     *
     * @param {?} name The header name to retrieve.
     *
     * @return {?} A string if the header exists, null otherwise
     */
    get(name) {
        this.init();
        /** @type {?} */
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @return {?} A list of header names.
     */
    keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of header values for a given header name.
     *
     * @param {?} name The header name from which to retrieve the values.
     *
     * @return {?} A string of values if the header exists, null otherwise.
     */
    getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new header value to the existing set of
     * header values.
     *
     * @param {?} name The header name for which to append the values.
     *
     * @param {?} value
     * @return {?} A clone of the HTTP header object with the value appended.
     */
    append(name, value) {
        return this.clone({ name, value, op: 'a' });
    }
    /**
     * Sets a header value for a given name. If the header name already exists,
     * its value is replaced with the given value.
     *
     * @param {?} name The header name.
     * @param {?} value The value to set or overide for a given name.
     *
     * @return {?} A clone of the HTTP header object with the newly set header value.
     */
    set(name, value) {
        return this.clone({ name, value, op: 's' });
    }
    /**
     * Deletes all header values for a given name.
     *
     * @param {?} name The header name.
     * @param {?=} value The header values to delete for a given name.
     *
     * @return {?} A clone of the HTTP header object.
     */
    delete(name, value) {
        return this.clone({ name, value, op: 'd' });
    }
    /**
     * @private
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach((/**
                 * @param {?} update
                 * @return {?}
                 */
                update => this.applyUpdate(update)));
                this.lazyUpdate = null;
            }
        }
    }
    /**
     * @private
     * @param {?} other
     * @return {?}
     */
    copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.headers.set(key, (/** @type {?} */ (other.headers.get(key))));
            this.normalizedNames.set(key, (/** @type {?} */ (other.normalizedNames.get(key))));
        }));
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    clone(update) {
        /** @type {?} */
        const clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    applyUpdate(update) {
        /** @type {?} */
        const key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                /** @type {?} */
                let value = (/** @type {?} */ (update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                /** @type {?} */
                const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push(...value);
                this.headers.set(key, base);
                break;
            case 'd':
                /** @type {?} */
                const toDelete = (/** @type {?} */ (update.value));
                if (!toDelete) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    /** @type {?} */
                    let existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter((/**
                     * @param {?} value
                     * @return {?}
                     */
                    value => toDelete.indexOf(value) === -1));
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    }
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => fn((/** @type {?} */ (this.normalizedNames.get(key))), (/** @type {?} */ (this.headers.get(key))))));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * \@publicApi
 */
class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param {?} key The key name.
     * @return {?} The encoded key name.
     */
    encodeKey(key) { return standardEncoding(key); }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param {?} value The value.
     * @return {?} The encoded value.
     */
    encodeValue(value) { return standardEncoding(value); }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param {?} key The encoded key name.
     * @return {?} The decoded key name.
     */
    decodeKey(key) { return decodeURIComponent(key); }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param {?} value The encoded value.
     * @return {?} The decoded value.
     */
    decodeValue(value) { return decodeURIComponent(value); }
}
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    /** @type {?} */
    const map = new Map();
    if (rawParams.length > 0) {
        /** @type {?} */
        const params = rawParams.split('&');
        params.forEach((/**
         * @param {?} param
         * @return {?}
         */
        (param) => {
            /** @type {?} */
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            /** @type {?} */
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        }));
    }
    return map;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * \@publicApi
 */
class HttpParams {
    /**
     * @param {?=} options
     */
    constructor(options = (/** @type {?} */ ({}))) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const value = ((/** @type {?} */ (options.fromObject)))[key];
                (/** @type {?} */ (this.map)).set(key, Array.isArray(value) ? value : [value]);
            }));
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param {?} param The parameter name.
     * @return {?} True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return (/** @type {?} */ (this.map)).has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param {?} param The parameter name.
     * @return {?} The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        /** @type {?} */
        const res = (/** @type {?} */ (this.map)).get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param {?} param The parameter name.
     * @return {?} All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return (/** @type {?} */ (this.map)).get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @return {?} The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from((/** @type {?} */ (this.map)).keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value to add.
     * @return {?} A new body with the appended value.
     */
    append(param, value) { return this.clone({ param, value, op: 'a' }); }
    /**
     * Replaces the value for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value.
     * @return {?} A new body with the new value.
     */
    set(param, value) { return this.clone({ param, value, op: 's' }); }
    /**
     * Removes a given value or all values from a parameter.
     * @param {?} param The parameter name.
     * @param {?=} value The value to remove, if provided.
     * @return {?} A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) { return this.clone({ param, value, op: 'd' }); }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    toString() {
        this.init();
        return this.keys()
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const eKey = this.encoder.encodeKey(key);
            return (/** @type {?} */ ((/** @type {?} */ (this.map)).get(key))).map((/**
             * @param {?} value
             * @return {?}
             */
            value => eKey + '=' + this.encoder.encodeValue(value)))
                .join('&');
        }))
            .join('&');
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    clone(update) {
        /** @type {?} */
        const clone = new HttpParams((/** @type {?} */ ({ encoder: this.encoder })));
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (/** @type {?} */ (this.map)).set(key, (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.cloneFrom)).map)).get(key))))));
            (/** @type {?} */ (this.updates)).forEach((/**
             * @param {?} update
             * @return {?}
             */
            update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        /** @type {?} */
                        const base = (update.op === 'a' ? (/** @type {?} */ (this.map)).get(update.param) : undefined) || [];
                        base.push((/** @type {?} */ (update.value)));
                        (/** @type {?} */ (this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            /** @type {?} */
                            let base = (/** @type {?} */ (this.map)).get(update.param) || [];
                            /** @type {?} */
                            const idx = base.indexOf(update.value);
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                (/** @type {?} */ (this.map)).set(update.param, base);
                            }
                            else {
                                (/** @type {?} */ (this.map)).delete(update.param);
                            }
                        }
                        else {
                            (/** @type {?} */ (this.map)).delete(update.param);
                            break;
                        }
                }
            }));
            this.cloneFrom = this.updates = null;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@publicApi
 * @template T
 */
class HttpRequest {
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} third
     * @param {?=} fourth
     */
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        /** @type {?} */
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? (/** @type {?} */ (third)) : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = (/** @type {?} */ (third));
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            /** @type {?} */
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                /** @type {?} */
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                /** @type {?} */
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return ((/** @type {?} */ (this.body))).toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        /** @type {?} */
        const method = update.method || this.method;
        /** @type {?} */
        const url = update.url || this.url;
        /** @type {?} */
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        /** @type {?} */
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        /** @type {?} */
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        /** @type {?} */
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        /** @type {?} */
        let headers = update.headers || this.headers;
        /** @type {?} */
        let params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((/**
                 * @param {?} headers
                 * @param {?} name
                 * @return {?}
                 */
                (headers, name) => headers.set(name, (/** @type {?} */ (update.setHeaders))[name])), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((/**
             * @param {?} params
             * @param {?} param
             * @return {?}
             */
            (params, param) => params.set(param, (/** @type {?} */ (update.setParams))[param])), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params, headers, reportProgress, responseType, withCredentials,
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const HttpEventType = {
    /**
     * The request was sent out over the wire.
     */
    Sent: 0,
    /**
     * An upload progress event was received.
     */
    UploadProgress: 1,
    /**
     * The response status code and headers were received.
     */
    ResponseHeader: 2,
    /**
     * A download progress event was received.
     */
    DownloadProgress: 3,
    /**
     * The full response including the body was received.
     */
    Response: 4,
    /**
     * A custom event from an interceptor or a backend.
     */
    User: 5,
};
HttpEventType[HttpEventType.Sent] = 'Sent';
HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
HttpEventType[HttpEventType.Response] = 'Response';
HttpEventType[HttpEventType.User] = 'User';
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@publicApi
 * @abstract
 */
class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@publicApi
 * @template T
 */
class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
    /**
     * @param {?} init
     */
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message =
                `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 *
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * \@usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * \@publicApi
 */
class HttpClient {
    /**
     * @param {?} handler
     */
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    request(first, url, options = {}) {
        /** @type {?} */
        let req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = (/** @type {?} */ (first));
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            /** @type {?} */
            let headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            /** @type {?} */
            let params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams((/** @type {?} */ ({ fromObject: options.params })));
                }
            }
            // Construct the request.
            req = new HttpRequest(first, (/** @type {?} */ (url)), (options.body !== undefined ? options.body : null), {
                headers,
                params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        /** @type {?} */
        const events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((/**
         * @param {?} req
         * @return {?}
         */
        (req) => this.handler.handle(req))));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        /** @type {?} */
        const res$ = (/** @type {?} */ (events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event instanceof HttpResponse)))));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        })));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        })));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        })));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => res.body)));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
        }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param {?} url     The endpoint URL.
     * @param {?=} options The HTTP options to send with the request.
     *
     * @return {?}
     */
    delete(url, options = {}) {
        return this.request('DELETE', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    get(url, options = {}) {
        return this.request('GET', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    head(url, options = {}) {
        return this.request('HEAD', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @template T
     * @param {?} url The resource URL.
     * @param {?} callbackParam The callback function name.
     *
     * @return {?}
     */
    jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    options(url, options = {}) {
        return this.request('OPTIONS', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    patch(url, body, options = {}) {
        return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    post(url, body, options = {}) {
        return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    put(url, body, options = {}) {
        return this.request('PUT', url, addBody(options, body));
    }
}
HttpClient.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpClient.ctorParameters = () => [
    { type: HttpHandler }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
class HttpInterceptorHandler {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * \@publicApi
 * @type {?}
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
class NoopInterceptor {
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
/** @type {?} */
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
/** @type {?} */
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
/** @type {?} */
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
/** @type {?} */
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 * @abstract
 */
class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * \@publicApi
 */
class JsonpClientBackend {
    /**
     * @param {?} callbackMap
     * @param {?} document
     */
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @private
     * @return {?}
     */
    nextCallback() { return `ng_jsonp_callback_${nextRequestId++}`; }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            /** @type {?} */
            const callback = this.nextCallback();
            /** @type {?} */
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            /** @type {?} */
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            /** @type {?} */
            let body = null;
            // Whether the response callback has been called.
            /** @type {?} */
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            /** @type {?} */
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (/**
             * @param {?=} data
             * @return {?}
             */
            (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            });
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            /** @type {?} */
            const cleanup = (/**
             * @return {?}
             */
            () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            });
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            /** @type {?} */
            const onLoad = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body,
                    status: 200,
                    statusText: 'OK', url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            });
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            /** @type {?} */
            const onError = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error', url,
                }));
            });
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return (/**
             * @return {?}
             */
            () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            });
        }));
    }
}
JsonpClientBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * \@publicApi
 */
class JsonpInterceptor {
    /**
     * @param {?} jsonp
     */
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param {?} req The outgoing request object to handle.
     * @param {?} next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @return {?} An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle((/** @type {?} */ (req)));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@publicApi
 * @abstract
 */
class XhrFactory {
}
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
class BrowserXhr {
    constructor() { }
    /**
     * @return {?}
     */
    build() { return (/** @type {?} */ ((new XMLHttpRequest()))); }
}
BrowserXhr.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
BrowserXhr.ctorParameters = () => [];
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * \@publicApi
 */
class HttpXhrBackend {
    /**
     * @param {?} xhrFactory
     */
    constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     */
    handle(req) {
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error(`Attempted to construct Jsonp request without JsonpClientModule installed.`);
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            /** @type {?} */
            const xhr = this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach((/**
             * @param {?} name
             * @param {?} values
             * @return {?}
             */
            (name, values) => xhr.setRequestHeader(name, values.join(','))));
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                /** @type {?} */
                const detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                /** @type {?} */
                const responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = (/** @type {?} */ (((responseType !== 'json') ? responseType : 'text')));
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            /** @type {?} */
            const reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            /** @type {?} */
            let headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            /** @type {?} */
            const partialFromXhr = (/**
             * @return {?}
             */
            () => {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                /** @type {?} */
                const status = xhr.status === 1223 ? 204 : xhr.status;
                /** @type {?} */
                const statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                /** @type {?} */
                const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                /** @type {?} */
                const url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                return headerResponse;
            });
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            /** @type {?} */
            const onLoad = (/**
             * @return {?}
             */
            () => {
                // Read response state from the memoized partial data.
                let { headers, status, statusText, url } = partialFromXhr();
                // The body will be read out if present.
                /** @type {?} */
                let body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                /** @type {?} */
                let ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    /** @type {?} */
                    const originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = (/** @type {?} */ ({ error, text: body }));
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                }
            });
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            /** @type {?} */
            const onError = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                const { url } = partialFromXhr();
                /** @type {?} */
                const res = new HttpErrorResponse({
                    error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            });
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            /** @type {?} */
            let sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            /** @type {?} */
            const onDownProgress = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                /** @type {?} */
                let progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            });
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            /** @type {?} */
            const onUpProgress = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Upload progress events are simpler. Begin building the progress
                // event.
                /** @type {?} */
                let progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            });
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send((/** @type {?} */ (reqBody)));
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return (/**
             * @return {?}
             */
            () => {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            });
        }));
    }
}
HttpXhrBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpXhrBackend.ctorParameters = () => [
    { type: XhrFactory }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
/** @type {?} */
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@publicApi
 * @abstract
 */
class HttpXsrfTokenExtractor {
}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
    /**
     * @param {?} doc
     * @param {?} platform
     * @param {?} cookieName
     */
    constructor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    getToken() {
        if (this.platform === 'server') {
            return null;
        }
        /** @type {?} */
        const cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    }
}
HttpXsrfCookieExtractor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpXsrfCookieExtractor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
];
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
    /**
     * @param {?} tokenService
     * @param {?} headerName
     */
    constructor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        /** @type {?} */
        const token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    }
}
HttpXsrfInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpXsrfInterceptor.ctorParameters = () => [
    { type: HttpXsrfTokenExtractor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
class HttpInterceptingHandler {
    /**
     * @param {?} backend
     * @param {?} injector
     */
    constructor(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        if (this.chain === null) {
            /** @type {?} */
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight((/**
             * @param {?} next
             * @param {?} interceptor
             * @return {?}
             */
            (next, interceptor) => new HttpInterceptorHandler(next, interceptor)), this.backend);
        }
        return this.chain.handle(req);
    }
}
HttpInterceptingHandler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpInterceptingHandler.ctorParameters = () => [
    { type: HttpBackend },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * \@publicApi
 */
class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param {?=} options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     * @return {?}
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    }
}
HttpClientXsrfModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */
class HttpClientModule {
}
HttpClientModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */
class HttpClientJsonpModule {
}
HttpClientJsonpModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵangular_packages_router_router_l, View_ɵangular_packages_router_router_l_0, View_ɵangular_packages_router_router_l_Host_0, ɵangular_packages_router_router_lNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵangular_packages_router_router_l", function() { return RenderType_ɵangular_packages_router_router_l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵangular_packages_router_router_l_0", function() { return View_ɵangular_packages_router_router_l_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵangular_packages_router_router_l_Host_0", function() { return View_ɵangular_packages_router_router_l_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_router_router_lNgFactory", function() { return ɵangular_packages_router_router_lNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵangular_packages_router_router_lNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵangular_packages_router_router_l = [];
var RenderType_ɵangular_packages_router_router_l = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵangular_packages_router_router_l, data: {} });

function View_ɵangular_packages_router_router_l_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵangular_packages_router_router_l_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵangular_packages_router_router_l_0, RenderType_ɵangular_packages_router_router_l)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], [], null, null)], null, null); }
var ɵangular_packages_router_router_lNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], View_ɵangular_packages_router_router_l_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/_services/additional.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/additional.service.ts ***!
  \*************************************************/
/*! exports provided: AdditionalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalService", function() { return AdditionalService; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class AdditionalService {
    constructor() {
    }
    // showing front end loader
    showLoader() {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0__('.camping-loader').hasClass('loaded')) {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.camping-loader').html('<div class="response-layer"><div class="wrapper"><picture itemscope="" itemtype="http://schema.org/ImageObject"><source media="(max-width: 768px)" srcset="assets/images/dcn-flipping-coin-logo-loader-v3-mobile.gif"><img itemprop="contentUrl" src="assets/images/dcn-flipping-coin-logo-loader-v3_desktop.gif" class="max-width-250 max-width-xs-200" alt="Loader"></picture></div></div>').addClass('loaded');
            jquery__WEBPACK_IMPORTED_MODULE_0__('.camping-loader .response-layer').show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.camping-loader .response-layer').show();
        }
    }
    // hiding front end loader
    hideLoader() {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.camping-loader .response-layer').hide();
    }
    dateObjToFormattedDate(object) {
        let date;
        let month;
        if (object.getDate() < 10) {
            date = '0' + object.getDate();
        }
        else {
            date = object.getDate();
        }
        if (object.getMonth() + 1 < 10) {
            month = '0' + (object.getMonth() + 1);
        }
        else {
            month = object.getMonth() + 1;
        }
        return date + '/' + month + '/' + object.getFullYear();
    }
    generateAccountLink() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hybrid === true) {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].accountDomain + '/custom-cookie?mobile-app=hubapp&slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_token);
        }
        else {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].accountDomain + '/custom-cookie?slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentDentist')).encrypted_token);
        }
    }
    generateNotAPartnerDentistAccountLink() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hybrid === true) {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].accountDomain + '/custom-cookie?mobile-app=hubapp&slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).encrypted_token);
        }
        else {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].accountDomain + '/custom-cookie?slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).encrypted_token);
        }
    }
}
AdditionalService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function AdditionalService_Factory() { return new AdditionalService(); }, token: AdditionalService, providedIn: "root" });


/***/ }),

/***/ "./src/app/_services/authentication-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/_services/authentication-service.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationServiceService", function() { return AuthenticationServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redirects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests.service */ "./src/app/_services/requests.service.ts");







class AuthenticationServiceService {
    constructor(router, http, redirectsService, requestsService) {
        this.router = router;
        this.http = http;
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.isDentistLoggedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.hasDentistStorageSession());
        this.isNotAPartnerDentistLoggedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.hasNotAPartnerDentistStorageSession());
        this.isPatientLoggedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.hasPatientStorageSession());
        this.generalError = false;
        this.dentistAuthFailed = false;
        this.notAPartner = false;
    }
    dentistLogin(email, password) {
        this.notAPartner = false;
        this.dentistAuthFailed = false;
        this.generalError = false;
        const ParseHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('email', email).set('password', password).set('platform', 'dentacoin').set('type', 'dentist');
        this.requestsService.dentistLogin(body.toString()).subscribe((response) => {
            if (response.success) {
                if (response.data.is_partner == true || response.data.is_hub_app_dentist == true) {
                    console.log('partner');
                    window.scrollTo(0, 0);
                    window.localStorage.setItem('currentDentist', JSON.stringify({
                        id: response.data.id,
                        token: response.token,
                        encrypted_id: response.encrypted_data.encrypted_id,
                        encrypted_token: response.encrypted_data.encrypted_token,
                        encrypted_type: response.encrypted_data.encrypted_type
                    }));
                    this.isDentistLoggedSubject.next(true);
                    this.redirectsService.redirectToAdmin();
                }
                else {
                    console.log('not a partner');
                    window.scrollTo(0, 0);
                    window.localStorage.setItem('currentNotAPartnerDentist', JSON.stringify({
                        id: response.data.id,
                        token: response.token,
                        encrypted_id: response.encrypted_data.encrypted_id,
                        encrypted_token: response.encrypted_data.encrypted_token,
                        encrypted_type: response.encrypted_data.encrypted_type
                    }));
                    this.isNotAPartnerDentistLoggedSubject.next(true);
                    this.redirectsService.redirectToLandingPage();
                }
            }
            else {
                this.dentistAuthFailed = true;
            }
        });
        /*this.http.post(environment.coreDbApiDomain + '/api/login', body.toString(), ParseHeaders).subscribe({
            next: (response: any) => {
                console.log(response, 'dentistLogin');
                if (response.success) {
                    if (response.data.is_partner == true) {
                        console.log('partner');

                        window.scrollTo(0, 0);
                        window.localStorage.setItem('currentDentist', JSON.stringify({
                            id: response.data.id,
                            token: response.token
                            /!*encrypted_id: coredbResponse.encrypted_id,
                            encrypted_token: coredbResponse.encrypted_token,
                            encrypted_type: coredbResponse.encrypted_type*!/
                        }));

                        this.isDentistLoggedSubject.next(true);
                        this.redirectsService.redirectToAdmin();
                    } else {
                        console.log('not partner');
                        this.notAPartner = true;
                    }
                } else {
                    this.dentistAuthFailed = true;
                }
            },
            error: error => {
                this.generalError = true;
            }
        });*/
    }
    logout(redirect) {
        window.localStorage.clear();
        this.isPatientLoggedSubject.next(false);
        this.isDentistLoggedSubject.next(false);
        this.isNotAPartnerDentistLoggedSubject.next(false);
        if (redirect === 'dentist') {
            this.redirectsService.redirectToAdminLogin();
        }
        else if (redirect === 'patient') {
            this.redirectsService.redirectToPatientLogin('login');
        }
    }
    hasDentistStorageSession() {
        return !!window.localStorage.getItem('currentDentist');
    }
    hasNotAPartnerDentistStorageSession() {
        return !!window.localStorage.getItem('currentNotAPartnerDentist');
    }
    hasPatientStorageSession() {
        return !!window.localStorage.getItem('currentPatient');
    }
    isDentistLoggedIn() {
        return this.isDentistLoggedSubject.asObservable();
    }
    isNotAPartnerDentistLoggedIn() {
        return this.isNotAPartnerDentistLoggedSubject.asObservable();
    }
    isPatientLoggedIn() {
        return this.isPatientLoggedSubject.asObservable();
    }
    redirectToLoginIfNotLoggedIn() {
        if (!this.hasDentistStorageSession()) {
            this.redirectsService.redirectToAdminLogin();
        }
    }
}
AuthenticationServiceService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function AuthenticationServiceService_Factory() { return new AuthenticationServiceService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_redirects_service__WEBPACK_IMPORTED_MODULE_4__["RedirectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"])); }, token: AuthenticationServiceService, providedIn: "root" });


/***/ }),

/***/ "./src/app/_services/language.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/language.service.ts ***!
  \***********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);



class LanguageService {
    constructor(translate, activatedRoute, router) {
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    onLangSwitcherChange(lang) {
        this.router.navigateByUrl(this.router.url.substring(0, 1) + lang + this.router.url.substring(3));
    }
}
LanguageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function LanguageService_Factory() { return new LanguageService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); }, token: LanguageService, providedIn: "root" });


/***/ }),

/***/ "./src/app/_services/redirects.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/redirects.service.ts ***!
  \************************************************/
/*! exports provided: RedirectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectsService", function() { return RedirectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);




class RedirectsService {
    constructor(router, translate, ngZone) {
        this.router = router;
        this.translate = translate;
        this.ngZone = ngZone;
    }
    redirectToAdminLogin() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/admin-login')).then();
    }
    redirectToAdmin() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/admin')).then();
    }
    redirectToAdvancedAdmin() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/admin/advanced')).then();
    }
    redirectToMyPatients() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/admin/advanced/my-patients')).then();
    }
    redirectToLoggedHome() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/patients')).then();
    }
    redirectToLandingPage() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang)).then();
    }
    redirectToDentistRequestAccount() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/dentist-request-account')).then();
    }
    redirectToPatientRequestAccount() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/request-account')).then();
    }
    redirectToPatientLogin(type) {
        if (type === 'account-verification') {
            this.ngZone.run(() => this.router.navigate([this.translate.currentLang + '/login'], { state: { successfullyVerifiedAccount: true } })).then();
        }
        else if (type === 'change-password') {
            this.ngZone.run(() => this.router.navigate([this.translate.currentLang + '/login'], { state: { successfullyChangePassword: true } })).then();
        }
        else if (type === 'login') {
            this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/login')).then();
        }
        else {
            this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/' + type)).then();
        }
    }
    redirectToMyWallet() {
        this.router.navigateByUrl(this.translate.currentLang + '/my-wallet');
    }
    redirectToEditAccount() {
        this.router.navigateByUrl(this.translate.currentLang + '/edit-account');
    }
    redirectToManagePrivacy() {
        this.router.navigateByUrl(this.translate.currentLang + '/manage-privacy');
    }
}
RedirectsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function RedirectsService_Factory() { return new RedirectsService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: RedirectsService, providedIn: "root" });


/***/ }),

/***/ "./src/app/_services/requests.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/requests.service.ts ***!
  \***********************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class RequestsService {
    constructor(http) {
        this.http = http;
    }
    getDentacoinDataByExternalProvider(currency) {
        return this.http.get('https://indacoin.com/api/GetCoinConvertAmount/' + currency + '/DCN/100/dentacoin');
    }
    // ===================================== HubApp api methods =====================================
    getDentistData(id) {
        return this.http.get('https://dcn-hub-app-api.dentacoin.com/dentist/get-dentist-data/' + id);
    }
    sendRequestAccountMail(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/send-request-account-mail', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    }
    dentistSendRequestAccountMail(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/dentist/dentist-send-request-account-mail', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    }
    withdraw(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/withdraw', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }
    dentistLogin(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/dentist/coredb-login', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }
    getDentistSlug(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/get-dentist-slug', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }
    getInviteHistory(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/dentist/get-invite-history', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }
    getPushNotificationsHistory(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/dentist/get-push-notifications', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }
    coreDbLogin(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/coredb-login', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }
    getWithdrawHistory(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/get-dcn-withdraw-history', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    }
    requestForgottenPasswordToken(body) {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/request-forgotten-password', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    }
    // ===================================== CoreDB api methods =====================================
    getTitles() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].coreDbApiDomain + '/api/enums');
    }
    getCountries() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].coreDbApiDomain + '/api/countries');
    }
    validatePhone(body) {
        console.log(body, 'body');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].coreDbApiDomain + '/api/phone/', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }
    downloadGDPRData(token) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].coreDbApiDomain + '/api/gdpr/', null, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }
    deleteProfile(body, token) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].coreDbApiDomain + '/api/user/', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }
    editProfile(body, token) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].coreDbApiDomain + '/api/user/', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }
    getUserData(token) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].coreDbApiDomain + '/api/user/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }
    getDCNBalance(token) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].coreDbApiDomain + '/api/balance', null, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }
    getAddresses(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].coreDbApiDomain + '/api/wallet-addresses/' + id);
    }
}
RequestsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function RequestsService_Factory() { return new RequestsService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: RequestsService, providedIn: "root" });


/***/ }),

/***/ "./src/app/admin-login/admin-login.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_AdminLoginComponent, View_AdminLoginComponent_0, View_AdminLoginComponent_Host_0, AdminLoginComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdminLoginComponent", function() { return RenderType_AdminLoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdminLoginComponent_0", function() { return View_AdminLoginComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdminLoginComponent_Host_0", function() { return View_AdminLoginComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponentNgFactory", function() { return AdminLoginComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_AdminLoginComponent = [];
var RenderType_AdminLoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AdminLoginComponent, data: {} });

function View_AdminLoginComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle margin-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("general-error")); _ck(_v, 1, 0, currVal_0); }); }
function View_AdminLoginComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "error-handle margin-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [["class", "text-decoration-underline lato-bold"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.redirectsService.redirectToDentistRequestAccount() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["."]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("not-a-partner-error")); _ck(_v, 1, 0, currVal_0); }); }
function View_AdminLoginComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "error-handle margin-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [["class", "text-decoration-underline lato-bold"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.redirectsService.redirectToDentistRequestAccount() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["."]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("dentist-auth-failed")); _ck(_v, 1, 0, currVal_0); }); }
function View_AdminLoginComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Email is required."]))], null, null); }
function View_AdminLoginComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Please enter valid email."]))], null, null); }
function View_AdminLoginComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdminLoginComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdminLoginComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dentists_form_data.email.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.dentists_form_data.email.errors.email; _ck(_v, 4, 0, currVal_1); }, null); }
function View_AdminLoginComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Password is required."]))], null, null); }
function View_AdminLoginComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdminLoginComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dentists_form_data.password.errors.required; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AdminLoginComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 62, "div", [["class", "container padding-top-150 padding-top-xs-50 padding-top-sm-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 61, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "figure", [["class", "max-width-150 max-width-xs-100 margin-0-auto"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "img", [["alt", "Hub icon"], ["class", "width-100"], ["src", "assets/images/hub-icon-white.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "h1", [["class", "text-center fs-36 fs-xs-26 lato-bold padding-top-10 padding-top-xs-0 padding-bottom-20 padding-bottom-xs-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DENTACOIN HUB APP ADMIN PANEL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 55, "div", [["class", "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 54, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onDentistsFormSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdminLoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdminLoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdminLoginComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 13, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 10, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "label", [["class", "platform-color"], ["for", "dentist-login-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Email address:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "email"], ["id", "dentist-login-email"], ["maxlength", "100"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdminLoginComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 13, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 10, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "label", [["class", "platform-color"], ["for", "dentist-login-password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Password:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "password"], ["id", "dentist-login-password"], ["maxlength", "50"], ["type", "password"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdminLoginComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 2, "div", [["class", "padding-top-30 padding-bottom-10 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 1, "button", [["class", "module platform-custom-button platform-background-color platform-border-color hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["LOGIN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 12, "div", [["class", "padding-top-20 padding-bottom-10 text-center fs-16 calibri-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](52, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 2, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 fs-18 fs-xs-16 lato-bold platform-color"], ["href", "https://account.dentacoin.com/forgotten-password"], ["itemprop", "url"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](55, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" | "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 4, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 fs-18 fs-xs-16 lato-bold platform-color"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](60, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](61, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.dentistsLoginForm; _ck(_v, 10, 0, currVal_7); var currVal_8 = _co.authenticationServiceService.generalError; _ck(_v, 14, 0, currVal_8); var currVal_9 = _co.authenticationServiceService.notAPartner; _ck(_v, 16, 0, currVal_9); var currVal_10 = _co.authenticationServiceService.dentistAuthFailed; _ck(_v, 18, 0, currVal_10); var currVal_19 = "100"; _ck(_v, 25, 0, currVal_19); var currVal_20 = "email"; _ck(_v, 28, 0, currVal_20); var currVal_21 = (_co.dentistsFormSubmitted && _co.dentists_form_data.email.errors); _ck(_v, 32, 0, currVal_21); var currVal_30 = "50"; _ck(_v, 39, 0, currVal_30); var currVal_31 = "password"; _ck(_v, 42, 0, currVal_31); var currVal_32 = (_co.dentistsFormSubmitted && _co.dentists_form_data.password.errors); _ck(_v, 46, 0, currVal_32); var currVal_37 = _ck(_v, 60, 0, (("/" + _co.translate.currentLang) + "/dentist-request-account")); _ck(_v, 59, 0, currVal_37); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassPending; _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).maxlength : null); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassUntouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassTouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassPristine; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassDirty; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassValid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassInvalid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassPending; _ck(_v, 23, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_22 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).maxlength : null); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassUntouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassTouched; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassPristine; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassDirty; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassValid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassInvalid; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassPending; _ck(_v, 37, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 52, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).transform("having-trouble-login")); _ck(_v, 52, 0, currVal_33); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 55, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).transform("forgotten-password-redirect")); _ck(_v, 55, 0, currVal_34); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).target; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).href; _ck(_v, 58, 0, currVal_35, currVal_36); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 61, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).transform("request-account-btn")); _ck(_v, 61, 0, currVal_38); }); }
function View_AdminLoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-admin-login", [], null, null, null, View_AdminLoginComponent_0, RenderType_AdminLoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _admin_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationServiceService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__["RedirectsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AdminLoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-admin-login", _admin_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"], View_AdminLoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin-login/admin-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);


class AdminLoginComponent {
    constructor(router, formBuilder, authenticationServiceService, redirectsService, translate) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.translate = translate;
        this.dentistsFormSubmitted = false;
        this.isDentistLoggedIn = authenticationServiceService.isDentistLoggedSubject;
    }
    ngOnInit() {
        if (this.authenticationServiceService.hasDentistStorageSession()) {
            // logged-in logic
            this.redirectsService.redirectToAdmin();
        }
        else {
            // not logged-in logic
            this.dentistsLoginForm = this.formBuilder.group({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ])),
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
        }
    }
    // convenience getter for easy access to form fields
    get dentists_form_data() {
        return this.dentistsLoginForm.controls;
    }
    // dentist trying to log in
    onDentistsFormSubmit() {
        this.dentistsFormSubmitted = true;
        // stop here if form is invalid
        if (this.dentistsLoginForm.invalid) {
            return;
        }
        this.authenticationServiceService.dentistLogin(this.dentists_form_data.email.value.trim(), this.dentists_form_data.password.value.trim());
    }
}


/***/ }),

/***/ "./src/app/admin/admin.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/admin/admin.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_AdminComponent, View_AdminComponent_0, View_AdminComponent_Host_0, AdminComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdminComponent", function() { return RenderType_AdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdminComponent_0", function() { return View_AdminComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdminComponent_Host_0", function() { return View_AdminComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponentNgFactory", function() { return AdminComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AdminComponent = [];
var RenderType_AdminComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AdminComponent, data: {} });

function View_AdminComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "main", [["class", "admin-main-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_AdminComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-admin-panel", [], null, null, null, View_AdminComponent_0, RenderType_AdminComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], [_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AdminComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-admin-panel", _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], View_AdminComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class AdminComponent {
    constructor(authenticationServiceService) {
        this.authenticationServiceService = authenticationServiceService;
        this.authenticationServiceService.redirectToLoginIfNotLoggedIn();
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_AdvancedAdminPanelComponent, View_AdvancedAdminPanelComponent_0, View_AdvancedAdminPanelComponent_Host_0, AdvancedAdminPanelComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdvancedAdminPanelComponent", function() { return RenderType_AdvancedAdminPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedAdminPanelComponent_0", function() { return View_AdvancedAdminPanelComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedAdminPanelComponent_Host_0", function() { return View_AdvancedAdminPanelComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedAdminPanelComponentNgFactory", function() { return AdvancedAdminPanelComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advanced-admin-panel.component */ "./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_services/additional.service */ "./src/app/_services/additional.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_AdvancedAdminPanelComponent = [];
var RenderType_AdvancedAdminPanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AdvancedAdminPanelComponent, data: {} });

function View_AdvancedAdminPanelComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["selected", ""], ["value", "en"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EN"]))], function (_ck, _v) { var currVal_0 = "en"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "en"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_AdvancedAdminPanelComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["value", "de"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DE"]))], function (_ck, _v) { var currVal_0 = "de"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "de"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_AdvancedAdminPanelComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["value", "en"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EN"]))], function (_ck, _v) { var currVal_0 = "en"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "en"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_AdvancedAdminPanelComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["selected", ""], ["value", "de"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DE"]))], function (_ck, _v) { var currVal_0 = "de"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "de"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_AdvancedAdminPanelComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 138, "div", [["class", "advanced-admin-wrapper fs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 115, "div", [["class", "left-nav inline-block-top color-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 52, "div", [["class", "desktop-visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "figure", [["class", "max-width-40 padding-bottom-60"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.redirectsService.redirectToAdmin() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["alt", "Dentacoin logo"], ["class", "width-100"], ["src", "assets/images/exit.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 7, "div", [["class", "dentist-data padding-bottom-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "figure", [["class", "max-width-100 padding-bottom-10 dentist-avatar"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "img", [["alt", "Dentist avatar"], ["class", "width-100"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "div", [["class", "fs-20 lato-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "div", [["class", "fs-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "a", [["class", "color-white email-link"], ["href", "mailto:sam.johnes@gmail.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 40, "nav", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 39, "ul", [["itemtype", "http://schema.org/SiteNavigationElement"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 9, "a", [["itemprop", "url"], ["routerLink", "my-patients"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](22, { exact: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "span", [["class", "inline-block icon my-patients"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 2, "span", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](25, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 9, "a", [["itemprop", "url"], ["routerLink", "push-notifications"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](33, { exact: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 0, "span", [["class", "inline-block icon push-notifications"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 2, "span", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](36, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 4, "a", [["itemprop", "url"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.redirectsService.redirectToAdmin() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 0, "span", [["class", "inline-block icon app-page"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 2, "span", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](42, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 4, "a", [["itemprop", "url"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 0, "span", [["class", "inline-block icon my-wallet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 2, "span", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](48, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 3, "a", [["href", "javascript:void(0)"], ["itemprop", "url"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.authenticationServiceService.logout("dentist") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 2, "span", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](53, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 61, "div", [["class", "mobile-visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 9, "div", [["class", "go-back-and-logout fs-0 padding-bottom-15 padding-left-15 padding-right-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 3, "div", [["class", "go-back inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 2, "figure", [["class", "max-width-40"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.redirectsService.redirectToAdmin() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 0, "img", [["alt", "Dentacoin logo"], ["class", "width-100"], ["src", "assets/images/exit.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 4, "div", [["class", "logout text-right fs-18 inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 3, "a", [["class", " color-white lato-bold"], ["href", "javascript:void(0)"], ["itemprop", "url"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.authenticationServiceService.logout("dentist") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 2, "span", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](64, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 26, "div", [["class", "nav-and-avatar text-center color-white padding-left-15 padding-right-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 16, "nav", [["class", "max-width-500 margin-0-auto fs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 15, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 5, "li", [["class", "inline-block-bottom padding-right-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 4, "a", [["itemprop", "url"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.redirectsService.redirectToAdmin() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 0, "div", [["class", "icon app-page"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 2, "div", [["class", "fs-18 fs-xs-16 color-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](73, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 2, "li", [["class", "inline-block-bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 1, "figure", [["class", "max-width-80 padding-bottom-10 dentist-avatar"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 0, "img", [["alt", "Dentist avatar"], ["class", "width-100"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 5, "li", [["class", "inline-block-bottom padding-left-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 4, "a", [["itemprop", "url"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 0, "div", [["class", "icon my-wallet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 2, "div", [["class", "fs-18 fs-xs-16 color-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](82, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 8, "div", [["class", "dentist-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 1, "div", [["class", "fs-20 lato-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](86, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 2, "div", [["class", "fs-16 padding-top-5 padding-bottom-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 1, "a", [["class", "color-white email-link"], ["href", "mailto:sam.johnes@gmail.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](89, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 2, "a", [["class", "fs-16 color-white"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](92, null, ["", " DCN | $ ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 23, "nav", [["class", "white-styled-nav fs-0 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 22, "ul", [["itemtype", "http://schema.org/SiteNavigationElement"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 10, "li", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 9, "a", [["class", "my-patients"], ["itemprop", "url"], ["routerLink", "my-patients"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 97).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](97, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](98, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](101, { exact: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 0, "div", [["class", "icon my-patients"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 2, "div", [["class", "fs-16 padding-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](104, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 10, "li", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 9, "a", [["class", "push-notifications"], ["itemprop", "url"], ["routerLink", "push-notifications"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 108).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](108, 671744, [[8, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](109, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](112, { exact: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, null, 0, "div", [["class", "icon push-notifications"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 2, "div", [["class", "fs-16 padding-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](115, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 21, "div", [["class", "admin-page-content inline-block-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 18, "div", [["class", "user-info-tab text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](119, 0, null, null, 4, "a", [["class", "fs-14 inline-block"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 1, "div", [["class", "padding-bottom-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](121, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](123, null, ["", " DCN | $ ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](124, 0, null, null, 1, "figure", [["class", "inline-block margin-left-15 max-width-40 avatar"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](125, 0, null, null, 0, "img", [["alt", "Dentist avatar"], ["class", "width-100"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](126, 0, null, null, 10, "div", [["class", "lang-switcher module inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 9, "div", [["class", "border-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](128, 0, null, null, 8, "select", [["class", "fix-selects-for-ios"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.languageService.onLangSwitcherChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdvancedAdminPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](130, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdvancedAdminPanelComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](132, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdvancedAdminPanelComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](134, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AdvancedAdminPanelComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](136, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](137, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](138, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_5 = "my-patients"; _ck(_v, 18, 0, currVal_5); var currVal_6 = _ck(_v, 22, 0, true); var currVal_7 = "active"; _ck(_v, 19, 0, currVal_6, currVal_7); var currVal_11 = "push-notifications"; _ck(_v, 29, 0, currVal_11); var currVal_12 = _ck(_v, 33, 0, true); var currVal_13 = "active"; _ck(_v, 30, 0, currVal_12, currVal_13); var currVal_31 = "my-patients"; _ck(_v, 97, 0, currVal_31); var currVal_32 = _ck(_v, 101, 0, true); var currVal_33 = "active"; _ck(_v, 98, 0, currVal_32, currVal_33); var currVal_37 = "push-notifications"; _ck(_v, 108, 0, currVal_37); var currVal_38 = _ck(_v, 112, 0, true); var currVal_39 = "active"; _ck(_v, 109, 0, currVal_38, currVal_39); var currVal_46 = (_co.translate.currentLang == "en"); _ck(_v, 130, 0, currVal_46); var currVal_47 = (_co.translate.currentLang == "en"); _ck(_v, 132, 0, currVal_47); var currVal_48 = (_co.translate.currentLang == "de"); _ck(_v, 134, 0, currVal_48); var currVal_49 = (_co.translate.currentLang == "de"); _ck(_v, 136, 0, currVal_49); _ck(_v, 138, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.dentistData.avatar_url, ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.dentistData.name; _ck(_v, 10, 0, currVal_1); var currVal_2 = _co.dentistData.email; _ck(_v, 13, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).href; _ck(_v, 17, 0, currVal_3, currVal_4); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 25, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).transform("admin-menu-element-my-patients")); _ck(_v, 25, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).href; _ck(_v, 28, 0, currVal_9, currVal_10); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).transform("admin-menu-element-push-notifications")); _ck(_v, 36, 0, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 42, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).transform("admin-menu-element-app-page")); _ck(_v, 42, 0, currVal_15); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.myAccountLink, ""); _ck(_v, 45, 0, currVal_16); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 48, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).transform("admin-menu-element-my-wallet")); _ck(_v, 48, 0, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 53, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).transform("admin-menu-element-logout")); _ck(_v, 53, 0, currVal_18); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 64, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 65).transform("admin-menu-element-logout")); _ck(_v, 64, 0, currVal_19); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).transform("admin-menu-element-app-page")); _ck(_v, 73, 0, currVal_20); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.dentistData.avatar_url, ""); _ck(_v, 77, 0, currVal_21); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.myAccountLink, ""); _ck(_v, 79, 0, currVal_22); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 82, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 83).transform("admin-menu-element-my-wallet")); _ck(_v, 82, 0, currVal_23); var currVal_24 = _co.dentistData.name; _ck(_v, 86, 0, currVal_24); var currVal_25 = _co.dentistData.email; _ck(_v, 89, 0, currVal_25); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.myAccountLink, ""); _ck(_v, 90, 0, currVal_26); var currVal_27 = _co.dcnAmount; var currVal_28 = _co.usdAmount; _ck(_v, 92, 0, currVal_27, currVal_28); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 97).target; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 97).href; _ck(_v, 96, 0, currVal_29, currVal_30); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 104, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 105).transform("admin-menu-element-my-patients")); _ck(_v, 104, 0, currVal_34); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 108).target; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 108).href; _ck(_v, 107, 0, currVal_35, currVal_36); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 115, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 116).transform("admin-menu-element-push-notifications")); _ck(_v, 115, 0, currVal_40); var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.myAccountLink, ""); _ck(_v, 119, 0, currVal_41); var currVal_42 = _co.dentistData.name; _ck(_v, 121, 0, currVal_42); var currVal_43 = _co.dcnAmount; var currVal_44 = _co.usdAmount; _ck(_v, 123, 0, currVal_43, currVal_44); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.dentistData.avatar_url, ""); _ck(_v, 125, 0, currVal_45); }); }
function View_AdvancedAdminPanelComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-advanced-admin-panel", [], null, null, null, View_AdvancedAdminPanelComponent_0, RenderType_AdvancedAdminPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_5__["AdvancedAdminPanelComponent"], [_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationServiceService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__["RedirectsService"], _services_requests_service__WEBPACK_IMPORTED_MODULE_8__["RequestsService"], _services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_10__["AdditionalService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AdvancedAdminPanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-advanced-admin-panel", _advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_5__["AdvancedAdminPanelComponent"], View_AdvancedAdminPanelComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdvancedAdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedAdminPanelComponent", function() { return AdvancedAdminPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class AdvancedAdminPanelComponent {
    constructor(authenticationServiceService, redirectsService, requestsService, languageService, translate, additionalService) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.languageService = languageService;
        this.translate = translate;
        this.additionalService = additionalService;
        this.dcnAmount = 0;
        this.usdAmount = 0;
        this.dentistData = {
            name: '',
            email: '',
            avatar_url: ''
        };
        this.isDentistLoggedIn = authenticationServiceService.isDentistLoggedSubject;
    }
    ngOnInit() {
        this.myAccountLink = this.additionalService.generateAccountLink();
        this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentDentist')).token).subscribe({
            next: (response) => {
                console.log(response.data, 'response.data');
                this.dentistData.name = response.data.name;
                this.dentistData.email = response.data.email;
                this.dentistData.avatar_url = response.data.avatar_url;
                console.log(this.dentistData, 'this.dentistData');
            },
            error: error => this.authenticationServiceService.logout('dentist')
        });
        this.updateDentistDcnAndUsdBalance();
        if (typeof (this.updateDentistDcnAndUsdBalanceTimer) !== 'undefined') {
            clearInterval(this.updateDentistDcnAndUsdBalanceTimer);
            this.updateDentistDcnAndUsdBalanceTimer = undefined;
        }
        this.updateDentistDcnAndUsdBalanceTimer = setInterval(() => {
            if (!this.authenticationServiceService.hasPatientStorageSession()) {
                clearInterval(this.updateDentistDcnAndUsdBalanceTimer);
                this.updateDentistDcnAndUsdBalanceTimer = undefined;
            }
            else {
                this.updateDentistDcnAndUsdBalance();
            }
        }, 5000);
    }
    updateDentistDcnAndUsdBalance() {
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentDentist')).token).subscribe({
            next: (response) => {
                if (response.success) {
                    this.dcnAmount = response.data;
                    this.requestsService.getDentacoinDataByExternalProvider('USD').subscribe((coingeckoResponse) => {
                        this.usdAmount = Number(((1 / Number(Number(coingeckoResponse) / 100)) * this.dcnAmount).toFixed(2));
                    });
                }
            },
            error: error => this.authenticationServiceService.logout('dentist')
        });
    }
}


/***/ }),

/***/ "./src/app/admin/advanced-admin-panel/my-patients/my-patients.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/advanced-admin-panel/my-patients/my-patients.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_MyPatientsComponent, View_MyPatientsComponent_0, View_MyPatientsComponent_Host_0, MyPatientsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MyPatientsComponent", function() { return RenderType_MyPatientsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyPatientsComponent_0", function() { return View_MyPatientsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyPatientsComponent_Host_0", function() { return View_MyPatientsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPatientsComponentNgFactory", function() { return MyPatientsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _my_patients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-patients.component */ "./src/app/admin/advanced-admin-panel/my-patients/my-patients.component.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/additional.service */ "./src/app/_services/additional.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_MyPatientsComponent = [];
var RenderType_MyPatientsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_MyPatientsComponent, data: {} });

function View_MyPatientsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "td", [["class", "lato-bold platform-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("invited-patients-history-accepted")); _ck(_v, 1, 0, currVal_0); }); }
function View_MyPatientsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("invited-patients-history-invited")); _ck(_v, 1, 0, currVal_0); }); }
function View_MyPatientsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 11, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "td", [["class", "lato-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "a", [["class", "email"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MyPatientsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MyPatientsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_4 = (_v.context.$implicit.invited_id != null); _ck(_v, 10, 0, currVal_4); var currVal_5 = (_v.context.$implicit.invited_id == null); _ck(_v, 12, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.created_at; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.invited_name; _ck(_v, 5, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "mailto:", _v.context.$implicit.invited_email, ""); _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.$implicit.invited_email; _ck(_v, 8, 0, currVal_3); }); }
function View_MyPatientsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [["class", "fs-16 custom-data-table padding-top-70 padding-top-xs-30 admin-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 18, "div", [["class", "table-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 17, "table", [["class", "table table-without-reorder"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 13, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "th", [["style", "width: 200px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MyPatientsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.invites; _ck(_v, 19, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).transform("invited-patients-history-date")); _ck(_v, 6, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).transform("invited-patients-history-name")); _ck(_v, 9, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).transform("invited-patients-history-email")); _ck(_v, 12, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).transform("invited-patients-history-status")); _ck(_v, 15, 0, currVal_3); }); }
function View_MyPatientsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 37, "div", [["class", "invite-patients-form color-black admin-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "div", [["class", "title-and-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "figure", [["class", "max-width-40 max-width-xs-30 inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "Patients icon"], ["class", "width-100"], ["src", "assets/images/black-patients-icon.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "span", [["class", "inline-block fs-36 fs-xs-26 padding-left-10 lato-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "div", [["class", "fs-18 fs-xs-16 padding-bottom-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 27, "div", [["class", "people-invitation fs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 17, "div", [["class", "inputs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 16, "div", [["class", "inputs-row padding-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "div", [["class", "remove-row inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "a", [["class", "lato-regular fs-20"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["X"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 12, "div", [["class", "inputs-wrapper inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 5, "div", [["class", "input-field inline-block-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 4, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-name-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](20, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "input", [["class", "full-rounded form-field platform-border-color person-name"], ["id", "request-account-name-0"], ["maxlength", "100"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 5, "div", [["class", "input-field inline-block-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 4, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-email-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](26, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 0, "input", [["class", "full-rounded form-field platform-border-color person-email"], ["id", "request-account-email-0"], ["maxlength", "100"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 8, "div", [["class", "padding-top-15 padding-top-xs-5 fs-0 buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 3, "div", [["class", "inline-block add-btn-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 2, "a", [["class", "lato-bold fs-16 add-invitation-rows module platform-color"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](32, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 3, "div", [["class", "inline-block send-btn-container text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 2, "a", [["class", "fs-16 platform-custom-button submit-form-invite-people module platform-custom-button platform-background-color platform-border-color hover"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](36, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MyPatientsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.showInvitationHistory; _ck(_v, 39, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transform("my-patients-page-title")); _ck(_v, 5, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).transform("my-patients-page-subtitle")); _ck(_v, 8, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).transform("invite-patients-form-name")); _ck(_v, 20, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).transform("invite-patients-form-email")); _ck(_v, 26, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 32, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).transform("invite-patients-form-add-another-patient")); _ck(_v, 32, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).transform("invite-patients-form-send-invite")); _ck(_v, 36, 0, currVal_5); }); }
function View_MyPatientsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-my-patients", [], null, null, null, View_MyPatientsComponent_0, RenderType_MyPatientsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _my_patients_component__WEBPACK_IMPORTED_MODULE_3__["MyPatientsComponent"], [_services_redirects_service__WEBPACK_IMPORTED_MODULE_4__["RedirectsService"], _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"], _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationServiceService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MyPatientsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-my-patients", _my_patients_component__WEBPACK_IMPORTED_MODULE_3__["MyPatientsComponent"], View_MyPatientsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/advanced-admin-panel/my-patients/my-patients.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/advanced-admin-panel/my-patients/my-patients.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MyPatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPatientsComponent", function() { return MyPatientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class MyPatientsComponent {
    constructor(redirectsService, requestsService, authenticationServiceService, additionalService) {
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.authenticationServiceService = authenticationServiceService;
        this.additionalService = additionalService;
        this.showInvitationHistory = false;
        this.invites = [];
    }
    ngOnInit() {
        if (!this.authenticationServiceService.hasDentistStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            this.requestsService.getInviteHistory(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('token', JSON.parse(window.localStorage.getItem('currentDentist')).token).toString()).subscribe((response) => {
                if (response.success) {
                    this.showInvitationHistory = true;
                    this.invites = response.data;
                    if (this.invites.length) {
                        for (let i = 0; i < this.invites.length; i += 1) {
                            this.invites[i].created_at = this.additionalService.dateObjToFormattedDate(new Date(this.invites[i].created_at));
                        }
                    }
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ngfactory.js":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ngfactory.js ***!
  \*********************************************************************************************************/
/*! exports provided: RenderType_PushNotificationsComponent, View_PushNotificationsComponent_0, View_PushNotificationsComponent_Host_0, PushNotificationsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PushNotificationsComponent", function() { return RenderType_PushNotificationsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PushNotificationsComponent_0", function() { return View_PushNotificationsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PushNotificationsComponent_Host_0", function() { return View_PushNotificationsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationsComponentNgFactory", function() { return PushNotificationsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _push_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./push-notifications.component */ "./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/additional.service */ "./src/app/_services/additional.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_PushNotificationsComponent = [];
var RenderType_PushNotificationsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_PushNotificationsComponent, data: {} });

function View_PushNotificationsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "td", [["class", "lato-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.date; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.message; _ck(_v, 7, 0, currVal_2); }); }
function View_PushNotificationsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "div", [["class", "fs-18 custom-data-table padding-top-70 padding-top-xs-30 admin-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 15, "div", [["class", "table-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 14, "table", [["class", "table table-without-reorder"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PushNotificationsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.push_notifications; _ck(_v, 16, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).transform("push-notifications-date")); _ck(_v, 6, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).transform("push-notifications-title")); _ck(_v, 9, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).transform("push-notifications-message")); _ck(_v, 12, 0, currVal_2); }); }
function View_PushNotificationsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 47, "div", [["class", "color-black admin-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "div", [["class", "title-and-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "figure", [["class", "max-width-40 max-width-xs-30 inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "Patients icon"], ["class", "width-100"], ["src", "assets/images/black-push-notifications-icon.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "span", [["class", "inline-block fs-36 fs-xs-26 padding-left-10 lato-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "div", [["class", "fs-18 fs-xs-16 padding-bottom-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 37, "div", [["class", "push-notifications-custom-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 5, "div", [["class", "padding-bottom-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 4, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "input", [["class", "full-rounded form-field platform-border-color"], ["id", "title"], ["maxlength", "255"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "div", [["class", "padding-bottom-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "textarea", [["class", "full-rounded form-field platform-border-color"], ["id", "message"], ["maxlength", "255"], ["rows", "3"]], [[8, "placeholder", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 22, "div", [["class", "datetimepicker-and-buttons fs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 9, "div", [["class", "daterangepicker-parent inline-block-top padding-bottom-xs-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 5, "div", [["class", "max-width-180"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 4, "div", [["class", "custom-google-label-style module hide field"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 2, "label", [["class", "platform-color active-label"], ["for", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](25, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 0, "input", [["class", "full-rounded form-field platform-border-color datetimepicker colorful-border"], ["id", "datetimepicker"], ["maxlength", "255"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 2, "div", [["class", "fs-14 padding-top-10 selected-time-text hide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](29, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 11, "div", [["class", "buttons inline-block-top text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 5, "button", [["class", "schedule-button module lato-bold platform-custom-button-opposite-colors platform-color platform-border-color hover margin-right-10 padding-left-10 padding-right-20 no-hover"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "span", [["class", "platform-border-color inline-block custom-dot margin-right-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 0, "span", [["class", "inner-dot"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 2, "span", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](36, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 4, "button", [["class", "module lato-bold platform-custom-button platform-background-color platform-border-color hover padding-left-20 padding-right-20 send-now"], ["type", "button"]], [[1, "data-send-now", 0], [1, "data-save-now", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](41, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 4, "div", [["class", "custom-response hide"]], [[1, "data-push-notifications-sent-success", 0], [1, "data-push-notifications-register-success", 0], [1, "data-push-notifications-failed", 0], [1, "data-push-notifications-missing-patients", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PushNotificationsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_14 = _co.showPushNotificationsHistory; _ck(_v, 49, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transform("push-notification-page-title")); _ck(_v, 5, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).transform("push-notification-page-subtitle")); _ck(_v, 8, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).transform("push-notifications-title")); _ck(_v, 14, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).transform("push-notifications-message")), "..."); _ck(_v, 18, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 25, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).transform("push-notifications-date")); _ck(_v, 25, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).transform("push-notifications-date-description")); _ck(_v, 29, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).transform("push-notifications-schedule")); _ck(_v, 36, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).transform("push-notifications-send-now")); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 38, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).transform("push-notifications-save-now")); _ck(_v, 38, 0, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).transform("push-notifications-send-now")); _ck(_v, 41, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 43, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).transform("push-notifications-sent-successfully")); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 43, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).transform("push-notifications-register-successfully")); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 43, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).transform("general-error")); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 43, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).transform("push-notifications-missing-patients")); _ck(_v, 43, 0, currVal_10, currVal_11, currVal_12, currVal_13); }); }
function View_PushNotificationsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-push-notifications", [], null, null, null, View_PushNotificationsComponent_0, RenderType_PushNotificationsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _push_notifications_component__WEBPACK_IMPORTED_MODULE_3__["PushNotificationsComponent"], [_services_redirects_service__WEBPACK_IMPORTED_MODULE_4__["RedirectsService"], _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"], _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationServiceService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PushNotificationsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-push-notifications", _push_notifications_component__WEBPACK_IMPORTED_MODULE_3__["PushNotificationsComponent"], View_PushNotificationsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PushNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationsComponent", function() { return PushNotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class PushNotificationsComponent {
    constructor(redirectsService, requestsService, authenticationServiceService, additionalService) {
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.authenticationServiceService = authenticationServiceService;
        this.additionalService = additionalService;
        this.showPushNotificationsHistory = false;
        this.push_notifications = [];
    }
    ngOnInit() {
        if (!this.authenticationServiceService.hasDentistStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.requestsService.getPushNotificationsHistory(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', JSON.parse(window.localStorage.getItem('currentDentist')).id).set('token', JSON.parse(window.localStorage.getItem('currentDentist')).token).toString()).subscribe((response) => {
                if (response.success) {
                    this.showPushNotificationsHistory = true;
                    this.push_notifications = response.data;
                    if (this.push_notifications.length) {
                        for (let i = 0; i < this.push_notifications.length; i += 1) {
                            if (this.push_notifications[i].scheduled != null) {
                                this.push_notifications[i].date = this.additionalService.dateObjToFormattedDate(new Date(this.push_notifications[i].scheduled));
                            }
                            else {
                                this.push_notifications[i].date = this.additionalService.dateObjToFormattedDate(new Date(this.push_notifications[i].created_at));
                            }
                        }
                    }
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/app/admin/basic-admin-panel/basic-admin-panel.component.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/basic-admin-panel/basic-admin-panel.component.ngfactory.js ***!
  \**********************************************************************************/
/*! exports provided: RenderType_BasicAdminPanelComponent, View_BasicAdminPanelComponent_0, View_BasicAdminPanelComponent_Host_0, BasicAdminPanelComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BasicAdminPanelComponent", function() { return RenderType_BasicAdminPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicAdminPanelComponent_0", function() { return View_BasicAdminPanelComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicAdminPanelComponent_Host_0", function() { return View_BasicAdminPanelComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAdminPanelComponentNgFactory", function() { return BasicAdminPanelComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-admin-panel.component */ "./src/app/admin/basic-admin-panel/basic-admin-panel.component.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/additional.service */ "./src/app/_services/additional.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_BasicAdminPanelComponent = [];
var RenderType_BasicAdminPanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_BasicAdminPanelComponent, data: {} });

function View_BasicAdminPanelComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["class", "color-main"], ["selected", ""], ["value", "en"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EN"]))], function (_ck, _v) { var currVal_0 = "en"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "en"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_BasicAdminPanelComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["class", "color-main"], ["value", "de"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DE"]))], function (_ck, _v) { var currVal_0 = "de"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "de"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_BasicAdminPanelComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["class", "color-main"], ["value", "en"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EN"]))], function (_ck, _v) { var currVal_0 = "en"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "en"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_BasicAdminPanelComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["class", "color-main"], ["selected", ""], ["value", "de"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DE"]))], function (_ck, _v) { var currVal_0 = "de"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "de"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_BasicAdminPanelComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 86, "div", [["class", "basic-admin-panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 51, "div", [["class", "container padding-top-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 40, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 9, "div", [["class", "col-xs-5 padding-right-0 enableBlur dentist-logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 7, "div", [["class", "dentist-logo-wrapper platform-border-color important show-in-edit-mode inline-block-mode"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "button", [["class", "dentist-logo-btn"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "label", [["for", "dentist-logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "input", [["accept", ".jpg,.jpeg,.png"], ["class", "hide"], ["id", "dentist-logo"], ["type", "file"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "input", [["class", "hide"], ["id", "dentist-logo-media"], ["type", "hidden"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "input", [["class", "hide"], ["id", "dentist-logo-media-name"], ["type", "hidden"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "label", [["class", "platform-color fs-16 calibri-bold add-logo padding-top-10 padding-bottom-10"], ["for", "dentist-logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Add logo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "figure", [["class", "hide-in-edit-mode visible-dentist-logo"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 6, "div", [["class", "col-xs-2 text-center pick-dentist-color-parent disableBlur"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 4, "a", [["class", "pick-dentist-color show-in-edit-mode"], ["data-opened", "false"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "figure", [["class", "platform-border-color important"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "img", [["alt", "Change color icon"], ["src", "assets/images/change-color-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "div", [["class", "padding-top-5 calibri-bold platform-color fs-16 hide-xs text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit colours"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "div", [["class", "custom-dropdown-with-color-pickers"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 22, "div", [["class", "col-sm-5 col-xs-7 text-right basic-admin-panel-navigation enableBlur padding-left-0 hide-in-edit-mode-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 16, "div", [["class", "hide-in-edit-mode"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "a", [["class", "module platform-custom-button-opposite-colors inline-block platform-color platform-border-color hover hide-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.redirectsService.redirectToMyPatients() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Admin"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 3, "a", [["class", "module platform-custom-button platform-background-color platform-border-color hover margin-left-10 edit-page inline-block hide-sm"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-pencil"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](26, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 9, "div", [["class", "lang-switcher module inline-block hide-in-edit-mode"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 8, "select", [["class", "platform-text-color fix-selects-for-ios"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.languageService.onLangSwitcherChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BasicAdminPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BasicAdminPanelComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BasicAdminPanelComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BasicAdminPanelComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 4, "div", [["class", "show-in-edit-mode hide-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "a", [["class", "module platform-custom-button platform-background-color platform-border-color hover save-changes"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["SAVE CHANGES"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 1, "a", [["class", "module platform-custom-button platform-background-color platform-border-color hover cancel-changes padding-left-10 padding-right-10 margin-left-5"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["CANCEL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 9, "div", [["class", "row enableBlur"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 8, "div", [["class", "col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 basic-admin-panel-apps-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 7, "div", [["class", "hub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "div", [["class", "hide-in-edit-mode padding-top-40 padding-top-xs-20 padding-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 0, "h1", [["class", "fs-30 fs-xs-22 calibri-bold text-center title-label platform-text-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 4, "div", [["class", "show-in-edit-mode padding-top-40 padding-top-xs-20 padding-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 3, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "label", [["class", "active-label platform-color"], ["for", "hub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Title:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 0, "input", [["class", "full-rounded form-field colorful-border platform-border-color"], ["id", "hub-title"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 9, "div", [["class", "container-fluid dentist-helper text-center padding-top-10 padding-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 7, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 6, "div", [["class", "wrapper fs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 2, "div", [["class", "text fs-16 inline-block-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](58, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 2, "div", [["class", "close-dentist-helper inline-block-top text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 1, "a", [["class", "fs-30 line-height-24"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 23, "div", [["class", "container padding-top-20 padding-bottom-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 8, "div", [["class", "row enableBlur"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 7, "div", [["class", "col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 basic-admin-panel-apps-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 6, "div", [["class", "row fs-0 apps-list"]], [[1, "data-account-section-url", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 5, "div", [["class", "col-xs-4 text-center padding-bottom-15 inline-block-top single-app empty"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 4, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 3, "button", [["class", "fs-60 line-height-60 calibri-bold add-app platform-color-important platform-border-color important"]], [[1, "data-default-apps-title", 0], [1, "data-adding-custom-app-title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 13, "div", [["class", "row mobile-btns-row show-on-sm padding-top-30 padding-bottom-20 enableBlur"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 2, "div", [["class", "col-xs-6 padding-right-5 text-right hide-in-edit-mode"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 1, "a", [["class", "module platform-custom-button-opposite-colors inline-block platform-color platform-border-color hover padding-left-10 padding-right-10"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.redirectsService.redirectToMyPatients() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Admin"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 4, "div", [["class", "col-xs-6 padding-left-5 hide-in-edit-mode"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 3, "a", [["class", "module platform-custom-button platform-background-color platform-border-color hover edit-page inline-block padding-left-10 padding-right-10"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-pencil"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](80, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 4, "div", [["class", "col-xs-12 text-center show-in-edit-mode"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 1, "a", [["class", "module platform-custom-button platform-background-color platform-border-color hover save-changes padding-left-10 padding-right-10"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["SAVE CHANGES"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 1, "a", [["class", "module platform-custom-button platform-background-color platform-border-color hover cancel-changes padding-left-10 padding-right-10 margin-left-5"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["CANCEL"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.translate.currentLang == "en"); _ck(_v, 31, 0, currVal_1); var currVal_2 = (_co.translate.currentLang == "en"); _ck(_v, 33, 0, currVal_2); var currVal_3 = (_co.translate.currentLang == "de"); _ck(_v, 35, 0, currVal_3); var currVal_4 = (_co.translate.currentLang == "de"); _ck(_v, 37, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).transform("edit-page")); _ck(_v, 26, 0, currVal_0); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 58, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).transform("dentist-helper")); _ck(_v, 58, 0, currVal_5); var currVal_6 = _co.myAccountLink; _ck(_v, 66, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 69, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).transform("default-apps-title")); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 69, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).transform("adding-custom-app-title")); _ck(_v, 69, 0, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 80, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 81).transform("edit-page")); _ck(_v, 80, 0, currVal_9); }); }
function View_BasicAdminPanelComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-basic-admin-panel", [], null, null, null, View_BasicAdminPanelComponent_0, RenderType_BasicAdminPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_4__["BasicAdminPanelComponent"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_5__["RedirectsService"], _services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BasicAdminPanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-basic-admin-panel", _basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_4__["BasicAdminPanelComponent"], View_BasicAdminPanelComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/basic-admin-panel/basic-admin-panel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/basic-admin-panel/basic-admin-panel.component.ts ***!
  \************************************************************************/
/*! exports provided: BasicAdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAdminPanelComponent", function() { return BasicAdminPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

// import * as $ from 'jquery';
class BasicAdminPanelComponent {
    constructor(translate, redirectsService, languageService, additionalService) {
        this.translate = translate;
        this.redirectsService = redirectsService;
        this.languageService = languageService;
        this.additionalService = additionalService;
    }
    ngOnInit() {
        this.myAccountLink = this.additionalService.generateAccountLink();
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _patient_login_page_patient_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-login-page/patient-login-page.component */ "./src/app/patient-login-page/patient-login-page.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_basic_admin_panel_basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/basic-admin-panel/basic-admin-panel.component */ "./src/app/admin/basic-admin-panel/basic-admin-panel.component.ts");
/* harmony import */ var _admin_advanced_admin_panel_advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/advanced-admin-panel/advanced-admin-panel.component */ "./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ts");
/* harmony import */ var _admin_advanced_admin_panel_push_notifications_push_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/advanced-admin-panel/push-notifications/push-notifications.component */ "./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _front_end_language_front_end_language_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./front-end-language/front-end-language.component */ "./src/app/front-end-language/front-end-language.component.ts");
/* harmony import */ var _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verify-account/verify-account.component */ "./src/app/verify-account/verify-account.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-wallet/my-wallet.component */ "./src/app/my-wallet/my-wallet.component.ts");
/* harmony import */ var _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-account/edit-account.component */ "./src/app/edit-account/edit-account.component.ts");
/* harmony import */ var _manage_privacy_manage_privacy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manage-privacy/manage-privacy.component */ "./src/app/manage-privacy/manage-privacy.component.ts");
/* harmony import */ var _logged_in_wrapper_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logged-in-wrapper/logged-in-wrapper.component */ "./src/app/logged-in-wrapper/logged-in-wrapper.component.ts");
/* harmony import */ var _request_account_request_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./request-account/request-account.component */ "./src/app/request-account/request-account.component.ts");
/* harmony import */ var _forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forgotten-password/forgotten-password.component */ "./src/app/forgotten-password/forgotten-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _not_logged_in_wrapper_not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./not-logged-in-wrapper/not-logged-in-wrapper.component */ "./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ts");
/* harmony import */ var _patient_register_by_invite_patient_register_by_invite_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./patient-register-by-invite/patient-register-by-invite.component */ "./src/app/patient-register-by-invite/patient-register-by-invite.component.ts");
/* harmony import */ var _dentist_request_account_dentist_request_account_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dentist-request-account/dentist-request-account.component */ "./src/app/dentist-request-account/dentist-request-account.component.ts");
/* harmony import */ var _admin_advanced_admin_panel_my_patients_my_patients_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/advanced-admin-panel/my-patients/my-patients.component */ "./src/app/admin/advanced-admin-panel/my-patients/my-patients.component.ts");























/*const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/' + environment.default_language},
    {path: ':lang', component: FrontEndLanguageComponent, children: [
            {path: '', component: LoggedInWrapperComponent, children: [
                    {path: '', component: HomeComponent},
                    /!*{path: 'my-wallet', component: MyWalletComponent},
                    {path: 'edit-account', component: EditAccountComponent},
                    {path: 'manage-privacy', component: ManagePrivacyComponent},*!/
                ]},
            {path: '', component: NotLoggedInWrapperComponent, children: [
                    {path: 'dentist-request-account', component: DentistRequestAccountComponent},
                    {path: 'request-account', component: RequestAccountComponent},
                    {path: 'login', component: PatientLoginPageComponent},
                    {path: 'patient-register-by-invite', component: PatientRegisterByInviteComponent},
                    /!*{path: 'forgotten-password', component: ForgottenPasswordComponent},
                    {path: 'change-password/:token', component: ChangePasswordComponent},
                    {path: 'verify-account', children: [
                        {path: ':token', component: VerifyAccountComponent}
                    ]},*!/
                ]},
            {path: 'admin-login', component: AdminLoginComponent},
            {path: 'admin', component: AdminComponent,
                children: [
                    {
                        path: '',
                        component: BasicAdminPanelComponent
                    },
                    {
                        path: 'advanced',
                        component: AdvancedAdminPanelComponent,
                        children: [
                            {
                                path: 'my-patients',
                                component: MyPatientsComponent
                            },
                            {
                                path: 'push-notifications',
                                component: PushNotificationsComponent
                            }
                        ]
                    }
                ]
            }
        ]},
    {path: '**', redirectTo: '/' + environment.default_language}
];*/
const routes = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hybrid ? [
    { path: '', pathMatch: 'full', redirectTo: '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].default_language },
    { path: ':lang', component: _front_end_language_front_end_language_component__WEBPACK_IMPORTED_MODULE_8__["FrontEndLanguageComponent"], children: [
            { path: '', component: _logged_in_wrapper_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["LoggedInWrapperComponent"], children: [
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] }
                ] },
            { path: '', component: _not_logged_in_wrapper_not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_19__["NotLoggedInWrapperComponent"], children: [
                    { path: 'dentist-request-account', component: _dentist_request_account_dentist_request_account_component__WEBPACK_IMPORTED_MODULE_21__["DentistRequestAccountComponent"] },
                    { path: 'request-account', component: _request_account_request_account_component__WEBPACK_IMPORTED_MODULE_16__["RequestAccountComponent"] },
                    { path: 'login', component: _patient_login_page_patient_login_page_component__WEBPACK_IMPORTED_MODULE_2__["PatientLoginPageComponent"] },
                    { path: 'patient-register-by-invite', component: _patient_register_by_invite_patient_register_by_invite_component__WEBPACK_IMPORTED_MODULE_20__["PatientRegisterByInviteComponent"] }
                ] }
        ] },
    { path: '**', redirectTo: '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].default_language }
] : [
    { path: '', pathMatch: 'full', redirectTo: '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].default_language },
    { path: ':lang', component: _front_end_language_front_end_language_component__WEBPACK_IMPORTED_MODULE_8__["FrontEndLanguageComponent"], children: [
            { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"] },
            { path: '', component: _logged_in_wrapper_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["LoggedInWrapperComponent"], children: [
                    { path: 'patients', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] }
                ] },
            { path: '', component: _not_logged_in_wrapper_not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_19__["NotLoggedInWrapperComponent"], children: [
                    { path: 'dentist-request-account', component: _dentist_request_account_dentist_request_account_component__WEBPACK_IMPORTED_MODULE_21__["DentistRequestAccountComponent"] },
                    { path: 'request-account', component: _request_account_request_account_component__WEBPACK_IMPORTED_MODULE_16__["RequestAccountComponent"] },
                    { path: 'login', component: _patient_login_page_patient_login_page_component__WEBPACK_IMPORTED_MODULE_2__["PatientLoginPageComponent"] },
                    { path: 'patient-register-by-invite', component: _patient_register_by_invite_patient_register_by_invite_component__WEBPACK_IMPORTED_MODULE_20__["PatientRegisterByInviteComponent"] }
                ] },
            { path: 'admin-login', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_7__["AdminLoginComponent"] },
            { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                children: [
                    {
                        path: '',
                        component: _admin_basic_admin_panel_basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_4__["BasicAdminPanelComponent"]
                    },
                    {
                        path: 'advanced',
                        component: _admin_advanced_admin_panel_advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_5__["AdvancedAdminPanelComponent"],
                        children: [
                            {
                                path: 'my-patients',
                                component: _admin_advanced_admin_panel_my_patients_my_patients_component__WEBPACK_IMPORTED_MODULE_22__["MyPatientsComponent"]
                            },
                            {
                                path: 'push-notifications',
                                component: _admin_advanced_admin_panel_push_notifications_push_notifications_component__WEBPACK_IMPORTED_MODULE_6__["PushNotificationsComponent"]
                            }
                        ]
                    }
                ]
            }
        ] },
    { path: '**', redirectTo: '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].default_language }
];
class AppRoutingModule {
}
const routingComponents = [_front_end_language_front_end_language_component__WEBPACK_IMPORTED_MODULE_8__["FrontEndLanguageComponent"], _patient_login_page_patient_login_page_component__WEBPACK_IMPORTED_MODULE_2__["PatientLoginPageComponent"], _admin_basic_admin_panel_basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_4__["BasicAdminPanelComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _admin_advanced_admin_panel_advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_5__["AdvancedAdminPanelComponent"], _admin_advanced_admin_panel_push_notifications_push_notifications_component__WEBPACK_IMPORTED_MODULE_6__["PushNotificationsComponent"], _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_7__["AdminLoginComponent"], _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_9__["VerifyAccountComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"], _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_12__["MyWalletComponent"], _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_13__["EditAccountComponent"], _manage_privacy_manage_privacy_component__WEBPACK_IMPORTED_MODULE_14__["ManagePrivacyComponent"], _logged_in_wrapper_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["LoggedInWrapperComponent"], _request_account_request_account_component__WEBPACK_IMPORTED_MODULE_16__["RequestAccountComponent"], _forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_17__["ForgottenPasswordComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__["ChangePasswordComponent"], _not_logged_in_wrapper_not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_19__["NotLoggedInWrapperComponent"], _patient_register_by_invite_patient_register_by_invite_component__WEBPACK_IMPORTED_MODULE_20__["PatientRegisterByInviteComponent"], _dentist_request_account_dentist_request_account_component__WEBPACK_IMPORTED_MODULE_21__["DentistRequestAccountComponent"], _admin_advanced_admin_panel_my_patients_my_patients_component__WEBPACK_IMPORTED_MODULE_22__["MyPatientsComponent"]];


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/additional.service */ "./src/app/_services/additional.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_AppComponent = [];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "main-content"]], [[1, "data-lang", 0], [1, "hybrid", 0], [1, "data-dentacoinDomain", 0], [1, "data-production", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "mobile-app-banner"]], [[1, "data-banner-title-desktop", 0], [1, "data-banner-title-mobile", 0]], null, null, null, null))], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.translate.currentLang; var currVal_1 = (_co.hybrid ? "true" : null); var currVal_2 = _co.dentacoinDomain; var currVal_3 = _co.production; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.translate.instant("banner-title-desktop"); var currVal_5 = _co.translate.instant("banner-title-mobile"); _ck(_v, 3, 0, currVal_4, currVal_5); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_4__["AdditionalService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


class AppComponent {
    constructor(translate, additionalService) {
        this.translate = translate;
        this.additionalService = additionalService;
        this.hybrid = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hybrid;
        this.dentacoinDomain = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dentacoinDomain;
        this.production = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production;
    }
    ngOnInit() {
        document.addEventListener('hideLoader', (e) => {
            this.additionalService.hideLoader();
        });
        document.addEventListener('showLoader', (e) => {
            this.additionalService.showLoader();
        });
    }
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/http-loader */ "@ngx-translate/http-loader");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__);


class AppModule {
}
// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__["TranslateHttpLoader"](http, 'assets/languages/');
}


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _front_end_language_front_end_language_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./front-end-language/front-end-language.component.ngfactory */ "./src/app/front-end-language/front-end-language.component.ngfactory.js");
/* harmony import */ var _landing_page_landing_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component.ngfactory */ "./src/app/landing-page/landing-page.component.ngfactory.js");
/* harmony import */ var _logged_in_wrapper_logged_in_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logged-in-wrapper/logged-in-wrapper.component.ngfactory */ "./src/app/logged-in-wrapper/logged-in-wrapper.component.ngfactory.js");
/* harmony import */ var _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
/* harmony import */ var _not_logged_in_wrapper_not_logged_in_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-logged-in-wrapper/not-logged-in-wrapper.component.ngfactory */ "./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ngfactory.js");
/* harmony import */ var _dentist_request_account_dentist_request_account_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dentist-request-account/dentist-request-account.component.ngfactory */ "./src/app/dentist-request-account/dentist-request-account.component.ngfactory.js");
/* harmony import */ var _request_account_request_account_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request-account/request-account.component.ngfactory */ "./src/app/request-account/request-account.component.ngfactory.js");
/* harmony import */ var _patient_login_page_patient_login_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patient-login-page/patient-login-page.component.ngfactory */ "./src/app/patient-login-page/patient-login-page.component.ngfactory.js");
/* harmony import */ var _patient_register_by_invite_patient_register_by_invite_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patient-register-by-invite/patient-register-by-invite.component.ngfactory */ "./src/app/patient-register-by-invite/patient-register-by-invite.component.ngfactory.js");
/* harmony import */ var _admin_login_admin_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-login/admin-login.component.ngfactory */ "./src/app/admin-login/admin-login.component.ngfactory.js");
/* harmony import */ var _admin_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component.ngfactory */ "./src/app/admin/admin.component.ngfactory.js");
/* harmony import */ var _admin_basic_admin_panel_basic_admin_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/basic-admin-panel/basic-admin-panel.component.ngfactory */ "./src/app/admin/basic-admin-panel/basic-admin-panel.component.ngfactory.js");
/* harmony import */ var _admin_advanced_admin_panel_advanced_admin_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/advanced-admin-panel/advanced-admin-panel.component.ngfactory */ "./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ngfactory.js");
/* harmony import */ var _admin_advanced_admin_panel_my_patients_my_patients_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/advanced-admin-panel/my-patients/my-patients.component.ngfactory */ "./src/app/admin/advanced-admin-panel/my-patients/my-patients.component.ngfactory.js");
/* harmony import */ var _admin_advanced_admin_panel_push_notifications_push_notifications_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/advanced-admin-panel/push-notifications/push-notifications.component.ngfactory */ "./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _front_end_language_front_end_language_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./front-end-language/front-end-language.component */ "./src/app/front-end-language/front-end-language.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _logged_in_wrapper_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./logged-in-wrapper/logged-in-wrapper.component */ "./src/app/logged-in-wrapper/logged-in-wrapper.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_logged_in_wrapper_not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./not-logged-in-wrapper/not-logged-in-wrapper.component */ "./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ts");
/* harmony import */ var _dentist_request_account_dentist_request_account_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dentist-request-account/dentist-request-account.component */ "./src/app/dentist-request-account/dentist-request-account.component.ts");
/* harmony import */ var _request_account_request_account_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./request-account/request-account.component */ "./src/app/request-account/request-account.component.ts");
/* harmony import */ var _patient_login_page_patient_login_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./patient-login-page/patient-login-page.component */ "./src/app/patient-login-page/patient-login-page.component.ts");
/* harmony import */ var _patient_register_by_invite_patient_register_by_invite_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./patient-register-by-invite/patient-register-by-invite.component */ "./src/app/patient-register-by-invite/patient-register-by-invite.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_basic_admin_panel_basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/basic-admin-panel/basic-admin-panel.component */ "./src/app/admin/basic-admin-panel/basic-admin-panel.component.ts");
/* harmony import */ var _admin_advanced_admin_panel_advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/advanced-admin-panel/advanced-admin-panel.component */ "./src/app/admin/advanced-admin-panel/advanced-admin-panel.component.ts");
/* harmony import */ var _admin_advanced_admin_panel_my_patients_my_patients_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/advanced-admin-panel/my-patients/my-patients.component */ "./src/app/admin/advanced-admin-panel/my-patients/my-patients.component.ts");
/* harmony import */ var _admin_advanced_admin_panel_push_notifications_push_notifications_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/advanced-admin-panel/push-notifications/push-notifications.component */ "./src/app/admin/advanced-admin-panel/push-notifications/push-notifications.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















































var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _front_end_language_front_end_language_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FrontEndLanguageComponentNgFactory"], _landing_page_landing_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponentNgFactory"], _logged_in_wrapper_logged_in_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["LoggedInWrapperComponentNgFactory"], _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["HomeComponentNgFactory"], _not_logged_in_wrapper_not_logged_in_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NotLoggedInWrapperComponentNgFactory"], _dentist_request_account_dentist_request_account_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["DentistRequestAccountComponentNgFactory"], _request_account_request_account_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RequestAccountComponentNgFactory"], _patient_login_page_patient_login_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["PatientLoginPageComponentNgFactory"], _patient_register_by_invite_patient_register_by_invite_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["PatientRegisterByInviteComponentNgFactory"], _admin_login_admin_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["AdminLoginComponentNgFactory"], _admin_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["AdminComponentNgFactory"], _admin_basic_admin_panel_basic_admin_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["BasicAdminPanelComponentNgFactory"], _admin_advanced_admin_panel_advanced_admin_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["AdvancedAdminPanelComponentNgFactory"], _admin_advanced_admin_panel_my_patients_my_patients_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["MyPatientsComponentNgFactory"], _admin_advanced_admin_panel_push_notifications_push_notifications_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["PushNotificationsComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_bb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["HAMMER_LOADER"]], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_server_platform_server_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_25__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_25__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_25__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_25__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_20__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_server_platform_server_f"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"], _app_module__WEBPACK_IMPORTED_MODULE_29__["HttpLoaderFactory"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["USE_STORE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_30__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_i"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_h"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_25__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTER_CONFIGURATION"], { onSameUrlNavigation: "reload" }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_20__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTES"], function () { return [[{ path: "", pathMatch: "full", redirectTo: "/en" }, { path: ":lang", component: _front_end_language_front_end_language_component__WEBPACK_IMPORTED_MODULE_31__["FrontEndLanguageComponent"], children: [{ path: "", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_32__["LandingPageComponent"] }, { path: "", component: _logged_in_wrapper_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_33__["LoggedInWrapperComponent"], children: [{ path: "patients", component: _home_home_component__WEBPACK_IMPORTED_MODULE_34__["HomeComponent"] }] }, { path: "", component: _not_logged_in_wrapper_not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_35__["NotLoggedInWrapperComponent"], children: [{ path: "dentist-request-account", component: _dentist_request_account_dentist_request_account_component__WEBPACK_IMPORTED_MODULE_36__["DentistRequestAccountComponent"] }, { path: "request-account", component: _request_account_request_account_component__WEBPACK_IMPORTED_MODULE_37__["RequestAccountComponent"] }, { path: "login", component: _patient_login_page_patient_login_page_component__WEBPACK_IMPORTED_MODULE_38__["PatientLoginPageComponent"] }, { path: "patient-register-by-invite", component: _patient_register_by_invite_patient_register_by_invite_component__WEBPACK_IMPORTED_MODULE_39__["PatientRegisterByInviteComponent"] }] }, { path: "admin-login", component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_40__["AdminLoginComponent"] }, { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_41__["AdminComponent"], children: [{ path: "", component: _admin_basic_admin_panel_basic_admin_panel_component__WEBPACK_IMPORTED_MODULE_42__["BasicAdminPanelComponent"] }, { path: "advanced", component: _admin_advanced_admin_panel_advanced_admin_panel_component__WEBPACK_IMPORTED_MODULE_43__["AdvancedAdminPanelComponent"], children: [{ path: "my-patients", component: _admin_advanced_admin_panel_my_patients_my_patients_component__WEBPACK_IMPORTED_MODULE_44__["MyPatientsComponent"] }, { path: "push-notifications", component: _admin_advanced_admin_panel_push_notifications_push_notifications_component__WEBPACK_IMPORTED_MODULE_45__["PushNotificationsComponent"] }] }] }] }, { path: "**", redirectTo: "/en" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_25__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_46__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_46__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_29__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_29__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_22__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
class AppServerModule {
}


/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




class ChangePasswordComponent {
    constructor(formBuilder, authenticationServiceService, http, activatedRoute, redirectsService, additionalService, translate, languageService) {
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.redirectsService = redirectsService;
        this.additionalService = additionalService;
        this.translate = translate;
        this.languageService = languageService;
        this.changePasswordFormSubmitted = false;
        this.differentPasswords = false;
        this.failedChangePassword = false;
    }
    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.changePasswordForm = this.formBuilder.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ])),
                repeat_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ]))
            });
        }
    }
    // convenience getter for easy access to form fields
    get change_password_form_data() {
        return this.changePasswordForm.controls;
    }
    // dentist trying to log in
    onchangePasswordFormSubmit() {
        this.differentPasswords = false;
        this.changePasswordFormSubmitted = true;
        // stop here if form is invalid
        if (this.changePasswordForm.invalid) {
            return;
        }
        if (this.change_password_form_data.password.value.trim() !== this.change_password_form_data.repeat_password.value.trim()) {
            this.differentPasswords = true;
            return;
        }
        const ParseHeaders = {
            headers: new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        this.activatedRoute.params.subscribe((params) => {
            this.additionalService.showLoader();
            const body = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('recoverToken', '123').set('password', this.change_password_form_data.password.value.trim());
            this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/change-password', body.toString(), ParseHeaders).subscribe({
                next: (response) => {
                    this.additionalService.hideLoader();
                    if (response.success) {
                        this.redirectsService.redirectToPatientLogin('change-password');
                    }
                    else if (response.errors) {
                        this.failedChangePassword = true;
                    }
                },
                error: error => this.authenticationServiceService.logout('patient')
            });
        });
    }
}


/***/ }),

/***/ "./src/app/dentist-request-account/dentist-request-account.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/dentist-request-account/dentist-request-account.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_DentistRequestAccountComponent, View_DentistRequestAccountComponent_0, View_DentistRequestAccountComponent_Host_0, DentistRequestAccountComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DentistRequestAccountComponent", function() { return RenderType_DentistRequestAccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DentistRequestAccountComponent_0", function() { return View_DentistRequestAccountComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DentistRequestAccountComponent_Host_0", function() { return View_DentistRequestAccountComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistRequestAccountComponentNgFactory", function() { return DentistRequestAccountComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dentist_request_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dentist-request-account.component */ "./src/app/dentist-request-account/dentist-request-account.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_DentistRequestAccountComponent = [];
var RenderType_DentistRequestAccountComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DentistRequestAccountComponent, data: {} });

function View_DentistRequestAccountComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "success-handle margin-bottom-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("request-account-thank-you")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle margin-bottom-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("request-account-saving-failed")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("fullName-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("fullName-max-length")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dentist_request_form_data.fullName.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.dentist_request_form_data.fullName.hasError("maxlength"); _ck(_v, 4, 0, currVal_1); }, null); }
function View_DentistRequestAccountComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("email-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("valid-email")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dentist_request_form_data.email.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.dentist_request_form_data.email.errors.email; _ck(_v, 4, 0, currVal_1); }, null); }
function View_DentistRequestAccountComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("practice-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("practice-max-length")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dentist_request_form_data.practice.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.dentist_request_form_data.practice.hasError("maxlength"); _ck(_v, 4, 0, currVal_1); }, null); }
function View_DentistRequestAccountComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.value.code, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.value.code, ""); _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.value.name; _ck(_v, 4, 0, currVal_2); }); }
function View_DentistRequestAccountComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("country-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dentist_request_form_data.country.errors.required; _ck(_v, 2, 0, currVal_0); }, null); }
function View_DentistRequestAccountComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 16, "div", [["class", "custom-google-select-style module"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "country"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 12, "select", [["class", "platform-border-color"], ["formControlName", "country"], ["id", "country"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select country:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_DentistRequestAccountComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = "country"; _ck(_v, 8, 0, currVal_8); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).transform(_co.countriesList)); _ck(_v, 16, 0, currVal_10); var currVal_11 = (_co.dentistRequestAccountFormSubmitted && _co.dentist_request_form_data.country.errors); _ck(_v, 19, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).transform("country-label")); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = true; _ck(_v, 11, 0, currVal_9); }); }
function View_DentistRequestAccountComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("phone-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("phone-max-length-validation")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dentist_request_form_data.phone.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.dentist_request_form_data.phone.hasError("maxlength"); _ck(_v, 4, 0, currVal_1); }, null); }
function View_DentistRequestAccountComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("not-valid-phone")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("website-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("website-max-length")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dentist_request_form_data.website.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.dentist_request_form_data.website.hasError("maxlength"); _ck(_v, 4, 0, currVal_1); }, null); }
function View_DentistRequestAccountComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("privacy-policy-agree")); _ck(_v, 1, 0, currVal_0); }); }
function View_DentistRequestAccountComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 126, "div", [["class", "row padding-top-50 padding-top-xs-15 padding-top-sm-15 dentist-request-account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "div", [["class", "col-xs-12 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "figure", [["class", "max-width-150 max-width-xs-100 margin-0-auto"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "Hub icon"], ["class", "width-100"], ["src", "assets/images/hub-icon-white.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "h1", [["class", "fs-36 fs-xs-26 lato-bold padding-top-10 padding-top-xs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "h2", [["class", "fs-20 lato-light padding-bottom-30 padding-bottom-xs-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 116, "div", [["class", "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 115, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onAccountRequestFormSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 14, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](23, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "fullName"], ["id", "request-account-name"], ["maxlength", "100"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 14, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](38, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "email"], ["id", "request-account-email"], ["maxlength", "100"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 14, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-practice"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](53, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "practice"], ["id", "request-account-practice"], ["maxlength", "100"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](60, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 16, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-phone"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](70, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "phone"], ["id", "request-account-phone"], ["maxlength", "20"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](74, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](77, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](79, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 14, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-website"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](87, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "website"], ["id", "request-account-website"], ["maxlength", "500"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 90)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 90).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 90)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 90)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](90, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](91, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](94, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](96, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](98, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 17, "div", [["class", "patient-register-checkboxes padding-top-15 margin-0-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 14, "div", [["class", "custom-checkbox-style module"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 5, "input", [["class", "custom-checkbox-input"], ["formControlName", "privacyPolicy"], ["id", "privacy-policy-registration-patient"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 102).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 102).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](102, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](104, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](106, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 7, "label", [["class", "fs-15 custom-checkbox-label"], ["for", "privacy-policy-registration-patient"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](108, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 2, "a", [["class", "in-app-browser-link platform-color lato-bold"], ["href", "https://dentacoin.com/privacy-policy"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](111, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](113, null, [" ", "."])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DentistRequestAccountComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](116, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 3, "div", [["class", "padding-top-30 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 2, "button", [["class", "module lato-bold platform-custom-button platform-background-color platform-border-color hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](119, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](121, 0, null, null, 5, "div", [["class", "links-below-form margin-0-auto padding-top-20 margin-top-50 padding-bottom-10 text-center fs-16 platform-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 4, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 fs-18 fs-xs-16 lato-bold platform-color"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 123).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](123, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](124, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](125, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.dentistRequestAccountForm; _ck(_v, 13, 0, currVal_9); var currVal_10 = _co.sendRequestSucceed; _ck(_v, 17, 0, currVal_10); var currVal_11 = _co.sendRequestFailed; _ck(_v, 19, 0, currVal_11); var currVal_21 = "100"; _ck(_v, 27, 0, currVal_21); var currVal_22 = "fullName"; _ck(_v, 30, 0, currVal_22); var currVal_23 = (_co.dentistRequestAccountFormSubmitted && _co.dentist_request_form_data.fullName.errors); _ck(_v, 34, 0, currVal_23); var currVal_33 = "100"; _ck(_v, 42, 0, currVal_33); var currVal_34 = "email"; _ck(_v, 45, 0, currVal_34); var currVal_35 = (_co.dentistRequestAccountFormSubmitted && _co.dentist_request_form_data.email.errors); _ck(_v, 49, 0, currVal_35); var currVal_45 = "100"; _ck(_v, 57, 0, currVal_45); var currVal_46 = "practice"; _ck(_v, 60, 0, currVal_46); var currVal_47 = (_co.dentistRequestAccountFormSubmitted && _co.dentist_request_form_data.practice.errors); _ck(_v, 64, 0, currVal_47); var currVal_48 = (_co.showCountries == true); _ck(_v, 66, 0, currVal_48); var currVal_58 = "20"; _ck(_v, 74, 0, currVal_58); var currVal_59 = "phone"; _ck(_v, 77, 0, currVal_59); var currVal_60 = (_co.dentistRequestAccountFormSubmitted && _co.dentist_request_form_data.phone.errors); _ck(_v, 81, 0, currVal_60); var currVal_61 = _co.notValidPhone; _ck(_v, 83, 0, currVal_61); var currVal_71 = "500"; _ck(_v, 91, 0, currVal_71); var currVal_72 = "website"; _ck(_v, 94, 0, currVal_72); var currVal_73 = (_co.dentistRequestAccountFormSubmitted && _co.dentist_request_form_data.website.errors); _ck(_v, 98, 0, currVal_73); var currVal_81 = "privacyPolicy"; _ck(_v, 104, 0, currVal_81); var currVal_85 = _co.isDentistPrivacyAccepted.invalid; _ck(_v, 116, 0, currVal_85); var currVal_89 = _ck(_v, 124, 0, ("/" + _co.translate.currentLang)); _ck(_v, 123, 0, currVal_89); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transform("dentist-request-account-title")); _ck(_v, 5, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).transform("dentist-request-account-subtitle")); _ck(_v, 8, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).transform("fullName-label")); _ck(_v, 23, 0, currVal_12); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).maxlength : null); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassPending; _ck(_v, 25, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).transform("email-label")); _ck(_v, 38, 0, currVal_24); var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).maxlength : null); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassUntouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassTouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassPristine; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassDirty; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassValid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassInvalid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassPending; _ck(_v, 40, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 53, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).transform("practice-label")); _ck(_v, 53, 0, currVal_36); var currVal_37 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).maxlength : null); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassUntouched; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassTouched; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassPristine; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassDirty; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassValid; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassInvalid; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassPending; _ck(_v, 55, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44); var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 70, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).transform("phone-label")); _ck(_v, 70, 0, currVal_49); var currVal_50 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).maxlength : null); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassUntouched; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassTouched; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassPristine; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassDirty; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassValid; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassInvalid; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassPending; _ck(_v, 72, 0, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57); var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 87, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).transform("website-label")); _ck(_v, 87, 0, currVal_62); var currVal_63 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).maxlength : null); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassUntouched; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassTouched; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassPristine; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassDirty; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassValid; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassInvalid; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassPending; _ck(_v, 89, 0, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70); var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassUntouched; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassTouched; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassPristine; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassDirty; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassValid; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassInvalid; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassPending; _ck(_v, 101, 0, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80); var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 108, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).transform("i-agree")); _ck(_v, 108, 0, currVal_82); var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 111, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 112).transform("privacy-policy")); _ck(_v, 111, 0, currVal_83); var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 113, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 114).transform("i-agree-end")); _ck(_v, 113, 0, currVal_84); var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 119, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 120).transform("request-account-button")); _ck(_v, 119, 0, currVal_86); var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 123).target; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 123).href; _ck(_v, 122, 0, currVal_87, currVal_88); var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 125, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).transform("go-back")); _ck(_v, 125, 0, currVal_90); }); }
function View_DentistRequestAccountComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-dentist-request-account", [], null, null, null, View_DentistRequestAccountComponent_0, RenderType_DentistRequestAccountComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _dentist_request_account_component__WEBPACK_IMPORTED_MODULE_5__["DentistRequestAccountComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationServiceService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__["RedirectsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _services_requests_service__WEBPACK_IMPORTED_MODULE_9__["RequestsService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_10__["AdditionalService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _services_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DentistRequestAccountComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-dentist-request-account", _dentist_request_account_component__WEBPACK_IMPORTED_MODULE_5__["DentistRequestAccountComponent"], View_DentistRequestAccountComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/dentist-request-account/dentist-request-account.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dentist-request-account/dentist-request-account.component.ts ***!
  \******************************************************************************/
/*! exports provided: DentistRequestAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistRequestAccountComponent", function() { return DentistRequestAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class DentistRequestAccountComponent {
    constructor(router, formBuilder, authenticationServiceService, redirectsService, http, requestsService, additionalService, translate, languageService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.http = http;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.translate = translate;
        this.languageService = languageService;
        this.dentistRequestAccountFormSubmitted = false;
        this.sendRequestSucceed = false;
        this.sendRequestFailed = false;
        this.notValidPhone = false;
        this.showCountries = false;
        this.countriesList = {};
    }
    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.requestsService.getCountries().subscribe((response) => {
                if (response.success && response.data) {
                    this.countriesList = response.data;
                    this.showCountries = true;
                }
            });
            this.dentistRequestAccountForm = this.formBuilder.group({
                fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ])),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ])),
                practice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)
                ])),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ])),
                website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ])),
                privacyPolicy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue)
            });
        }
    }
    get isDentistPrivacyAccepted() {
        return this.dentistRequestAccountForm.get('privacyPolicy');
    }
    // convenience getter for easy access to form fields
    get dentist_request_form_data() { return this.dentistRequestAccountForm.controls; }
    // on request form account submit
    onAccountRequestFormSubmit() {
        this.additionalService.showLoader();
        this.dentistRequestAccountFormSubmitted = true;
        // stop here if form is invalid
        if (this.dentistRequestAccountForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }
        let paramsMap = new Map();
        paramsMap.set('fullName', this.dentist_request_form_data.fullName.value);
        paramsMap.set('email', this.dentist_request_form_data.email.value);
        paramsMap.set('practice', this.dentist_request_form_data.practice.value);
        paramsMap.set('country', this.dentist_request_form_data.country.value);
        paramsMap.set('phone', this.dentist_request_form_data.phone.value);
        paramsMap.set('website', this.dentist_request_form_data.website.value);
        let params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        paramsMap.forEach((value, key) => {
            params = params.set(key, value);
        });
        this.requestsService.validatePhone(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('phone', this.dentist_request_form_data.phone.value).set('country_code', this.dentist_request_form_data.country.value).toString()).subscribe((validatePhoneResponse) => {
            if (validatePhoneResponse.success) {
                this.requestsService.dentistSendRequestAccountMail(params.toString()).subscribe((response) => {
                    if (response.success) {
                        this.dentistRequestAccountForm.reset();
                        Object.keys(this.dentistRequestAccountForm.controls).forEach(key => {
                            this.dentistRequestAccountForm.get(key).setErrors(null);
                        });
                        this.sendRequestSucceed = true;
                        this.sendRequestFailed = false;
                        this.additionalService.hideLoader();
                    }
                    else {
                        this.sendRequestFailed = true;
                        this.sendRequestSucceed = false;
                        this.additionalService.hideLoader();
                    }
                });
            }
            else {
                this.notValidPhone = true;
                this.additionalService.hideLoader();
            }
        });
    }
}


/***/ }),

/***/ "./src/app/edit-account/edit-account.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-account/edit-account.component.ts ***!
  \********************************************************/
/*! exports provided: EditAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountComponent", function() { return EditAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class EditAccountComponent {
    constructor(authenticationServiceService, redirectsService, formBuilder, requestsService, additionalService) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.formBuilder = formBuilder;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.patientsEditAccountFormSubmitted = false;
        this.showCountries = false;
        this.countriesList = {};
        this.showTitles = false;
        this.titlesList = {};
        this.patientData = {};
        this.editAccountSuccess = false;
        this.editAccountFailed = false;
        this.editPasswordFailed = false;
        this.passwordsNotMatching = false;
        this.updateCoreDBData = false;
    }
    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            this.additionalService.showLoader();
            this.patientsEditAccountForm = this.formBuilder.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])),
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ])),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ])),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ])),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ])),
                repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ]))
            });
            this.requestsService.getCountries().subscribe((response) => {
                if (response.success && response.data) {
                    this.countriesList = response.data;
                    this.showCountries = true;
                }
            });
            this.requestsService.getTitles().subscribe({
                next: (response) => {
                    if (response.success && response.data) {
                        this.titlesList = response.data.titles;
                        this.showTitles = true;
                    }
                },
                error: error => this.authenticationServiceService.logout('patient')
            });
            this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: (response) => {
                    this.additionalService.hideLoader();
                    if (response.success && response.data) {
                        this.patientData = response.data;
                        this.patientName = response.data.name;
                        this.patientEncryptedPassword = response.data.password;
                        if (response.data.title !== '' && response.data.title !== null) {
                            this.patientsEditAccountForm.controls['title'].setValue(response.data.title);
                        }
                        if (response.data.name !== '' && response.data.name !== null) {
                            this.patientsEditAccountForm.controls['firstName'].setValue(response.data.name);
                        }
                        if (response.data.phone !== '' && response.data.phone !== null) {
                            this.patientsEditAccountForm.controls['phone'].setValue(response.data.phone);
                        }
                        if (response.data.country !== '' && response.data.country !== null) {
                            this.patientsEditAccountForm.controls['country'].setValue(response.data.country);
                        }
                    }
                },
                error: error => this.authenticationServiceService.logout('patient')
            });
        }
    }
    // convenience getter for easy access to form fields
    get patients_edit_account_form_data() { return this.patientsEditAccountForm.controls; }
    // patient trying to log in
    onPatientsEditAccountFormSubmit() {
        this.additionalService.showLoader();
        this.patientsEditAccountFormSubmitted = true;
        let paramsMap = new Map();
        paramsMap.set('title', this.patients_edit_account_form_data.title.value);
        paramsMap.set('name', this.patients_edit_account_form_data.firstName.value);
        paramsMap.set('phone', this.patients_edit_account_form_data.phone.value);
        paramsMap.set('country', this.patients_edit_account_form_data.country.value);
        let coreDBparamsMap = new Map();
        if (this.patients_edit_account_form_data.password.value.trim() !== '' || this.patients_edit_account_form_data.repeatPassword.value.trim() !== '') {
            if (this.patients_edit_account_form_data.password.value.trim() !== this.patients_edit_account_form_data.repeatPassword.value.trim()) {
                this.passwordsNotMatching = true;
            }
            else {
                this.passwordsNotMatching = false;
                this.updateCoreDBData = true;
                paramsMap.set('password', this.patients_edit_account_form_data.password.value.trim());
                coreDBparamsMap.set('password', this.patients_edit_account_form_data.password.value.trim());
                coreDBparamsMap.set('repeat-password', this.patients_edit_account_form_data.repeatPassword.value.trim());
            }
        }
        if (this.patients_edit_account_form_data.firstName.value.trim() !== '' || this.patients_edit_account_form_data.lastName.value.trim() !== '') {
            this.updateCoreDBData = true;
            coreDBparamsMap.set('name', this.patients_edit_account_form_data.firstName.value.trim() + ' ' + this.patients_edit_account_form_data.lastName.value.trim());
        }
        // stop here if form is invalid
        if (this.patientsEditAccountForm.invalid || this.passwordsNotMatching) {
            window.scrollTo(0, 0);
            this.additionalService.hideLoader();
            return;
        }
        let params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        paramsMap.forEach((value, key) => {
            params = params.set(key, value);
        });
        let coreDBparams = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        coreDBparamsMap.forEach((value, key) => {
            coreDBparams = coreDBparams.set(key, value);
        });
        this.requestsService.editProfile(coreDBparams.toString(), JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: (response) => {
                if (response.success) {
                    this.additionalService.hideLoader();
                    this.patientsEditAccountForm.controls['password'].setValue('');
                    this.patientsEditAccountForm.controls['repeatPassword'].setValue('');
                    this.editAccountSuccess = true;
                    window.scrollTo(0, 0);
                }
                else {
                    this.additionalService.hideLoader();
                    this.patientsEditAccountForm.controls['password'].setValue('');
                    this.patientsEditAccountForm.controls['repeatPassword'].setValue('');
                    this.editPasswordFailed = true;
                    window.scrollTo(0, 0);
                }
            },
            error: error => this.authenticationServiceService.logout('patient')
        });
    }
}


/***/ }),

/***/ "./src/app/forgotten-password/forgotten-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forgotten-password/forgotten-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgottenPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgottenPasswordComponent", function() { return ForgottenPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class ForgottenPasswordComponent {
    constructor(router, formBuilder, authenticationServiceService, redirectsService, http, requestsService, additionalService, translate, languageService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.http = http;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.translate = translate;
        this.languageService = languageService;
        this.forgottenPasswordFormSubmitted = false;
        this.sendFormSucceed = false;
        this.sendFormFailed = false;
    }
    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.forgottenPasswordForm = this.formBuilder.group({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]))
            });
        }
    }
    // convenience getter for easy access to form fields
    get forgotten_password_form_data() {
        return this.forgottenPasswordForm.controls;
    }
    // on request form account submit
    onForgottenPasswordFormSubmit() {
        this.additionalService.showLoader();
        this.forgottenPasswordFormSubmitted = true;
        // stop here if form is invalid
        if (this.forgottenPasswordForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }
        let paramsMap = new Map();
        paramsMap.set('email', this.forgotten_password_form_data.email.value);
        paramsMap.set('type_language', this.translate.currentLang);
        let params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        paramsMap.forEach((value, key) => {
            params = params.set(key, value);
        });
        this.requestsService.requestForgottenPasswordToken(params.toString()).subscribe((response) => {
            if (response.success) {
                this.forgottenPasswordForm.reset();
                Object.keys(this.forgottenPasswordForm.controls).forEach(key => {
                    this.forgottenPasswordForm.get(key).setErrors(null);
                });
                this.sendFormSucceed = true;
                this.sendFormFailed = false;
                this.additionalService.hideLoader();
            }
            else {
                this.sendFormFailed = true;
                this.sendFormSucceed = false;
                this.additionalService.hideLoader();
            }
        });
    }
}


/***/ }),

/***/ "./src/app/front-end-language/front-end-language.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/front-end-language/front-end-language.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_FrontEndLanguageComponent, View_FrontEndLanguageComponent_0, View_FrontEndLanguageComponent_Host_0, FrontEndLanguageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FrontEndLanguageComponent", function() { return RenderType_FrontEndLanguageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FrontEndLanguageComponent_0", function() { return View_FrontEndLanguageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FrontEndLanguageComponent_Host_0", function() { return View_FrontEndLanguageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontEndLanguageComponentNgFactory", function() { return FrontEndLanguageComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _front_end_language_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front-end-language.component */ "./src/app/front-end-language/front-end-language.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FrontEndLanguageComponent = [];
var RenderType_FrontEndLanguageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_FrontEndLanguageComponent, data: {} });

function View_FrontEndLanguageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_FrontEndLanguageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-front-end-language", [], null, null, null, View_FrontEndLanguageComponent_0, RenderType_FrontEndLanguageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _front_end_language_component__WEBPACK_IMPORTED_MODULE_2__["FrontEndLanguageComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_4__["RedirectsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FrontEndLanguageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-front-end-language", _front_end_language_component__WEBPACK_IMPORTED_MODULE_2__["FrontEndLanguageComponent"], View_FrontEndLanguageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/front-end-language/front-end-language.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/front-end-language/front-end-language.component.ts ***!
  \********************************************************************/
/*! exports provided: FrontEndLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontEndLanguageComponent", function() { return FrontEndLanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");


class FrontEndLanguageComponent {
    constructor(activatedRoute, translate, router, redirectsService, ngZone) {
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.router = router;
        this.redirectsService = redirectsService;
        this.ngZone = ngZone;
        this.channelArray = ['de', 'en'];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            console.log(params, 'params');
            if (this.channelArray.indexOf(params['lang']) > -1) {
                this.translate.use(params['lang']);
            }
            else if (params['lang'] === 'admin') {
                this.translate.use(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].default_language);
                this.redirectsService.redirectToAdmin();
            }
            else {
                this.translate.use(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].default_language);
                if (params.hasOwnProperty('lang')) {
                    this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/' + params['lang'])).then();
                }
                else {
                    this.router.navigateByUrl(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].default_language);
                }
            }
        });
    }
}


/***/ }),

/***/ "./src/app/home/home.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/home/home.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_HomeComponent = [];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "h1", [["class", "platform-text-color fs-30 fs-xs-22 calibri-bold text-center title-label padding-top-45 padding-top-xs-10 padding-bottom-50 padding-bottom-xs-25"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hubTitleEn; _ck(_v, 0, 0, currVal_0); }); }
function View_HomeComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h1", [["class", "platform-text-color fs-30 fs-xs-22 calibri-bold text-center title-label padding-top-45 padding-top-xs-10 padding-bottom-50 padding-bottom-xs-25"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["}"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hubTitleDe; _ck(_v, 0, 0, currVal_0); }); }
function View_HomeComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "figure", [["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", ""], ["class", "width-100 app-media"], ["itemprop", "contentUrl"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.parent.parent.context.$implicit.media, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "svg-parent"]], [[1, "data-svg", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.media; _ck(_v, 0, 0, currVal_0); }); }
function View_HomeComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "div", [], [[8, "className", 0], [1, "data-id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "a", [["class", "platform-text-color in-app-browser-link"]], [[8, "href", 4], [1, "data-phone", 0], [1, "target", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "h2", [["class", "platform-text-color fs-17 fs-xs-16 padding-top-10 calibri-bold app-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "p", [["class", "platform-text-color fs-15 fs-xs-14 line-height-16 app-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""]))], function (_ck, _v) { var currVal_5 = (_v.parent.context.$implicit.resource_type == "image"); _ck(_v, 3, 0, currVal_5); var currVal_6 = (_v.parent.context.$implicit.resource_type == "svg"); _ck(_v, 5, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.applicationsColumnClass, " text-center padding-bottom-20 padding-left-20 padding-right-20 padding-left-xs-10 padding-right-xs-10 inline-block-top single-app"); var currVal_1 = _v.parent.context.$implicit.id; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.url, ""); var currVal_3 = ((_v.parent.context.$implicit.type == "phone") ? "true" : null); var currVal_4 = ((_v.parent.context.$implicit.type == "phone") ? "_self" : "_blank"); _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4); var currVal_7 = _v.parent.context.$implicit.name_en; _ck(_v, 7, 0, currVal_7); var currVal_8 = _v.parent.context.$implicit.description_en; _ck(_v, 9, 0, currVal_8); }); }
function View_HomeComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "figure", [["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", ""], ["class", "width-100 app-media"], ["itemprop", "contentUrl"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.parent.parent.context.$implicit.media, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "svg-parent"]], [[1, "data-svg", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.media; _ck(_v, 0, 0, currVal_0); }); }
function View_HomeComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "div", [], [[8, "className", 0], [1, "data-id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "a", [["class", "platform-text-color in-app-browser-link"]], [[8, "href", 4], [1, "data-phone", 0], [1, "target", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "h2", [["class", "platform-text-color fs-17 fs-xs-16 padding-top-10 calibri-bold app-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "p", [["class", "platform-text-color fs-15 fs-xs-14 line-height-16 app-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""]))], function (_ck, _v) { var currVal_5 = (_v.parent.context.$implicit.resource_type == "image"); _ck(_v, 3, 0, currVal_5); var currVal_6 = (_v.parent.context.$implicit.resource_type == "svg"); _ck(_v, 5, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.applicationsColumnClass, " text-center padding-bottom-20 padding-left-20 padding-right-20 padding-left-xs-10 padding-right-xs-10 inline-block-top single-app"); var currVal_1 = _v.parent.context.$implicit.id; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.url, ""); var currVal_3 = ((_v.parent.context.$implicit.type == "phone") ? "true" : null); var currVal_4 = ((_v.parent.context.$implicit.type == "phone") ? "_self" : "_blank"); _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4); var currVal_7 = _v.parent.context.$implicit.name_de; _ck(_v, 7, 0, currVal_7); var currVal_8 = _v.parent.context.$implicit.description_de; _ck(_v, 9, 0, currVal_8); }); }
function View_HomeComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.translate.currentLang == "en") && ((_v.context.$implicit.name_en != "") || (_v.context.$implicit.description_en != ""))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.translate.currentLang == "de") && ((_v.context.$implicit.name_de != "") || (_v.context.$implicit.description_de != ""))); _ck(_v, 4, 0, currVal_1); }, null); }
function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "div", [["class", "container homepage-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 7, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "div", [["class", "row fs-0 apps-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.translate.currentLang == "en"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_co.translate.currentLang == "de"); _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.applications; _ck(_v, 9, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.pageColumnClass, ""); _ck(_v, 2, 0, currVal_0); }); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], [_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_4__["RedirectsService"], _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class HomeComponent {
    constructor(authenticationServiceService, redirectsService, requestsService, translate) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.translate = translate;
        this.applications = [];
        this.pageColumnClass = 'col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3';
        this.applicationsColumnClass = 'col-xs-4';
    }
    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            console.log('===== 1 =====');
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            console.log('===== 2 =====');
            this.requestsService.getDentistData(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of).subscribe((response) => {
                this.requestsService.getDentistSlug(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', JSON.parse(window.localStorage.getItem('currentPatient')).patient_of).toString()).subscribe((dentistSlugResponse) => {
                    console.log(dentistSlugResponse, 'dentistSlugResponse');
                    this.hubTitleEn = response.data.hub_title_en;
                    this.hubTitleDe = response.data.hub_title_de;
                    this.applications = Object.keys(response.data.applications).map(i => response.data.applications[i]);
                    if (this.applications.length) {
                        for (let i = 0; i < this.applications.length; i += 1) {
                            // setting dynamic dentist trp profile link
                            if (this.applications[i].url.includes('reviews.dentacoin.com') && dentistSlugResponse.success) {
                                // setting up trp link to head to dentist profile and cross login
                                this.applications[i].url = this.applications[i].url + '/custom-cookie?slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_token) + '&dentist_slug=' + dentistSlugResponse.data;
                            }
                            else if (this.applications[i].url.includes('dentavox.dentacoin.com') || this.applications[i].url.includes('assurance.dentacoin.com')) {
                                // setting up dentavox and assurance cross login
                                this.applications[i].url = this.applications[i].url + '/custom-cookie?slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_token);
                            }
                            if (this.applications[i].resource_type == 'svg') {
                                this.applications[i].media = encodeURIComponent(this.applications[i].media);
                            }
                        }
                    }
                    if (this.applications.length >= 7) {
                        this.pageColumnClass = 'col-xs-12 col-md-8 col-md-offset-2';
                        this.applicationsColumnClass = 'col-xs-4 col-sm-3';
                    }
                });
            });
        }
    }
}


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_LandingPageComponent, View_LandingPageComponent_0, View_LandingPageComponent_Host_0, LandingPageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LandingPageComponent", function() { return RenderType_LandingPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingPageComponent_0", function() { return View_LandingPageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingPageComponent_Host_0", function() { return View_LandingPageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponentNgFactory", function() { return LandingPageComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_LandingPageComponent = [];
var RenderType_LandingPageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_LandingPageComponent, data: {} });

function View_LandingPageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [["class", "module black-white-button"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["SIGN IN"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 2, 0, (("/" + _co.translate.currentLang) + "/admin-login")); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_LandingPageComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 17, "div", [["class", "fs-14 inline-block-top padding-bottom-15 logged-in-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "padding-bottom-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", " DCN | $ ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "figure", [["class", "inline-block margin-left-15 max-width-40 dentist-avatar"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "img", [["alt", "Dentist avatar"], ["class", "width-100"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 9, "div", [["class", "logout-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "span", [["class", "up-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u25B2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 4, "a", [["class", "inline-block logout margin-right-15"], ["href", "javascript:void(0)"], ["itemprop", "url"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.authenticationServiceService.logout("dentist") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 3, "span", [["class", "inline-block fs-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-power-off"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "a", [["class", "inline-block module white-light-blue-button lato-bold my-account"], ["itemprop", "url"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["My Account"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dentistData.name; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.dcnAmount; var currVal_2 = _co.usdAmount; _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.dentistData.avatar_url, ""); _ck(_v, 7, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).transform("admin-menu-element-logout")); _ck(_v, 14, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.myAccountLink, ""); _ck(_v, 16, 0, currVal_5); }); }
function View_LandingPageComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [["class", "white-purple-gradient-button module lato-bold margin-left-25 padding-left-50 padding-right-50 fs-20"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["SIGN UP"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 2, 0, (("/" + _co.translate.currentLang) + "/admin-login")); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_LandingPageComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "white-gray-button-with-check module lato-bold margin-left-25 padding-left-30 padding-right-60 fs-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["SIGNED"]))], null, null); }
function View_LandingPageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 119, "div", [["class", "landing-page-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 10, "section", [["class", "container-fluid padding-top-15 padding-bottom-10 section-header"]], [[1, "data-loggedin", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "figure", [["class", "col-xs-4 padding-right-xs-0"], ["itemscope", ""], ["itemtype", "http://schema.org/Organization"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "a", [["itemprop", "url"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "img", [["alt", "Dentacoin logo"], ["class", "max-width-150 width-100"], ["itemprop", "logo"], ["src", "assets/images/hub-app-white-logo-with-text.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 4, "div", [["class", "col-xs-8 text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LandingPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LandingPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 21, "section", [["class", "section-top-image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 14, "div", [["class", "top-image-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 2, "picture", [["class", "top-image"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 0, "source", [["media", "(max-width: 768px)"], ["srcset", "assets/images/mobile-image.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "img", [["alt", "Header image"], ["itemprop", "contentUrl"], ["src", "assets/images/header-image.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 10, "div", [["class", "top-image-description text-center-xs padding-bottom-xs-60"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 3, "h1", [["class", "fs-46 fs-md-34 fs-xs-28 line-height-xs-32 line-height-54 fs-sm-26 line-height-sm-30 lato-bold color-black"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["LAUNCH YOUR "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "br", [["class", "hide-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" OWN LOYALTY APP"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "div", [["class", "fs-28 fs-sm-20 fs-xs-20 lato-light padding-top-15 padding-bottom-25 padding-bottom-sm-15 padding-bottom-xs-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Retain and reward loyal patients at no cost"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 3, "a", [["class", "module white-light-blue-button fs-24 lato-bold padding-left-40 padding-right-40"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](26, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["START NOW"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 5, "div", [["class", "delimeter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 0, "div", [["class", "line"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 3, "figure", [["class", "tile-image"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 0, "img", [["alt", "Tile image"], ["class", "width-100"], ["itemprop", "contentUrl"], ["src", "assets/images/absolute-element.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 1, "figcaption", [["class", "color-white lato-bold text-center fs-18 fs-xs-14 padding-bottom-20 padding-bottom-xs-10 padding-right-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["NO DEVELOPMENT NEEDED"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 39, "section", [["class", "section-everything-you-need"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 38, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 4, "div", [["class", "col-xs-12 padding-top-100 padding-bottom-50 text-center padding-top-xs-60"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 3, "h2", [["class", "lato-bold fs-38 fs-xs-24 color-mid-gray"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EVERYTHING YOU NEED TO "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 0, "br", [["class", "hide-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" GET MORE LOYAL PATIENTS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 7, "div", [["class", "row fs-0 text-center-xs padding-bottom-xs-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 1, "figure", [["class", "col-xs-12 col-sm-6 padding-right-60 inline-block padding-bottom-xs-20 padding-right-xs-15"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 0, "img", [["alt", "Phone image"], ["class", "width-100"], ["itemprop", "contentUrl"], ["src", "assets/images/phone-img1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 4, "div", [["class", "col-xs-12 col-sm-6 color-black inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "h3", [["class", "fs-36 line-height-40 fs-xs-26 line-height-xs-28 fs-sm-24 line-height-sm-28 lato-bold padding-bottom-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Use a ready mobile app with your patients"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 1, "div", [["class", "fs-18 fs-xs-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Customize it with your own logo, colors, and shortcuts for appointments booking, your website,featured treatments and any other information you want to emphasize."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 7, "div", [["class", "row fs-0 flex text-center-xs padding-bottom-xs-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "figure", [["class", "col-xs-12 col-sm-7 inline-block padding-bottom-xs-20"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 0, "img", [["alt", "Phone image"], ["class", "width-100"], ["itemprop", "contentUrl"], ["src", "assets/images/phone-img2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 4, "div", [["class", "col-xs-12 col-sm-5 color-black inline-block content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 1, "h3", [["class", "fs-36 line-height-40 fs-xs-26 line-height-xs-28 fs-sm-24 line-height-sm-28 lato-bold padding-bottom-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Drive loyalty with free rewards for your patients"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 1, "div", [["class", "fs-18 fs-xs-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Patients earn rewards in Dentacoin digital currency through the app for various activities such as submitting an online review for your practice, participating in surveys on dental topics, and improving their oral care routine."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 7, "div", [["class", "row fs-0 text-center-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 1, "figure", [["class", "col-xs-12 col-sm-6 padding-right-60 inline-block padding-bottom-xs-20 padding-right-xs-15"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 0, "img", [["alt", "Phone image"], ["class", "width-100"], ["itemprop", "contentUrl"], ["src", "assets/images/phone-img3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 4, "div", [["class", "col-xs-12 col-sm-6 color-black inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 1, "h3", [["class", "fs-36 line-height-40 fs-xs-26 line-height-xs-28 fs-sm-24 line-height-sm-28 lato-bold padding-bottom-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Deliver notifications to patient\u2019s smart phone"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 1, "div", [["class", "fs-18 fs-xs-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Send push notifications for promotions, special offers, change of hours and other updates to engage and keep in touch with patients. No coding experience needed!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 6, "div", [["class", "col-xs-12 col-sm-10 col-sm-offset-1 text-center padding-top-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 4, "div", [["class", "padding-bottom-80"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 3, "a", [["class", "module white-light-blue-button fs-24 lato-bold padding-left-40 padding-right-40"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](71, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["START NOW"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 0, "div", [["class", "small-delimeter-line"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 45, "section", [["class", "section-how-it-works padding-bottom-120"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 44, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 2, "div", [["class", "col-xs-12 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 1, "h2", [["class", "lato-bold fs-38 fs-xs-24 color-mid-gray padding-top-30 padding-bottom-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["HOW IT WORKS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 39, "div", [["class", "row list-with-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 38, "div", [["class", "col-xs-12 col-sm-10 col-sm-offset-1 fs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 9, "div", [["class", "padding-bottom-20 padding-bottom-xs-40"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 1, "figure", [["class", "icon inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 0, "img", [["alt", "How it works image"], ["class", "width-100"], ["itemprop", "contentUrl"], ["src", "assets/images/steps-icon1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 6, "div", [["class", "content inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 1, "span", [["class", "lato-bold fs-22 fs-xs-18"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Create a dentist profile on dentacoin.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LandingPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](89, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LandingPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](91, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 5, "div", [["class", "padding-bottom-20 padding-bottom-xs-40"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 1, "figure", [["class", "icon inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 0, "img", [["alt", "How it works image"], ["class", "width-100"], ["itemprop", "contentUrl"], ["src", "assets/images/steps-icon2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 2, "div", [["class", "content inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 1, "span", [["class", "lato-bold fs-22 fs-xs-18"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wait for a verification email from the Onboarding Team"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 9, "div", [["class", "padding-bottom-20 padding-bottom-xs-40"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 1, "figure", [["class", "icon inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 0, "img", [["alt", "How it works image"], ["class", "width-100"], ["itemprop", "contentUrl"], ["src", "assets/images/steps-icon3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 6, "div", [["class", "content inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 1, "span", [["class", "lato-bold fs-22 fs-xs-18"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Join Dentacoin partner network"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 3, "a", [["class", "white-purple-gradient-button module lato-bold margin-left-25 padding-left-50 padding-right-50 fs-20"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 105).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](105, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](106, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["JOIN NOW"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 5, "div", [["class", "padding-bottom-20 padding-bottom-xs-40"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](109, 0, null, null, 1, "figure", [["class", "icon inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 0, "img", [["alt", "How it works image"], ["class", "width-100"], ["itemprop", "contentUrl"], ["src", "assets/images/steps-icon4.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 2, "div", [["class", "content inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](112, 0, null, null, 1, "span", [["class", "lato-bold fs-22 fs-xs-18"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Access and customize your app screen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 5, "div", [["class", "padding-bottom-20 padding-bottom-xs-40"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 1, "figure", [["class", "icon inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, null, 0, "img", [["alt", "How it works image"], ["class", "width-100"], ["itemprop", "contentUrl"], ["src", "assets/images/steps-icon5.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 2, "div", [["class", "content inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 1, "span", [["class", "lato-bold fs-22 fs-xs-18"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Invite patients to download your app"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 54, "section", [["class", "section-footer padding-bottom-30 padding-top-40 color-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](121, 0, null, null, 53, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 49, "div", [["class", "row fs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](123, 0, null, null, 5, "div", [["class", "col-xs-12 col-md-3 inline-block text-center-xs text-center-sm padding-bottom-xs-20 padding-bottom-sm-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](124, 0, null, null, 4, "figure", [["itemscope", ""], ["itemtype", "http://schema.org/Organization"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](125, 0, null, null, 3, "a", [["class", "fs-14"], ["href", "//dentacoin.com"], ["itemprop", "url"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](126, 0, null, null, 0, "img", [["alt", "Dentacoin logo"], ["class", "max-width-30"], ["itemprop", "logo"], ["src", "assets/images/round-logo-white.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 1, "span", [["class", "color-white padding-left-10 inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Powered by Dentacoin"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, null, 29, "div", [["class", "col-xs-12 col-md-6 text-center inline-block padding-bottom-xs-20 padding-bottom-sm-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](130, 0, null, null, 28, "ul", [["class", "fs-14"], ["itemscope", ""], ["itemtype", "http://schema.org/SiteNavigationElement"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](131, 0, null, null, 3, "li", [["class", "inline-block-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](132, 0, null, null, 2, "a", [["class", "vox-link-tracker"], ["href", "https://dentavox.dentacoin.com/"], ["itemprop", "url"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](133, 0, null, null, 1, "span", [["class", "color-white"], ["itemprop", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DentaVox"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 1, "li", [["class", "inline-block-top separator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["|"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](137, 0, null, null, 3, "li", [["class", "inline-block-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](138, 0, null, null, 2, "a", [["class", "trp-link-tracker"], ["href", "https://reviews.dentacoin.com/"], ["itemprop", "url"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](139, 0, null, null, 1, "span", [["class", "color-white"], ["itemprop", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Trusted Reviews"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](141, 0, null, null, 1, "li", [["class", "inline-block-top separator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["|"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](143, 0, null, null, 3, "li", [["class", "inline-block-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](144, 0, null, null, 2, "a", [["href", "https://assurance.dentacoin.com/"], ["itemprop", "url"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](145, 0, null, null, 1, "span", [["class", "color-white"], ["itemprop", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Assurance"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](147, 0, null, null, 1, "li", [["class", "inline-block-top separator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["|"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](149, 0, null, null, 3, "li", [["class", "inline-block-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](150, 0, null, null, 2, "a", [["href", "https://wallet.dentacoin.com/"], ["itemprop", "url"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](151, 0, null, null, 1, "span", [["class", "color-white"], ["itemprop", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wallet"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](153, 0, null, null, 1, "li", [["class", "inline-block-top separator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["|"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](155, 0, null, null, 3, "li", [["class", "inline-block-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](156, 0, null, null, 2, "a", [["href", "https://jawsofbattle.dentacoin.com/"], ["itemprop", "url"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](157, 0, null, null, 1, "span", [["class", "color-white"], ["itemprop", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Jaws of Battle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](159, 0, null, null, 12, "div", [["class", "col-xs-12 col-md-3 inline-block text-right socials text-center-xs text-center-sm"], ["itemscope", ""], ["itemtype", "http://schema.org/Organization"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](160, 0, null, null, 2, "link", [["itemprop", "url"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 161).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](161, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](162, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](163, 0, null, null, 8, "ul", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](164, 0, null, null, 1, "li", [["class", "inline-block fs-14"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Stay in the loop: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](166, 0, null, null, 2, "li", [["class", "inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](167, 0, null, null, 1, "a", [["href", "https://www.facebook.com/dentacare.dentacoin/"], ["itemprop", "sameAs"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](168, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-facebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](169, 0, null, null, 2, "li", [["class", "inline-block telegram"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](170, 0, null, null, 1, "a", [["href", "https://t.me/dentacoin"], ["itemprop", "sameAs"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](171, 0, null, null, 0, "i", [["class", "fa fa-telegram"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](172, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](173, 0, null, null, 1, "div", [["class", "col-xs-12 text-center fs-14 padding-top-20 fs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](174, null, ["\u00A9 ", " Dentacoin Foundation. All rights reserved."]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = "/"; _ck(_v, 5, 0, currVal_3); var currVal_4 = (_co.isNotAPartnerDentistLoggedIn == false); _ck(_v, 9, 0, currVal_4); var currVal_5 = (_co.isNotAPartnerDentistLoggedIn == true); _ck(_v, 11, 0, currVal_5); var currVal_8 = _ck(_v, 26, 0, (("/" + _co.translate.currentLang) + "/dentist-request-account")); _ck(_v, 25, 0, currVal_8); var currVal_11 = _ck(_v, 71, 0, (("/" + _co.translate.currentLang) + "/dentist-request-account")); _ck(_v, 70, 0, currVal_11); var currVal_12 = (_co.isNotAPartnerDentistLoggedIn == false); _ck(_v, 89, 0, currVal_12); var currVal_13 = (_co.isNotAPartnerDentistLoggedIn == true); _ck(_v, 91, 0, currVal_13); var currVal_16 = _ck(_v, 106, 0, (("/" + _co.translate.currentLang) + "/dentist-request-account")); _ck(_v, 105, 0, currVal_16); var currVal_17 = _ck(_v, 162, 0, ("/" + _co.translate.currentLang)); _ck(_v, 161, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.isNotAPartnerDentistLoggedIn == true) ? "true" : null); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).href; _ck(_v, 4, 0, currVal_1, currVal_2); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).href; _ck(_v, 24, 0, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).href; _ck(_v, 69, 0, currVal_9, currVal_10); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 105).target; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 105).href; _ck(_v, 104, 0, currVal_14, currVal_15); var currVal_18 = _co.year; _ck(_v, 174, 0, currVal_18); }); }
function View_LandingPageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-landing-page", [], null, null, null, View_LandingPageComponent_0, RenderType_LandingPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"], [_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationServiceService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalService"], _services_requests_service__WEBPACK_IMPORTED_MODULE_8__["RequestsService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_9__["RedirectsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LandingPageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-landing-page", _landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"], View_LandingPageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class LandingPageComponent {
    constructor(authenticationServiceService, translate, languageService, additionalService, requestsService, redirectsService) {
        this.authenticationServiceService = authenticationServiceService;
        this.translate = translate;
        this.languageService = languageService;
        this.additionalService = additionalService;
        this.requestsService = requestsService;
        this.redirectsService = redirectsService;
        this.year = new Date().getFullYear();
        this.dcnAmount = 0;
        this.usdAmount = 0;
        this.dentistData = {
            name: '',
            email: '',
            avatar_url: ''
        };
        this.isNotAPartnerDentistLoggedIn = authenticationServiceService.hasNotAPartnerDentistStorageSession();
    }
    ngOnInit() {
        this.myAccountLink = this.additionalService.generateNotAPartnerDentistAccountLink();
        this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).token).subscribe({
            next: (response) => {
                this.dentistData.name = response.data.name;
                this.dentistData.email = response.data.email;
                this.dentistData.avatar_url = response.data.avatar_url;
                if (response.data.is_partner == true || response.data.is_hub_app_dentist == true) {
                    this.redirectsService.redirectToAdmin();
                }
            },
            error: error => this.authenticationServiceService.logout('dentist')
        });
        this.updateDentistDcnAndUsdBalance();
        if (typeof (this.updateDentistDcnAndUsdBalanceTimer) !== 'undefined') {
            clearInterval(this.updateDentistDcnAndUsdBalanceTimer);
            this.updateDentistDcnAndUsdBalanceTimer = undefined;
        }
        this.updateDentistDcnAndUsdBalanceTimer = setInterval(() => {
            if (!this.authenticationServiceService.hasPatientStorageSession()) {
                clearInterval(this.updateDentistDcnAndUsdBalanceTimer);
                this.updateDentistDcnAndUsdBalanceTimer = undefined;
            }
            else {
                this.updateDentistDcnAndUsdBalance();
            }
        }, 5000);
    }
    updateDentistDcnAndUsdBalance() {
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).token).subscribe({
            next: (response) => {
                if (response.success) {
                    this.dcnAmount = response.data;
                    this.requestsService.getDentacoinDataByExternalProvider('USD').subscribe((coingeckoResponse) => {
                        this.usdAmount = Number(((1 / Number(Number(coingeckoResponse) / 100)) * this.dcnAmount).toFixed(2));
                    });
                }
            },
            error: error => this.authenticationServiceService.logout('dentist')
        });
    }
}


/***/ }),

/***/ "./src/app/logged-in-wrapper/logged-in-wrapper.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/logged-in-wrapper/logged-in-wrapper.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_LoggedInWrapperComponent, View_LoggedInWrapperComponent_0, View_LoggedInWrapperComponent_Host_0, LoggedInWrapperComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoggedInWrapperComponent", function() { return RenderType_LoggedInWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoggedInWrapperComponent_0", function() { return View_LoggedInWrapperComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoggedInWrapperComponent_Host_0", function() { return View_LoggedInWrapperComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInWrapperComponentNgFactory", function() { return LoggedInWrapperComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logged-in-wrapper.component */ "./src/app/logged-in-wrapper/logged-in-wrapper.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_LoggedInWrapperComponent = [];
var RenderType_LoggedInWrapperComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_LoggedInWrapperComponent, data: {} });

function View_LoggedInWrapperComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["selected", ""], ["value", "en"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EN"]))], function (_ck, _v) { var currVal_0 = "en"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "en"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_LoggedInWrapperComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["value", "de"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DE"]))], function (_ck, _v) { var currVal_0 = "de"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "de"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_LoggedInWrapperComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["value", "en"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EN"]))], function (_ck, _v) { var currVal_0 = "en"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "en"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_LoggedInWrapperComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["selected", ""], ["value", "de"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DE"]))], function (_ck, _v) { var currVal_0 = "de"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "de"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_LoggedInWrapperComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "a", [["itemprop", "url"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Dentist logo"], ["class", "dentist-logo-img"], ["itemprop", "logo"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.dentistData.logo, ""); _ck(_v, 2, 0, currVal_3); }); }
function View_LoggedInWrapperComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 43, "div", [["class", "logged-mobile-profile-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 42, "nav", [["class", "profile-menu module"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "a", [["class", "close-logged-mobile-profile-menu"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-times"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 39, "ul", [["itemscope", ""], ["itemtype", "http://schema.org/SiteNavigationElement"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 5, "a", [["class", "in-app-browser-link"], ["itemprop", "url"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "figure", [["class", "inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "img", [["alt", "Wallet icon"], ["src", "assets/images/wallet-icon.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "span", [["itemprop", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 5, "a", [["class", "in-app-browser-link"], ["itemprop", "url"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "figure", [["class", "inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 0, "img", [["alt", "Edit account icon"], ["src", "assets/images/edit-account-icon.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 2, "span", [["itemprop", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](17, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 5, "a", [["class", "in-app-browser-link"], ["itemprop", "url"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "figure", [["class", "inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "img", [["alt", "Privacy icon"], ["src", "assets/images/privacy-icon.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 2, "span", [["itemprop", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 5, "a", [["itemprop", "url"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.authenticationServiceService.logout("patient") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "figure", [["class", "inline-block"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 0, "img", [["alt", "Logout icon"], ["src", "assets/images/logout-icon.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 2, "span", [["itemprop", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](31, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 10, "li", [["class", "lang-switcher"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 9, "div", [["class", "border-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 8, "select", [["class", "fix-selects-for-ios"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.languageService.onLangSwitcherChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoggedInWrapperComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoggedInWrapperComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoggedInWrapperComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoggedInWrapperComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 19, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 17, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 16, "div", [["class", "row fs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 2, "figure", [["class", "col-xs-5 inline-block padding-left-xs-10 padding-right-xs-10"], ["itemscope", ""], ["itemtype", "http://schema.org/Organization"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoggedInWrapperComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 12, "div", [["class", "col-xs-7 logged-user-right-nav inline-block text-right padding-left-xs-10 padding-right-xs-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 6, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 1, "span", [["class", "user-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](55, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](57, null, ["", " DCN | $ ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 4, "div", [["class", "logged-nav inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 3, "a", [["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 2, "i", [["aria-hidden", "true"], ["class", "fa fa-bars"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 0, "div", [["class", "camping-currently-offline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 2, "main", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](66, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 9, "footer", [["class", "opacity-not-visible text-center padding-top-40 padding-bottom-10 padding-top-xs-30 padding-top-sm-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 6, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 5, "a", [["class", "inline-block in-app-browser-link"], ["href", "https://dentacoin.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 4, "figure", [["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 0, "img", [["alt", "Dentacoin logo"], ["itemprop", "contentUrl"], ["src", "assets/images/dentacoin-logo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 2, "figcaption", [["class", "fs-14 padding-top-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](75, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_7 = (_co.translate.currentLang == "en"); _ck(_v, 37, 0, currVal_7); var currVal_8 = (_co.translate.currentLang == "en"); _ck(_v, 39, 0, currVal_8); var currVal_9 = (_co.translate.currentLang == "de"); _ck(_v, 41, 0, currVal_9); var currVal_10 = (_co.translate.currentLang == "de"); _ck(_v, 43, 0, currVal_10); var currVal_11 = (_co.dentistData.logo != null); _ck(_v, 49, 0, currVal_11); var currVal_12 = ((_co.isAccountPage() === false) ? "inline-block fs-14 fs-xs-13 padding-right-10 padding-right-xs-5 padding-top-10 padding-bottom-10 platform-text-color" : "inline-block fs-14 fs-xs-13 padding-right-10 padding-right-xs-5 padding-top-10 padding-bottom-10"); _ck(_v, 53, 0, currVal_12); var currVal_16 = "fa fa-bars"; var currVal_17 = ((_co.isAccountPage() === false) ? "color-white-on-hub platform-text-color" : "color-white-on-hub"); _ck(_v, 62, 0, currVal_16, currVal_17); _ck(_v, 66, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.myAccountLink, ""); _ck(_v, 6, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).transform("my-wallet-btn")); _ck(_v, 10, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.myAccountLink, "&route=edit-account"); _ck(_v, 13, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).transform("edit-account-btn")); _ck(_v, 17, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.myAccountLink, "&route=manage-privacy"); _ck(_v, 20, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).transform("manage-privacy-btn")); _ck(_v, 24, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).transform("log-out-btn")); _ck(_v, 31, 0, currVal_6); var currVal_13 = _co.patientData.name; _ck(_v, 55, 0, currVal_13); var currVal_14 = _co.dcnAmount; var currVal_15 = _co.usdAmount; _ck(_v, 57, 0, currVal_14, currVal_15); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 75, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).transform("powered-by-dcn")); _ck(_v, 75, 0, currVal_18); }); }
function View_LoggedInWrapperComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-logged-in-wrapper", [], null, null, null, View_LoggedInWrapperComponent_0, RenderType_LoggedInWrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["LoggedInWrapperComponent"], [_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationServiceService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__["RedirectsService"], _services_requests_service__WEBPACK_IMPORTED_MODULE_8__["RequestsService"], _services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoggedInWrapperComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-logged-in-wrapper", _logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["LoggedInWrapperComponent"], View_LoggedInWrapperComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/logged-in-wrapper/logged-in-wrapper.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/logged-in-wrapper/logged-in-wrapper.component.ts ***!
  \******************************************************************/
/*! exports provided: LoggedInWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInWrapperComponent", function() { return LoggedInWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");


class LoggedInWrapperComponent {
    constructor(authenticationServiceService, redirectsService, requestsService, languageService, translate, router) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.languageService = languageService;
        this.translate = translate;
        this.router = router;
        this.dentistData = {
            logo: ''
        };
        this.patientData = {
            name: ''
        };
        /*public applications = [];
        public showApplications: boolean = false;*/
        this.dcnAmount = 0;
        this.usdAmount = 0;
    }
    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hybrid === true) {
                document.addEventListener('shouldLogoutPatient', () => {
                    this.authenticationServiceService.logout('patient');
                });
                this.myAccountLink = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].accountDomain + '/custom-cookie?mobile-app=hubapp&slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_token);
            }
            else {
                this.myAccountLink = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].accountDomain + '/custom-cookie?slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_token);
            }
            this.requestsService.getDentistData(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of).subscribe((response) => {
                this.dentistData.logo = response.data.logo;
            });
            this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: (response) => {
                    this.patientData.name = response.data.name;
                },
                error: error => this.authenticationServiceService.logout('patient')
            });
            this.updatePatientDcnAndUsdBalance();
            if (typeof (this.updatePatientDcnAndUsdBalanceTimer) !== 'undefined') {
                clearInterval(this.updatePatientDcnAndUsdBalanceTimer);
                this.updatePatientDcnAndUsdBalanceTimer = undefined;
            }
            this.updatePatientDcnAndUsdBalanceTimer = setInterval(() => {
                if (!this.authenticationServiceService.hasPatientStorageSession()) {
                    clearInterval(this.updatePatientDcnAndUsdBalanceTimer);
                    this.updatePatientDcnAndUsdBalanceTimer = undefined;
                }
                else {
                    this.updatePatientDcnAndUsdBalance();
                }
            }, 5000);
        }
    }
    updatePatientDcnAndUsdBalance() {
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: (response) => {
                if (response.success) {
                    this.dcnAmount = response.data;
                    this.requestsService.getDentacoinDataByExternalProvider('USD').subscribe((coingeckoResponse) => {
                        this.usdAmount = Number(((1 / Number(Number(coingeckoResponse) / 100)) * this.dcnAmount).toFixed(2));
                    });
                }
            },
            error: error => this.authenticationServiceService.logout('patient')
        });
    }
    isAccountPage() {
        if (this.router.url.indexOf('my-wallet') !== -1 || this.router.url.indexOf('edit-account') !== -1 || this.router.url.indexOf('manage-privacy') !== -1) {
            return true;
        }
        else {
            return false;
        }
    }
}


/***/ }),

/***/ "./src/app/manage-privacy/manage-privacy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/manage-privacy/manage-privacy.component.ts ***!
  \************************************************************/
/*! exports provided: ManagePrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePrivacyComponent", function() { return ManagePrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class ManagePrivacyComponent {
    constructor(authenticationServiceService, redirectsService, requestsService) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.requestsService = requestsService;
        this.accountDataDownloadingFailed = false;
        this.accountDeletionFailed = false;
        this.downloadingGDPRDataFailed = false;
    }
    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
    }
    deleteAccountMethod() {
        const deleteAccount = confirm('Warning! Are you sure you want to delete your account? Deleting your account is permanent action.');
        if (deleteAccount === true) {
            this.requestsService.deleteProfile(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('self_deleted', 'true').toString(), JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: (response) => {
                    if (response.success && response.data) {
                        this.authenticationServiceService.logout('patient');
                    }
                    else {
                        this.accountDeletionFailed = true;
                    }
                },
                error: error => this.authenticationServiceService.logout('patient')
            });
        }
    }
    downloadGDPRDataMethod() {
        console.log('downloadGDPRDataMethod');
        this.requestsService.downloadGDPRData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: (response) => {
                if (response.success && response.data) {
                    window.open(response.data, '_system');
                    return false;
                }
                else {
                    this.downloadingGDPRDataFailed = true;
                }
            },
            error: error => this.authenticationServiceService.logout('patient')
        });
    }
}


/***/ }),

/***/ "./src/app/my-wallet/my-wallet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-wallet/my-wallet.component.ts ***!
  \**************************************************/
/*! exports provided: MyWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletComponent", function() { return MyWalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





class MyWalletComponent {
    constructor(authenticationServiceService, redirectsService, formBuilder, requestsService, additionalService) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.formBuilder = formBuilder;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.withdrawFormSubmitted = false;
        this.showCurrenciesList = false;
        this.showWithdrawHistory = false;
        this.withdrawHistory = [];
        this.withdrawFailed = false;
        this.withdrawSucceed = false;
        this.usdVal = 0;
        this.eurVal = 0;
        this.gbpVal = 0;
        this.rubVal = 0;
        this.addresses = [];
        this.currencies = ['USD', 'EUR', 'GBP', 'RUB'];
    }
    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
        else {
            this.withdrawForm = this.formBuilder.group({
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(42), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(42)
                ])),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10000)
                ]))
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__('form#withdraw .disabled-amount').on('click', (e) => {
                jquery__WEBPACK_IMPORTED_MODULE_4__(e.currentTarget).hide();
                jquery__WEBPACK_IMPORTED_MODULE_4__('form#withdraw .amount').show().focus();
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__(document).on('click', '.search-result .search-body ul li a', (e) => {
                this.withdrawForm.controls['address'].setValue(jquery__WEBPACK_IMPORTED_MODULE_4__(e.currentTarget).attr('data-value'));
                jquery__WEBPACK_IMPORTED_MODULE_4__('.search-result').hide();
            });
            this.requestsService.getAddresses(JSON.parse(window.localStorage.getItem('currentPatient')).id).subscribe((response) => {
                if (response.success) {
                    if (response.data.length) {
                        this.addresses = Object.keys(response.data).map(i => response.data[i]);
                        if (this.addresses.length) {
                            this.withdrawForm.controls['address'].setValue(this.addresses[0].dcn_address);
                        }
                    }
                }
            });
            this.updateDCNBalance();
            this.updateDCNWithdrawHistory();
        }
    }
    updateDCNBalance() {
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: (response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (response.success) {
                    this.withdrawForm.controls['amount'].setValue(response.data);
                    this.dcnAmount = response.data;
                    for (let i = 0, len = this.currencies.length; i < len; i++) {
                        this.requestsService.getDentacoinDataByExternalProvider(this.currencies[i]).subscribe((coingeckoResponse) => {
                            if (this.currencies[i] === 'USD') {
                                this.usdVal = 1 / Number(Number(coingeckoResponse) / 100);
                                this.usdAmount = Number((this.usdVal * this.dcnAmount).toFixed(4));
                            }
                            else if (this.currencies[i] === 'EUR') {
                                this.eurVal = 1 / Number(Number(coingeckoResponse) / 100);
                            }
                            else if (this.currencies[i] === 'GBP') {
                                this.gbpVal = 1 / Number(Number(coingeckoResponse) / 100);
                            }
                            else if (this.currencies[i] === 'RUB') {
                                this.rubVal = 1 / Number(Number(coingeckoResponse) / 100);
                            }
                        });
                    }
                    let checkingIfRequestsFinished = setInterval(() => {
                        console.log('checkingIfRequestsFinished');
                        if (this.usdVal !== 0 && this.eurVal !== 0 && this.gbpVal !== 0 && this.rubVal !== 0) {
                            clearInterval(checkingIfRequestsFinished);
                            jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
                                jquery__WEBPACK_IMPORTED_MODULE_4__('.my-wallet-container .dropdown-hidden-menu button').on('click', (e) => {
                                    var this_btn = jquery__WEBPACK_IMPORTED_MODULE_4__(e.currentTarget);
                                    jquery__WEBPACK_IMPORTED_MODULE_4__('.my-wallet-container .current-converted-price .amount').html((parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__('.current-dcn-amount').html()) * parseFloat(this_btn.attr('data-multiple-with'))).toFixed(2));
                                    jquery__WEBPACK_IMPORTED_MODULE_4__('.my-wallet-container .current-converted-price .symbol span').html(this_btn.html());
                                });
                            });
                        }
                    }, 500);
                }
            }),
            error: error => this.authenticationServiceService.logout('patient')
        });
    }
    updateDCNWithdrawHistory() {
        const withdrawHistoryBody = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('id', JSON.parse(window.localStorage.getItem('currentPatient')).id).set('token', JSON.parse(window.localStorage.getItem('currentPatient')).token);
        this.requestsService.getWithdrawHistory(withdrawHistoryBody.toString()).subscribe({
            next: (withdrawHistoryResponse) => {
                if (withdrawHistoryResponse.success) {
                    this.withdrawHistory = Object.keys(withdrawHistoryResponse.data).map(i => withdrawHistoryResponse.data[i]);
                    this.showWithdrawHistory = true;
                }
            },
            error: error => this.authenticationServiceService.logout('patient')
        });
    }
    // convenience getter for easy access to form fields
    get withdraw_form_data() { return this.withdrawForm.controls; }
    withdraw(body) {
        this.requestsService.withdraw(body).subscribe((withdrawResponse) => {
            this.additionalService.hideLoader();
            if (withdrawResponse.success) {
                this.updateDCNBalance();
                this.updateDCNWithdrawHistory();
                this.successMessage = withdrawResponse.message;
                this.withdrawSucceed = true;
            }
            else {
                this.errorMessage = withdrawResponse.error;
                this.withdrawFailed = true;
            }
        });
    }
    // patient saving his DCN addess in CoreDB
    onWithdrawSubmit() {
        this.additionalService.showLoader();
        this.withdrawFormSubmitted = true;
        // stop here if form is invalid
        if (this.withdrawForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }
        // if the withdraw to address is the same as the last time withdrawing
        const withdrawBody = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('amount', this.withdraw_form_data.amount.value).set('address', this.withdraw_form_data.address.value.trim()).set('id', JSON.parse(window.localStorage.getItem('currentPatient')).id).set('token', JSON.parse(window.localStorage.getItem('currentPatient')).token);
        this.withdraw(withdrawBody.toString());
        return;
    }
}


/***/ }),

/***/ "./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_NotLoggedInWrapperComponent, View_NotLoggedInWrapperComponent_0, View_NotLoggedInWrapperComponent_Host_0, NotLoggedInWrapperComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NotLoggedInWrapperComponent", function() { return RenderType_NotLoggedInWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotLoggedInWrapperComponent_0", function() { return View_NotLoggedInWrapperComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotLoggedInWrapperComponent_Host_0", function() { return View_NotLoggedInWrapperComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLoggedInWrapperComponentNgFactory", function() { return NotLoggedInWrapperComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-logged-in-wrapper.component */ "./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_NotLoggedInWrapperComponent = [];
var RenderType_NotLoggedInWrapperComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_NotLoggedInWrapperComponent, data: {} });

function View_NotLoggedInWrapperComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["class", "color-main"], ["selected", ""], ["value", "en"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EN"]))], function (_ck, _v) { var currVal_0 = "en"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "en"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_NotLoggedInWrapperComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["class", "color-main"], ["value", "de"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DE"]))], function (_ck, _v) { var currVal_0 = "de"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "de"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_NotLoggedInWrapperComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["class", "color-main"], ["value", "en"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EN"]))], function (_ck, _v) { var currVal_0 = "en"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "en"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_NotLoggedInWrapperComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [["class", "color-main"], ["selected", ""], ["value", "de"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DE"]))], function (_ck, _v) { var currVal_0 = "de"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "de"; _ck(_v, 2, 0, currVal_1); }, null); }
function View_NotLoggedInWrapperComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "header", [["class", "padding-top-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 12, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 11, "div", [["class", "row fs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "div", [["class", "col-xs-6 col-xs-offset-6 text-right inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 9, "div", [["class", "lang-switcher inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 8, "select", [["class", "platform-text-color fix-selects-for-ios"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.languageService.onLangSwitcherChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NotLoggedInWrapperComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NotLoggedInWrapperComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NotLoggedInWrapperComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NotLoggedInWrapperComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "div", [["class", "camping-currently-offline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 2, "main", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 9, "footer", [["class", "opacity-not-visible text-center padding-top-100 padding-top-xs-40 padding-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 6, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 5, "a", [["class", "inline-block in-app-browser-link"], ["href", "https://dentacoin.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 4, "figure", [["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 0, "img", [["alt", "Dentacoin logo"], ["itemprop", "contentUrl"], ["src", "assets/images/dentacoin-logo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 2, "figcaption", [["class", "fs-14 padding-top-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](26, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.translate.currentLang == "en"); _ck(_v, 7, 0, currVal_0); var currVal_1 = (_co.translate.currentLang == "en"); _ck(_v, 9, 0, currVal_1); var currVal_2 = (_co.translate.currentLang == "de"); _ck(_v, 11, 0, currVal_2); var currVal_3 = (_co.translate.currentLang == "de"); _ck(_v, 13, 0, currVal_3); _ck(_v, 17, 0); }, function (_ck, _v) { var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).transform("powered-by-dcn")); _ck(_v, 26, 0, currVal_4); }); }
function View_NotLoggedInWrapperComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-not-logged-in-wrapper", [], null, null, null, View_NotLoggedInWrapperComponent_0, RenderType_NotLoggedInWrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["NotLoggedInWrapperComponent"], [_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationServiceService"], _services_requests_service__WEBPACK_IMPORTED_MODULE_7__["RequestsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NotLoggedInWrapperComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-not-logged-in-wrapper", _not_logged_in_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["NotLoggedInWrapperComponent"], View_NotLoggedInWrapperComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/not-logged-in-wrapper/not-logged-in-wrapper.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotLoggedInWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLoggedInWrapperComponent", function() { return NotLoggedInWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class NotLoggedInWrapperComponent {
    constructor(authenticationServiceService, requestsService, translate, languageService) {
        this.authenticationServiceService = authenticationServiceService;
        this.requestsService = requestsService;
        this.translate = translate;
        this.languageService = languageService;
        this.dentistLogo = '';
        this.dentistLogoClass = '';
    }
    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            if (window.localStorage.getItem('currentPatient') != null) {
                this.requestsService.getDentistData(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of).subscribe((response) => {
                    if (response.success) {
                        this.dentistLogo = response.data.logo;
                    }
                });
            }
            else {
                this.dentistLogo = 'assets/images/one-line-logo-black.svg';
                this.dentistLogoClass = 'max-width-140';
            }
        }
    }
}


/***/ }),

/***/ "./src/app/patient-login-page/patient-login-page.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/patient-login-page/patient-login-page.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_PatientLoginPageComponent, View_PatientLoginPageComponent_0, View_PatientLoginPageComponent_Host_0, PatientLoginPageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PatientLoginPageComponent", function() { return RenderType_PatientLoginPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PatientLoginPageComponent_0", function() { return View_PatientLoginPageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PatientLoginPageComponent_Host_0", function() { return View_PatientLoginPageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientLoginPageComponentNgFactory", function() { return PatientLoginPageComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patient_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-login-page.component */ "./src/app/patient-login-page/patient-login-page.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_PatientLoginPageComponent = [];
var RenderType_PatientLoginPageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_PatientLoginPageComponent, data: {} });

function View_PatientLoginPageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "error-handle margin-bottom-20 hide"], ["id", "missing-patient-account-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 4, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 lato-bold"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_3 = _ck(_v, 5, 0, (("/" + _co.translate.currentLang) + "/request-account")); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("missing-patient-account-error")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).transform("request-one-here")); _ck(_v, 6, 0, currVal_4); }); }
function View_PatientLoginPageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 49, "div", [["class", "row padding-top-50 padding-top-xs-10 patient-login"]], [[1, "data-cookies-error", 0], [1, "data-years-and-privacy-error", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 8, "div", [["class", "col-xs-12 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "figure", [["class", "max-width-150 max-width-xs-100 margin-0-auto"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["alt", "Hub icon"], ["class", "width-100"], ["src", "assets/images/hub-icon-white.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "h1", [["class", "fs-30 fs-xs-26 lato-bold padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "h2", [["class", "fs-20 fs-xs-18 lato-light padding-bottom-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 37, "div", [["class", "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 login-parent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 36, "div", [["class", "max-width-400 margin-0-auto form-login-fields"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PatientLoginPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "div", [["class", "error-handle margin-bottom-20 custom-error hide"], ["id", "custom-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "div", [["class", "error-handle margin-bottom-20 hide"], ["id", "patient-login-failed"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](18, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 2, "div", [["class", "error-handle margin-bottom-20 hide"], ["id", "patient-login-failed-missing-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](21, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 2, "div", [["class", "error-handle margin-bottom-20 hide"], ["id", "patient-login-failed-not-a-patient-of-any-dentist"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 2, "div", [["class", "padding-top-20 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "a", [["class", "facebook-custom-btn social-login-btn vanilla-js-event calibri-regular fs-20 fs-xs-18"], ["href", "javascript:void(0)"]], [[1, "data-platform", 0], [1, "data-url", 0], [1, "data-inviter", 0], [1, "data-inviteid", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Continue with Facebook"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 2, "div", [["class", "padding-top-10 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "a", [["class", "civic-custom-btn social-login-btn type-login vanilla-js-event calibri-regular fs-20 fs-xs-18 hide"], ["href", "javascript:void(0)"]], [[1, "data-platform", 0], [1, "data-url", 0], [1, "data-inviter", 0], [1, "data-inviteid", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Continue with Civic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 2, "div", [["class", "padding-top-10 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "a", [["class", "apple-custom-btn is-dcn-hub-app social-login-btn type-login vanilla-js-event calibri-regular fs-20 fs-xs-18 hide"], ["href", "javascript:void(0)"]], [[1, "data-platform", 0], [1, "data-url", 0], [1, "data-inviter", 0], [1, "data-inviteid", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Continue with Apple"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 14, "div", [["class", "padding-top-40 padding-bottom-10 text-center fs-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](37, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 4, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 fs-18 fs-xs-16 lato-bold platform-color"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](41, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](42, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" | "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 4, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 fs-18 fs-xs-16 lato-bold platform-color"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](47, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](48, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.missingPatientAccount; _ck(_v, 15, 0, currVal_4); var currVal_23 = _ck(_v, 41, 0, (("/" + _co.translate.currentLang) + "/request-account")); _ck(_v, 40, 0, currVal_23); var currVal_27 = _ck(_v, 47, 0, (("/" + _co.translate.currentLang) + "/dentist-request-account")); _ck(_v, 46, 0, currVal_27); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 0, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).transform("cookies-error")); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("years-and-privacy-error")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).transform("patients-login-title")); _ck(_v, 7, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).transform("patients-login-subtitle")); _ck(_v, 10, 0, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).transform("general-error")); _ck(_v, 18, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).transform("patient-login-failed-missing-email")); _ck(_v, 21, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).transform("patient-login-failed-not-a-patient-of-any-dentist")); _ck(_v, 24, 0, currVal_7); var currVal_8 = "dentacoin"; var currVal_9 = (_co.coreDbApiDomain + "/api/login"); var currVal_10 = _co.inviter; var currVal_11 = _co.inviteId; _ck(_v, 27, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = "dentacoin"; var currVal_13 = (_co.coreDbApiDomain + "/api/login"); var currVal_14 = _co.inviter; var currVal_15 = _co.inviteId; _ck(_v, 30, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = "dentacoin"; var currVal_17 = (_co.coreDbApiDomain + "/api/login"); var currVal_18 = _co.inviter; var currVal_19 = _co.inviteId; _ck(_v, 33, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 37, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).transform("no-account-yet")); _ck(_v, 37, 0, currVal_20); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).target; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).href; _ck(_v, 39, 0, currVal_21, currVal_22); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 42, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).transform("request-account-btn")); _ck(_v, 42, 0, currVal_24); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).target; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).href; _ck(_v, 45, 0, currVal_25, currVal_26); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 48, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).transform("dentist-request-account-btn")); _ck(_v, 48, 0, currVal_28); }); }
function View_PatientLoginPageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-patient-login-page", [], null, null, null, View_PatientLoginPageComponent_0, RenderType_PatientLoginPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _patient_login_page_component__WEBPACK_IMPORTED_MODULE_4__["PatientLoginPageComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationServiceService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_6__["RedirectsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"], _services_requests_service__WEBPACK_IMPORTED_MODULE_9__["RequestsService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_10__["AdditionalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PatientLoginPageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-patient-login-page", _patient_login_page_component__WEBPACK_IMPORTED_MODULE_4__["PatientLoginPageComponent"], View_PatientLoginPageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/patient-login-page/patient-login-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/patient-login-page/patient-login-page.component.ts ***!
  \********************************************************************/
/*! exports provided: PatientLoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientLoginPageComponent", function() { return PatientLoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




class PatientLoginPageComponent {
    constructor(router, authenticationServiceService, redirectsService, http, translate, languageService, requestsService, additionalService, activatedRoute) {
        this.router = router;
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.http = http;
        this.translate = translate;
        this.languageService = languageService;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.activatedRoute = activatedRoute;
        this.coreDbApiDomain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].coreDbApiDomain;
        this.missingPatientAccount = true;
        this.patientLoginEventsAdded = false;
        this.inviter = '';
        this.inviteId = '';
    }
    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.inviter = this.activatedRoute.snapshot.queryParamMap.get('invite');
            this.inviteId = this.activatedRoute.snapshot.queryParamMap.get('inviteid');
            if (!this.patientLoginEventsAdded) {
                this.patientLoginEventsAdded = true;
                document.addEventListener('patientAuthSuccessResponse', (e) => {
                    console.log(e, 'patientAuthSuccessResponse');
                    this.onPatientsLogin(e.detail.response_data.token, e.detail.response_data.data.id, e.detail.response_data.data.patient_of);
                });
                document.addEventListener('receiveCoredbTokenFromCivicAuth', (e) => {
                    console.log(e.detail.response_data, 'receiveCoredbTokenFromCivicAuth');
                    console.log(e, 'receiveCoredbTokenFromCivicAuth');
                    this.requestsService.getUserData(e.detail.response_data).subscribe({
                        next: (response) => {
                            if (response.success) {
                                this.onPatientsLogin(e.detail.response_data, response.data.id, response.data.patient_of);
                            }
                            else {
                                this.authenticationServiceService.logout('patient');
                            }
                        },
                        error: error => this.authenticationServiceService.logout('patient')
                    });
                });
                document.addEventListener('receivedFacebookToken', (e) => {
                    this.additionalService.showLoader();
                });
                document.addEventListener('civicRead', (e) => {
                    this.additionalService.showLoader();
                });
                document.addEventListener('hideGatewayLoader', (e) => {
                    this.additionalService.hideLoader();
                });
                document.addEventListener('registeredAccountMissingEmail', (e) => {
                    // COVER THIS THE PROPER WAY !!!!!!!!!!!!!
                    document.getElementById('patient-login-failed-missing-email').classList.remove('hide');
                });
                document.addEventListener('patientAuthErrorResponse', (e) => {
                    console.log(e, 'e');
                    let errorsHtml = '';
                    if (e.detail.response_data.not_registered) {
                        this.missingPatientAccount = true;
                        document.getElementById('missing-patient-account-error').classList.remove('hide');
                    }
                    else {
                        if (e.detail.response_data.errors) {
                            for (let key in e.detail.response_data.errors) {
                                errorsHtml += e.detail.response_data.errors[key] + '<br>';
                            }
                        }
                        document.getElementById('custom-error').classList.remove('hide');
                        document.getElementById('custom-error').innerHTML = errorsHtml;
                    }
                    if (jquery__WEBPACK_IMPORTED_MODULE_3__('.log-link.open-dentacoin-gateway').length) {
                        jquery__WEBPACK_IMPORTED_MODULE_3__('.log-link.open-dentacoin-gateway').on('click', () => {
                            console.log('log link');
                            this.redirectsService.redirectToPatientLogin('login');
                        });
                    }
                    this.additionalService.hideLoader();
                });
                document.addEventListener('noCoreDBApiConnection', (e) => {
                    document.getElementById('patient-login-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                });
                document.addEventListener('noExternalLoginProviderConnection', (e) => {
                    document.getElementById('patient-login-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                });
                window.addEventListener('message', (event) => {
                    if (event.data.event_id === 'noUserIdReceived') {
                        document.getElementById('patient-login-failed').classList.remove('hide');
                        document.getElementById('iframe-civic-popup').remove();
                    }
                    else if (event.data.event_id === 'registeredAccountMissingEmail') {
                        // COVER THIS THE PROPER WAY !!!!!!!!!!!!!
                        document.getElementById('patient-login-failed-missing-email').classList.remove('hide');
                        document.getElementById('iframe-civic-popup').remove();
                    }
                    else if (event.data.event_id === 'patientProceedWithCreatingSession') {
                        this.onPatientsLogin(event.data.data.token, event.data.data.data.id, event.data.data.data.patient_of);
                        document.getElementById('iframe-civic-popup').remove();
                    }
                    else if (event.data.event_id === 'patientAuthErrorResponse') {
                        let errorsHtml = '';
                        if (event.data.data.not_registered) {
                            this.missingPatientAccount = true;
                            document.getElementById('missing-patient-account-error').classList.remove('hide');
                        }
                        else {
                            if (event.data.data.errors) {
                                for (let key in event.data.data.errors) {
                                    errorsHtml += event.data.data.errors[key] + '<br>';
                                }
                            }
                            document.getElementById('custom-error').classList.remove('hide');
                            document.getElementById('custom-error').innerHTML = errorsHtml;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_3__('.log-link.open-dentacoin-gateway').length) {
                            jquery__WEBPACK_IMPORTED_MODULE_3__('.log-link.open-dentacoin-gateway').on('click', () => {
                                console.log('log link');
                                this.redirectsService.redirectToPatientLogin('login');
                            });
                        }
                        document.getElementById('iframe-civic-popup').remove();
                    }
                    else if (event.data.event_id === 'noCoreDBApiConnection') {
                        document.getElementById('patient-login-failed').classList.remove('hide');
                        document.getElementById('iframe-civic-popup').remove();
                    }
                    else if (event.data.event_id === 'noExternalLoginProviderConnection') {
                        document.getElementById('patient-login-failed').classList.remove('hide');
                        document.getElementById('iframe-civic-popup').remove();
                    }
                    else if (event.data.event_id === 'removeCivicIframeAndRedirectToAccountPage') {
                        document.getElementById('iframe-civic-popup').remove();
                        window.open(event.data.data.redirect, '_system');
                    }
                });
            }
        }
    }
    // we already have the token, but we are passing the data to dcn hub app backend in order to encrypt it and save it user localstorage
    onPatientsLogin(_token, _id, _patient_of) {
        if (_patient_of !== null && _patient_of !== undefined) {
            this.requestsService.coreDbLogin(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('token', _token).set('id', _id).set('patient_of', _patient_of).toString()).subscribe({
                next: (coredbResponse) => {
                    window.scrollTo(0, 0);
                    if (coredbResponse.success) {
                        window.localStorage.setItem('currentPatient', JSON.stringify({
                            token: _token,
                            id: _id,
                            patient_of: _patient_of,
                            encrypted_id: coredbResponse.encrypted_id,
                            encrypted_token: coredbResponse.encrypted_token,
                            encrypted_type: coredbResponse.encrypted_type
                        }));
                        window.localStorage.setItem('dentist', String(_patient_of));
                        this.authenticationServiceService.isPatientLoggedSubject.next(true);
                        this.redirectsService.redirectToLoggedHome();
                        this.additionalService.hideLoader();
                    }
                    else if (coredbResponse.error) {
                        document.getElementById('custom-error').classList.remove('hide');
                        document.getElementById('custom-error').innerHTML = coredbResponse.message;
                        this.additionalService.hideLoader();
                    }
                },
                error: error => {
                    document.getElementById('patient-login-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                }
            });
        }
        else {
            document.getElementById('patient-login-failed-not-a-patient-of-any-dentist').classList.remove('hide');
            this.additionalService.hideLoader();
        }
    }
}


/***/ }),

/***/ "./src/app/patient-register-by-invite/patient-register-by-invite.component.ngfactory.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/patient-register-by-invite/patient-register-by-invite.component.ngfactory.js ***!
  \**********************************************************************************************/
/*! exports provided: RenderType_PatientRegisterByInviteComponent, View_PatientRegisterByInviteComponent_0, View_PatientRegisterByInviteComponent_Host_0, PatientRegisterByInviteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PatientRegisterByInviteComponent", function() { return RenderType_PatientRegisterByInviteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PatientRegisterByInviteComponent_0", function() { return View_PatientRegisterByInviteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PatientRegisterByInviteComponent_Host_0", function() { return View_PatientRegisterByInviteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRegisterByInviteComponentNgFactory", function() { return PatientRegisterByInviteComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patient_register_by_invite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-register-by-invite.component */ "./src/app/patient-register-by-invite/patient-register-by-invite.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_PatientRegisterByInviteComponent = [];
var RenderType_PatientRegisterByInviteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_PatientRegisterByInviteComponent, data: {} });

function View_PatientRegisterByInviteComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 fs-18 fs-xs-16 lato-bold platform-color"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 2, 0, (("/" + _co.translate.currentLang) + "/login")); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).transform("login-here")); _ck(_v, 3, 0, currVal_3); }); }
function View_PatientRegisterByInviteComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 fs-18 fs-xs-16 lato-bold platform-color"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { invite: 0, inviteid: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 2, 0, _co.inviter, _co.inviteId); var currVal_3 = _ck(_v, 3, 0, (("/" + _co.translate.currentLang) + "/login")); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).transform("login-here")); _ck(_v, 4, 0, currVal_4); }); }
function View_PatientRegisterByInviteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 57, "div", [["class", "row padding-top-50 padding-top-xs-10 patient-register-by-invite"]], [[1, "data-cookies-error", 0], [1, "data-years-and-privacy-error", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 5, "div", [["class", "col-xs-12 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "figure", [["class", "max-width-150 max-width-xs-100 margin-0-auto"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["alt", "Hub icon"], ["class", "width-100"], ["src", "assets/images/hub-icon-white.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "h1", [["class", "fs-20 lato-light padding-top-15 padding-bottom-30 padding-bottom-xs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 48, "div", [["class", "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 register-parent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 47, "div", [["class", "max-width-400 margin-0-auto form-register-fields"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "div", [["class", "error-handle margin-bottom-20 custom-error hide"], ["id", "custom-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "div", [["class", "error-handle margin-bottom-20 hide"], ["id", "patient-register-failed"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 2, "div", [["class", "error-handle margin-bottom-20 hide"], ["id", "patient-register-failed-missing-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](16, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 2, "div", [["class", "error-handle margin-bottom-20 hide"], ["id", "patient-register-failed-not-a-patient-of-any-dentist"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](19, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "div", [["class", "padding-top-20 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "a", [["class", "facebook-custom-btn social-login-btn vanilla-js-event calibri-regular fs-20 fs-xs-18 max-width-400"], ["href", "javascript:void(0)"]], [[1, "data-platform", 0], [1, "data-url", 0], [1, "custom-stopper", 0], [1, "data-inviter", 0], [1, "data-inviteid", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Continue with Facebook"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 2, "div", [["class", "padding-top-10 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "a", [["class", "civic-custom-btn social-login-btn type-register vanilla-js-event calibri-regular fs-20 fs-xs-18 hide"], ["href", "javascript:void(0)"]], [[1, "data-platform", 0], [1, "data-url", 0], [1, "custom-stopper", 0], [1, "data-inviter", 0], [1, "data-inviteid", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Continue with Civic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 2, "div", [["class", "padding-top-10 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "a", [["class", "apple-custom-btn is-dcn-hub-app social-login-btn type-register vanilla-js-event calibri-regular fs-20 fs-xs-18 hide"], ["href", "javascript:void(0)"]], [[1, "data-platform", 0], [1, "data-url", 0], [1, "custom-stopper", 0], [1, "data-inviter", 0], [1, "data-inviteid", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Continue with Apple"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 5, "div", [["class", "padding-top-20 margin-0-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 4, "div", [["class", "custom-checkbox-style module"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 0, "input", [["class", "custom-checkbox-input"], ["id", "agree-over-eighteen"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 2, "label", [["class", "fs-15 fs-xs-16 custom-checkbox-label"], ["for", "agree-over-eighteen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](34, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 10, "div", [["class", "patient-register-checkboxes padding-top-5 margin-0-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 9, "div", [["class", "custom-checkbox-style module"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 0, "input", [["class", "custom-checkbox-input"], ["id", "privacy-policy-registration-patient"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 7, "label", [["class", "fs-15 fs-xs-16 custom-checkbox-label"], ["for", "privacy-policy-registration-patient"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](40, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 2, "a", [["class", "in-app-browser-link platform-color lato-bold"], ["href", "https://dentacoin.com/privacy-policy"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](43, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](45, null, [" ", "."])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 10, "div", [["class", "links-below-registration margin-0-auto padding-top-20 margin-top-50 padding-bottom-10 text-center fs-16 platform-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PatientRegisterByInviteComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PatientRegisterByInviteComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" | "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 4, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 fs-18 fs-xs-16 lato-bold platform-color"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](55, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](56, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_25 = ((_co.inviter == "") && (_co.inviteId == "")); _ck(_v, 49, 0, currVal_25); var currVal_26 = ((_co.inviter != "") && (_co.inviteId != "")); _ck(_v, 51, 0, currVal_26); var currVal_29 = _ck(_v, 55, 0, (("/" + _co.translate.currentLang) + "/request-account")); _ck(_v, 54, 0, currVal_29); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 0, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).transform("cookies-error")); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("years-and-privacy-error")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).transform("patients-register-title")); _ck(_v, 7, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).transform("general-error")); _ck(_v, 13, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).transform("patient-login-failed-missing-email")); _ck(_v, 16, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).transform("patient-login-failed-not-a-patient-of-any-dentist")); _ck(_v, 19, 0, currVal_5); var currVal_6 = "dentacoin"; var currVal_7 = (_co.coreDbApiDomain + "/api/register"); var currVal_8 = "true"; var currVal_9 = _co.inviter; var currVal_10 = _co.inviteId; _ck(_v, 22, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = "dentacoin"; var currVal_12 = (_co.coreDbApiDomain + "/api/register"); var currVal_13 = "true"; var currVal_14 = _co.inviter; var currVal_15 = _co.inviteId; _ck(_v, 25, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = "dentacoin"; var currVal_17 = (_co.coreDbApiDomain + "/api/register"); var currVal_18 = "true"; var currVal_19 = _co.inviter; var currVal_20 = _co.inviteId; _ck(_v, 28, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 34, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).transform("i-confirm")); _ck(_v, 34, 0, currVal_21); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 40, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).transform("i-agree")); _ck(_v, 40, 0, currVal_22); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 43, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).transform("privacy-policy")); _ck(_v, 43, 0, currVal_23); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 45, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).transform("i-agree-end")); _ck(_v, 45, 0, currVal_24); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).target; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).href; _ck(_v, 53, 0, currVal_27, currVal_28); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 56, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).transform("request-account-btn")); _ck(_v, 56, 0, currVal_30); }); }
function View_PatientRegisterByInviteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-patient-register-by-invite", [], null, null, null, View_PatientRegisterByInviteComponent_0, RenderType_PatientRegisterByInviteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _patient_register_by_invite_component__WEBPACK_IMPORTED_MODULE_4__["PatientRegisterByInviteComponent"], [_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationServiceService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_6__["RedirectsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalService"], _services_requests_service__WEBPACK_IMPORTED_MODULE_8__["RequestsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PatientRegisterByInviteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-patient-register-by-invite", _patient_register_by_invite_component__WEBPACK_IMPORTED_MODULE_4__["PatientRegisterByInviteComponent"], View_PatientRegisterByInviteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/patient-register-by-invite/patient-register-by-invite.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/patient-register-by-invite/patient-register-by-invite.component.ts ***!
  \************************************************************************************/
/*! exports provided: PatientRegisterByInviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRegisterByInviteComponent", function() { return PatientRegisterByInviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





class PatientRegisterByInviteComponent {
    constructor(authenticationServiceService, redirectsService, activatedRoute, translate, additionalService, requestsService) {
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.additionalService = additionalService;
        this.requestsService = requestsService;
        this.coreDbApiDomain = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coreDbApiDomain;
        this.inviter = '';
        this.inviteId = '';
        this.patientRegisterEventsAdded = false;
    }
    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            if (this.activatedRoute.snapshot.queryParamMap.get('invite') == null || this.activatedRoute.snapshot.queryParamMap.get('inviteid') == null) {
                this.redirectsService.redirectToPatientLogin('login');
            }
            else {
                this.inviter = this.activatedRoute.snapshot.queryParamMap.get('invite');
                this.inviteId = this.activatedRoute.snapshot.queryParamMap.get('inviteid');
                if (!this.patientRegisterEventsAdded) {
                    document.addEventListener('patientAuthSuccessResponse', (e) => {
                        console.log(e, 'patientAuthSuccessResponse');
                        this.onPatientsRegister(e.detail.response_data.token, e.detail.response_data.data.id, e.detail.response_data.data.patient_of);
                    });
                    document.addEventListener('receiveCoredbTokenFromCivicAuth', (e) => {
                        this.requestsService.getUserData(e.detail.response_data).subscribe({
                            next: (response) => {
                                if (response.success) {
                                    this.onPatientsRegister(e.detail.response_data, response.data.id, response.data.patient_of);
                                }
                                else {
                                    this.authenticationServiceService.logout('patient');
                                }
                            },
                            error: error => this.authenticationServiceService.logout('patient')
                        });
                    });
                    document.addEventListener('receivedFacebookToken', (e) => {
                        this.additionalService.showLoader();
                    });
                    document.addEventListener('civicRead', (e) => {
                        this.additionalService.showLoader();
                    });
                    document.addEventListener('hideGatewayLoader', (e) => {
                        this.additionalService.hideLoader();
                    });
                    document.addEventListener('registeredAccountMissingEmail', (e) => {
                        // COVER THIS !!!!!!!!!!!!!
                        document.getElementById('patient-register-failed-missing-email').classList.remove('hide');
                    });
                    document.addEventListener('patientAuthErrorResponse', (e) => {
                        console.log(e, 'e');
                        let errorsHtml = '';
                        if (e.detail.response_data.not_registered) {
                            errorsHtml = this.translate.instant('account-not-found');
                        }
                        else {
                            if (e.detail.response_data.errors) {
                                for (let key in e.detail.response_data.errors) {
                                    errorsHtml += e.detail.response_data.errors[key] + '<br>';
                                }
                            }
                        }
                        document.getElementById('custom-error').classList.remove('hide');
                        document.getElementById('custom-error').innerHTML = errorsHtml;
                        if (jquery__WEBPACK_IMPORTED_MODULE_4__('.log-link.open-dentacoin-gateway').length) {
                            jquery__WEBPACK_IMPORTED_MODULE_4__('.log-link.open-dentacoin-gateway').on('click', () => {
                                this.redirectsService.redirectToPatientLogin('login?invite=' + this.inviter + '&inviteid=' + this.inviteId);
                            });
                        }
                        this.additionalService.hideLoader();
                    });
                    document.addEventListener('noCoreDBApiConnection', (e) => {
                        document.getElementById('patient-register-failed').classList.remove('hide');
                        this.additionalService.hideLoader();
                    });
                    document.addEventListener('noExternalLoginProviderConnection', (e) => {
                        document.getElementById('patient-register-failed').classList.remove('hide');
                        this.additionalService.hideLoader();
                    });
                    window.addEventListener('message', (event) => {
                        if (event.data.event_id === 'noUserIdReceived') {
                            document.getElementById('patient-login-failed').classList.remove('hide');
                            document.getElementById('iframe-civic-popup').remove();
                        }
                        else if (event.data.event_id === 'registeredAccountMissingEmail') {
                            // COVER THIS THE PROPER WAY !!!!!!!!!!!!!
                            document.getElementById('patient-login-failed-missing-email').classList.remove('hide');
                            document.getElementById('iframe-civic-popup').remove();
                        }
                        else if (event.data.event_id === 'patientProceedWithCreatingSession') {
                            this.onPatientsRegister(event.data.data.token, event.data.data.data.id, event.data.data.data.patient_of);
                            document.getElementById('iframe-civic-popup').remove();
                        }
                        else if (event.data.event_id === 'patientAuthErrorResponse') {
                            let errorsHtml = '';
                            if (event.data.not_registered) {
                                errorsHtml = this.translate.instant('account-not-found');
                            }
                            else {
                                if (event.data.errors) {
                                    for (let key in event.data.errors) {
                                        errorsHtml += event.data.errors[key] + '<br>';
                                    }
                                }
                            }
                            document.getElementById('custom-error').classList.remove('hide');
                            document.getElementById('custom-error').innerHTML = errorsHtml;
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.log-link.open-dentacoin-gateway').length) {
                                jquery__WEBPACK_IMPORTED_MODULE_4__('.log-link.open-dentacoin-gateway').on('click', () => {
                                    this.redirectsService.redirectToPatientLogin('login?invite=' + this.inviter + '&inviteid=' + this.inviteId);
                                });
                            }
                            document.getElementById('iframe-civic-popup').remove();
                        }
                        else if (event.data.event_id === 'noCoreDBApiConnection') {
                            document.getElementById('patient-login-failed').classList.remove('hide');
                            document.getElementById('iframe-civic-popup').remove();
                        }
                        else if (event.data.event_id === 'noExternalLoginProviderConnection') {
                            document.getElementById('patient-login-failed').classList.remove('hide');
                            document.getElementById('iframe-civic-popup').remove();
                        }
                        else if (event.data.event_id === 'removeCivicIframeAndRedirectToAccountPage') {
                            document.getElementById('iframe-civic-popup').remove();
                            window.open(event.data.data.redirect, '_system');
                        }
                    });
                }
            }
        }
    }
    // we already have the token, but we are passing the data to dcn hub app backend in order to encrypt it and save it user localstorage
    onPatientsRegister(_token, _id, _patient_of) {
        if (_patient_of !== null && _patient_of !== undefined) {
            this.requestsService.coreDbLogin(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('token', _token).set('id', _id).set('patient_of', _patient_of).toString()).subscribe({
                next: (coredbResponse) => {
                    window.scrollTo(0, 0);
                    if (coredbResponse.success) {
                        window.localStorage.setItem('currentPatient', JSON.stringify({
                            token: _token,
                            id: _id,
                            patient_of: _patient_of,
                            encrypted_id: coredbResponse.encrypted_id,
                            encrypted_token: coredbResponse.encrypted_token,
                            encrypted_type: coredbResponse.encrypted_type
                        }));
                        window.localStorage.setItem('dentist', String(_patient_of));
                        this.authenticationServiceService.isPatientLoggedSubject.next(true);
                        this.redirectsService.redirectToLoggedHome();
                        this.additionalService.hideLoader();
                    }
                    else if (coredbResponse.error) {
                        document.getElementById('custom-error').classList.remove('hide');
                        document.getElementById('custom-error').innerHTML = coredbResponse.message;
                        this.additionalService.hideLoader();
                    }
                },
                error: error => {
                    document.getElementById('patient-register-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                }
            });
        }
        else {
            document.getElementById('patient-register-failed-not-a-patient-of-any-dentist').classList.remove('hide');
            this.additionalService.hideLoader();
        }
    }
}


/***/ }),

/***/ "./src/app/request-account/request-account.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/request-account/request-account.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_RequestAccountComponent, View_RequestAccountComponent_0, View_RequestAccountComponent_Host_0, RequestAccountComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RequestAccountComponent", function() { return RenderType_RequestAccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RequestAccountComponent_0", function() { return View_RequestAccountComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RequestAccountComponent_Host_0", function() { return View_RequestAccountComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAccountComponentNgFactory", function() { return RequestAccountComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _request_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-account.component */ "./src/app/request-account/request-account.component.ts");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/authentication-service.service */ "./src/app/_services/authentication-service.service.ts");
/* harmony import */ var _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/redirects.service */ "./src/app/_services/redirects.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/requests.service */ "./src/app/_services/requests.service.ts");
/* harmony import */ var _services_additional_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/additional.service */ "./src/app/_services/additional.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_RequestAccountComponent = [];
var RenderType_RequestAccountComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_RequestAccountComponent, data: {} });

function View_RequestAccountComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "success-handle margin-bottom-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("request-account-thank-you")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle margin-bottom-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("request-account-saving-failed")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("fname-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("fname-max-length")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.request_form_data.firstName.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.request_form_data.firstName.hasError("maxlength"); _ck(_v, 4, 0, currVal_1); }, null); }
function View_RequestAccountComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("lname-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("lname-max-length")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.request_form_data.lastName.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.request_form_data.lastName.hasError("maxlength"); _ck(_v, 4, 0, currVal_1); }, null); }
function View_RequestAccountComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("email-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("valid-email")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.request_form_data.email.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.request_form_data.email.errors.email; _ck(_v, 4, 0, currVal_1); }, null); }
function View_RequestAccountComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.value.code, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.value.code, ""); _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.value.name; _ck(_v, 4, 0, currVal_2); }); }
function View_RequestAccountComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("country-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.request_form_data.country.errors.required; _ck(_v, 2, 0, currVal_0); }, null); }
function View_RequestAccountComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 16, "div", [["class", "custom-google-select-style module"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "country"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 12, "select", [["class", "platform-border-color"], ["formControlName", "country"], ["id", "country"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select country:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_RequestAccountComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = "country"; _ck(_v, 8, 0, currVal_8); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).transform(_co.countriesList)); _ck(_v, 16, 0, currVal_10); var currVal_11 = (_co.requestAccountFormSubmitted && _co.request_form_data.country.errors); _ck(_v, 19, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).transform("country-label")); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = true; _ck(_v, 11, 0, currVal_9); }); }
function View_RequestAccountComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("phone-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("phone-max-length-validation")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.request_form_data.phone.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.request_form_data.phone.hasError("maxlength"); _ck(_v, 4, 0, currVal_1); }, null); }
function View_RequestAccountComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("not-valid-phone")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("dentist-name-required")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("dentist-name-max-length")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.request_form_data.dentistName.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.request_form_data.dentistName.hasError("maxlength"); _ck(_v, 4, 0, currVal_1); }, null); }
function View_RequestAccountComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "error-handle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform("privacy-policy-agree")); _ck(_v, 1, 0, currVal_0); }); }
function View_RequestAccountComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 125, "div", [["class", "row padding-top-50 padding-top-xs-15 padding-top-sm-15 patient-request-account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "div", [["class", "col-xs-12 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "figure", [["class", "max-width-150 max-width-xs-100 margin-0-auto"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "Hub icon"], ["class", "width-100"], ["src", "assets/images/hub-icon-white.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "h1", [["class", "fs-36 fs-xs-26 lato-bold padding-top-10 padding-top-xs-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "h2", [["class", "fs-20 lato-light padding-bottom-30 padding-bottom-xs-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 115, "div", [["class", "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 114, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onAccountRequestFormSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 14, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-firstName"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](23, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "firstName"], ["id", "request-account-firstName"], ["maxlength", "100"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 14, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-lastName"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](38, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "lastName"], ["id", "request-account-lastName"], ["maxlength", "100"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 14, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](53, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "email"], ["id", "request-account-email"], ["maxlength", "100"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](60, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 16, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-phone"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](70, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "phone"], ["id", "request-account-phone"], ["maxlength", "20"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](74, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](77, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](79, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 14, "div", [["class", "padding-top-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 11, "div", [["class", "custom-google-label-style module"], ["data-input-colorful-border", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 2, "label", [["class", "platform-color"], ["for", "request-account-dentistName"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](87, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 7, "input", [["class", "full-rounded form-field platform-border-color"], ["formControlName", "dentistName"], ["id", "request-account-dentistName"], ["maxlength", "100"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 90)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 90).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 90)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 90)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](90, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](91, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](94, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](96, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](98, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 16, "div", [["class", "patient-register-checkboxes padding-top-15 margin-0-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 13, "div", [["class", "custom-checkbox-style module"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 5, "input", [["class", "custom-checkbox-input"], ["formControlName", "privacyPolicy"], ["id", "privacy-policy-registration-patient"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 102).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 102).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](102, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](104, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](106, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 6, "label", [["class", "fs-15 custom-checkbox-label"], ["for", "privacy-policy-registration-patient"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](108, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 2, "a", [["class", "in-app-browser-link platform-color lato-bold"], ["href", "https://dentacoin.com/privacy-policy"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](111, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RequestAccountComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](115, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, null, 3, "div", [["class", "padding-top-30 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 2, "button", [["class", "module lato-bold platform-custom-button platform-background-color platform-border-color hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](118, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 5, "div", [["class", "links-below-form margin-0-auto padding-top-20 margin-top-50 padding-bottom-10 text-center fs-16 platform-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](121, 0, null, null, 4, "a", [["class", "text-decoration-underline padding-left-5 padding-right-5 fs-18 lato-bold platform-color"], ["itemprop", "url"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](122, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](123, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](124, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.requestAccountForm; _ck(_v, 13, 0, currVal_9); var currVal_10 = _co.sendRequestSucceed; _ck(_v, 17, 0, currVal_10); var currVal_11 = _co.sendRequestFailed; _ck(_v, 19, 0, currVal_11); var currVal_21 = "100"; _ck(_v, 27, 0, currVal_21); var currVal_22 = "firstName"; _ck(_v, 30, 0, currVal_22); var currVal_23 = (_co.requestAccountFormSubmitted && _co.request_form_data.firstName.errors); _ck(_v, 34, 0, currVal_23); var currVal_33 = "100"; _ck(_v, 42, 0, currVal_33); var currVal_34 = "lastName"; _ck(_v, 45, 0, currVal_34); var currVal_35 = (_co.requestAccountFormSubmitted && _co.request_form_data.lastName.errors); _ck(_v, 49, 0, currVal_35); var currVal_45 = "100"; _ck(_v, 57, 0, currVal_45); var currVal_46 = "email"; _ck(_v, 60, 0, currVal_46); var currVal_47 = (_co.requestAccountFormSubmitted && _co.request_form_data.email.errors); _ck(_v, 64, 0, currVal_47); var currVal_48 = (_co.showCountries == true); _ck(_v, 66, 0, currVal_48); var currVal_58 = "20"; _ck(_v, 74, 0, currVal_58); var currVal_59 = "phone"; _ck(_v, 77, 0, currVal_59); var currVal_60 = (_co.requestAccountFormSubmitted && _co.request_form_data.phone.errors); _ck(_v, 81, 0, currVal_60); var currVal_61 = _co.notValidPhone; _ck(_v, 83, 0, currVal_61); var currVal_71 = "100"; _ck(_v, 91, 0, currVal_71); var currVal_72 = "dentistName"; _ck(_v, 94, 0, currVal_72); var currVal_73 = (_co.requestAccountFormSubmitted && _co.request_form_data.dentistName.errors); _ck(_v, 98, 0, currVal_73); var currVal_81 = "privacyPolicy"; _ck(_v, 104, 0, currVal_81); var currVal_84 = _co.isPatientPrivacyAccepted.invalid; _ck(_v, 115, 0, currVal_84); var currVal_88 = _ck(_v, 123, 0, (("/" + _co.translate.currentLang) + "/login")); _ck(_v, 122, 0, currVal_88); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transform("request-account-title")); _ck(_v, 5, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).transform("request-account-subtitle")); _ck(_v, 8, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).transform("fname-label")); _ck(_v, 23, 0, currVal_12); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).maxlength : null); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).ngClassPending; _ck(_v, 25, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).transform("lname-label")); _ck(_v, 38, 0, currVal_24); var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).maxlength : null); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassUntouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassTouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassPristine; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassDirty; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassValid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassInvalid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassPending; _ck(_v, 40, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 53, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).transform("email-label")); _ck(_v, 53, 0, currVal_36); var currVal_37 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).maxlength : null); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassUntouched; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassTouched; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassPristine; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassDirty; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassValid; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassInvalid; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).ngClassPending; _ck(_v, 55, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44); var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 70, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).transform("phone-label")); _ck(_v, 70, 0, currVal_49); var currVal_50 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).maxlength : null); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassUntouched; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassTouched; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassPristine; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassDirty; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassValid; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassInvalid; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassPending; _ck(_v, 72, 0, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57); var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 87, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).transform("dentist-name-label")); _ck(_v, 87, 0, currVal_62); var currVal_63 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).maxlength : null); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassUntouched; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassTouched; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassPristine; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassDirty; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassValid; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassInvalid; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).ngClassPending; _ck(_v, 89, 0, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70); var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassUntouched; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassTouched; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassPristine; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassDirty; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassValid; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassInvalid; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).ngClassPending; _ck(_v, 101, 0, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80); var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 108, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).transform("i-agree")); _ck(_v, 108, 0, currVal_82); var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 111, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 112).transform("privacy-policy")); _ck(_v, 111, 0, currVal_83); var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 118, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 119).transform("request-account-button")); _ck(_v, 118, 0, currVal_85); var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).target; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).href; _ck(_v, 121, 0, currVal_86, currVal_87); var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 124, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 125).transform("login-here")); _ck(_v, 124, 0, currVal_89); }); }
function View_RequestAccountComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-request-account", [], null, null, null, View_RequestAccountComponent_0, RenderType_RequestAccountComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _request_account_component__WEBPACK_IMPORTED_MODULE_5__["RequestAccountComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationServiceService"], _services_redirects_service__WEBPACK_IMPORTED_MODULE_7__["RedirectsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _services_requests_service__WEBPACK_IMPORTED_MODULE_9__["RequestsService"], _services_additional_service__WEBPACK_IMPORTED_MODULE_10__["AdditionalService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _services_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RequestAccountComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-request-account", _request_account_component__WEBPACK_IMPORTED_MODULE_5__["RequestAccountComponent"], View_RequestAccountComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/request-account/request-account.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/request-account/request-account.component.ts ***!
  \**************************************************************/
/*! exports provided: RequestAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAccountComponent", function() { return RequestAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class RequestAccountComponent {
    constructor(router, formBuilder, authenticationServiceService, redirectsService, http, requestsService, additionalService, translate, languageService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.redirectsService = redirectsService;
        this.http = http;
        this.requestsService = requestsService;
        this.additionalService = additionalService;
        this.translate = translate;
        this.languageService = languageService;
        this.requestAccountFormSubmitted = false;
        this.sendRequestSucceed = false;
        this.sendRequestFailed = false;
        this.notValidPhone = false;
        this.showCountries = false;
        this.countriesList = {};
    }
    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.requestsService.getCountries().subscribe((response) => {
                if (response.success && response.data) {
                    this.countriesList = response.data;
                    this.showCountries = true;
                }
            });
            this.requestAccountForm = this.formBuilder.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ])),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ])),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ])),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ])),
                dentistName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)
                ])),
                privacyPolicy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue)
            });
        }
    }
    get isPatientPrivacyAccepted() {
        return this.requestAccountForm.get('privacyPolicy');
    }
    // convenience getter for easy access to form fields
    get request_form_data() { return this.requestAccountForm.controls; }
    // on request form account submit
    onAccountRequestFormSubmit() {
        this.additionalService.showLoader();
        this.requestAccountFormSubmitted = true;
        this.notValidPhone = false;
        // stop here if form is invalid
        if (this.requestAccountForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }
        let paramsMap = new Map();
        paramsMap.set('firstName', this.request_form_data.firstName.value);
        paramsMap.set('lastName', this.request_form_data.lastName.value);
        paramsMap.set('email', this.request_form_data.email.value);
        paramsMap.set('country', this.request_form_data.country.value);
        paramsMap.set('phone', this.request_form_data.phone.value);
        paramsMap.set('dentistName', this.request_form_data.dentistName.value);
        /*paramsMap.set('captcha', this.request_form_data.captcha.value);*/
        let params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        paramsMap.forEach((value, key) => {
            params = params.set(key, value);
        });
        this.requestsService.validatePhone(new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('phone', this.request_form_data.phone.value).set('country_code', this.request_form_data.country.value).toString()).subscribe((validatePhoneResponse) => {
            if (validatePhoneResponse.success) {
                this.requestsService.sendRequestAccountMail(params.toString()).subscribe((response) => {
                    if (response.success) {
                        this.requestAccountForm.reset();
                        Object.keys(this.requestAccountForm.controls).forEach(key => {
                            this.requestAccountForm.get(key).setErrors(null);
                        });
                        this.sendRequestSucceed = true;
                        this.sendRequestFailed = false;
                        this.additionalService.hideLoader();
                    }
                    else {
                        this.sendRequestFailed = true;
                        this.sendRequestSucceed = false;
                        this.additionalService.hideLoader();
                    }
                });
            }
            else {
                this.notValidPhone = true;
                this.additionalService.hideLoader();
            }
        });
    }
}


/***/ }),

/***/ "./src/app/verify-account/verify-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/verify-account/verify-account.component.ts ***!
  \************************************************************/
/*! exports provided: VerifyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAccountComponent", function() { return VerifyAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class VerifyAccountComponent {
    constructor(formBuilder, authenticationServiceService, http, activatedRoute, redirectsService, additionalService, translate, languageService) {
        this.formBuilder = formBuilder;
        this.authenticationServiceService = authenticationServiceService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.redirectsService = redirectsService;
        this.additionalService = additionalService;
        this.translate = translate;
        this.languageService = languageService;
        this.verifyAccountFormSubmitted = false;
        this.differentPasswords = false;
        this.failedVerifiedAccount = false;
    }
    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        }
        else {
            this.verifyAccountForm = this.formBuilder.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ])),
                repeat_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ]))
            });
        }
    }
    // convenience getter for easy access to form fields
    get verify_account_form_data() {
        return this.verifyAccountForm.controls;
    }
    // dentist trying to log in
    onVerifyAccountFormSubmit() {
        this.differentPasswords = false;
        this.verifyAccountFormSubmitted = true;
        // stop here if form is invalid
        if (this.verifyAccountForm.invalid) {
            return;
        }
        if (this.verify_account_form_data.password.value.trim() !== this.verify_account_form_data.repeat_password.value.trim()) {
            this.differentPasswords = true;
            return;
        }
        const ParseHeaders = {
            headers: new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        this.activatedRoute.params.subscribe((params) => {
            this.additionalService.showLoader();
            const body = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('password', this.verify_account_form_data.password.value.trim()).set('type_language', this.translate.currentLang);
            this.http.post('https://dcn-hub-app-api.dentacoin.com/external-api/validate-token/' + params['token'], body.toString(), ParseHeaders).subscribe((response) => {
                this.additionalService.hideLoader();
                if (response.success) {
                    this.redirectsService.redirectToPatientLogin('account-verification');
                }
                else if (response.errors) {
                    this.failedVerifiedAccount = true;
                }
            });
        });
    }
}


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    hybrid: false,
    default_language: 'en',
    /*dentacoinDomain: 'https://dev.dentacoin.com',
    coreDbApiDomain: 'https://dev-api.dentacoin.com',
    accountDomain: 'https://dev-account.dentacoin.com',*/
    dentacoinDomain: 'https://dentacoin.com',
    coreDbApiDomain: 'https://api.dentacoin.com',
    accountDomain: 'https://account.dentacoin.com'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    hybrid: false,
    default_language: 'en',
    /*dentacoinDomain: 'https://dev.dentacoin.com',
    coreDbApiDomain: 'https://dev-api.dentacoin.com',
    accountDomain: 'https://dev-account.dentacoin.com',*/
    dentacoinDomain: 'https://dentacoin.com',
    coreDbApiDomain: 'https://api.dentacoin.com',
    accountDomain: 'https://account.dentacoin.com'
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, renderModule, renderModuleFactory, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__["AppServerModule"]; });

/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderModule", function() { return _angular_platform_server__WEBPACK_IMPORTED_MODULE_4__["renderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderModuleFactory", function() { return _angular_platform_server__WEBPACK_IMPORTED_MODULE_4__["renderModuleFactory"]; });




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}


var LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\wamp\www\dcn-hub-app\src\main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ngx-translate/core":
/*!**************************************!*\
  !*** external "@ngx-translate/core" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-translate/core");

/***/ }),

/***/ "@ngx-translate/http-loader":
/*!*********************************************!*\
  !*** external "@ngx-translate/http-loader" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-translate/http-loader");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map