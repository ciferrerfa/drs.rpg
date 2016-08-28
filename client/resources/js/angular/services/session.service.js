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
const core_1 = require('@angular/core');
const authentication_service_1 = require('./authentication.service');
class Storage {
    static get account() { return 'rpg-account'; }
    static get language() { return 'rpg-language'; }
    static get token() { return 'rpg-token'; }
}
let SessionService = class SessionService {
    constructor(auth) {
        this.auth = auth;
    }
    getAccount() {
        return (!!localStorage.getItem(Storage.account))
            ? undefined
            : JSON.parse(localStorage.getItem(Storage.account));
    }
    setAccount(account) {
        localStorage.removeItem(Storage.account);
        if (account != undefined) {
            localStorage.setItem(Storage.account, JSON.stringify(account));
        }
    }
    setLanguage(language) {
        if (this.isAuthenticated()) {
            var account = this.getAccount();
            account.language = language;
            this.setAccount(account);
        }
        sessionStorage.removeItem(Storage.language);
        if (language != undefined) {
            sessionStorage.setItem(Storage.language, JSON.stringify(language));
        }
    }
    getLanguage() {
        return (!!sessionStorage.getItem(Storage.language))
            ? { _id: '', code: 'es-ca', name: '', __v: 0 }
            : JSON.parse(sessionStorage.getItem(Storage.language));
    }
    getToken() {
        return (!!localStorage.getItem(Storage.token))
            ? ''
            : localStorage.getItem(Storage.token);
    }
    setToken(token) {
        localStorage.removeItem(Storage.token);
        if (token != undefined) {
            localStorage.setItem(Storage.token, token);
        }
    }
    isAuthenticated() {
        return !!localStorage.getItem(Storage.token);
    }
    login(userId, password) {
        return this.auth.login(userId, password)
            .then(response => this.resolveLogin(response));
    }
    resolveLogin(result) {
        if (result.auth) {
            this.setToken(result.token);
            this.setAccount(result.data);
        }
        return result;
    }
    logout() {
        this.auth.logout(this.getToken())
            .then(response => this.resolveLogout(response));
    }
    resolveLogout(result) {
        if (result.auth) {
            this.setToken(undefined);
            this.setAccount(undefined);
        }
    }
    singup(userId, password, email) {
        return this.auth.singup(userId, password, email)
            .then(response => this.resolveSingup(response));
    }
    resolveSingup(result) {
        if (result.auth) {
            this.setToken(result.token);
            this.setAccount(result.data);
        }
        return result;
    }
};
SessionService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map