"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/add/operator/toPromise');
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const http_client_service_1 = require('./http-client.service');
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    getAccounts(language, token) {
        return this.http.get(http_client_service_1.EndPoint.account, this.getHeaders(language, '', token))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    getAccount(language, userId, token) {
        return this.http.get(http_client_service_1.EndPoint.account + '/' + userId, this.getHeaders(language, '', token))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    getLanguages(token) {
        return this.http.get(http_client_service_1.EndPoint.language, this.getHeaders(undefined, '', token))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    getLanguage(language, code, token) {
        return this.http.get(http_client_service_1.EndPoint.language + '/' + code, this.getHeaders(language, '', token))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    setAccountLanguage(token, language) {
        return this.http.put(http_client_service_1.EndPoint.account + '/language', JSON.stringify({ params: language }), this.getHeaders(undefined, 'application/json', token))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    setAccountRole(token, role) {
        return this.http.put(http_client_service_1.EndPoint.account + '/role', JSON.stringify({ params: role }), this.getHeaders(undefined, 'application/json', token))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    getHeaders(language, contentType, token) {
        var headers = new http_1.Headers();
        if (contentType != '') {
            headers.append('content-type', contentType);
        }
        headers.append('content-language', (language == undefined) ? 'ca-es' : language.code);
        if (token != '') {
            headers.append('x-security-token', token);
        }
        return new http_1.RequestOptions({ headers: headers });
    }
    getRoles(language, token) {
        return this.http.get(http_client_service_1.EndPoint.role, this.getHeaders(language, '', token))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    getRole(language, name, token) {
        return this.http.get(http_client_service_1.EndPoint.role + '/' + name, this.getHeaders(language, '', token))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    handleError(error) {
        console.log('An error occurred: ' + error);
        return Promise.reject(error.message || error);
    }
};
ApiService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map