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
    handleError(error) {
        console.log('An error occurred: ' + error);
        return Promise.reject(error.message || error);
    }
    getLanguages() {
        return this.http.get(http_client_service_1.EndPoint.language)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    getLanguage(code) {
        return this.http.get(http_client_service_1.EndPoint.language)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    setAccountLanguage(language) {
        return this.http.put(http_client_service_1.EndPoint.account + '/language', JSON.stringify(language))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
};
ApiService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map