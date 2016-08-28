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
require('rxjs/add/operator/toPromise');
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
class Auth {
}
exports.Auth = Auth;
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.loginEndPoint = '/authentication/login';
        this.logoutEndPoint = '/authentication/logout';
        this.singupEndPoint = '/authentication/singup';
    }
    handleError(error) {
        console.log('An error occurred ' + error);
        return Promise.reject(error.message || error);
    }
    httpPost(endPoint, params, headers) {
        return this.http.post(endPoint, params, headers)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    login(userId, password) {
        var params = JSON.stringify({ userId: userId, password: password });
        var headers = { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) };
        return this.httpPost(this.loginEndPoint, params, headers);
    }
    logout(token) {
        var params = JSON.stringify({});
        var headers = { headers: new http_1.Headers({ 'x-security-token': token }) };
        return this.httpPost(this.logoutEndPoint, params, headers);
    }
    singup(userId, password, email) {
        var params = JSON.stringify({ userId: userId, password: password, email: email });
        var headers = { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) };
        return this.httpPost(this.singupEndPoint, params, headers);
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map