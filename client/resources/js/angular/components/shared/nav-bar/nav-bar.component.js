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
require('rxjs/Rx');
const core_1 = require('@angular/core');
const index_barrel_1 = require('../index.barrel');
const index_barrel_2 = require('../index.barrel');
let NavBarComponent = class NavBarComponent {
    constructor(api, auth) {
        this.api = api;
        this.auth = auth;
        this.errorMessage = '';
        this.language = { _id: '', code: 'es-ca', name: '', __v: 0 };
        this.languages = [];
    }
    setLanguages(languages) {
        this.languages = languages;
        this.language = (this.isAuthenticated())
            ? this.getLanguage()
            : languages[0];
    }
    getLanguages() {
        this.api.getLanguages()
            .then(languages => this.setLanguages(languages));
    }
    ngOnInit() {
        this.getLanguages();
    }
    changeLanguage(language) {
        this.language = language;
    }
    isAuthenticated() {
        return this.auth.isAuthenticated();
    }
    getUserId() {
        return (this.auth.getAccount() != undefined)
            ? this.auth.getAccount().userId
            : '';
    }
    getLanguage() {
        return (this.auth.getAccount() != undefined)
            ? this.auth.getAccount().language
            : { _id: '', code: 'es-ca', name: '', __v: 0 };
    }
    logout() {
        this.auth.logout();
    }
};
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        templateUrl: 'angular/components/shared/nav-bar/nav-bar.component.tpl.html',
        styleUrls: [
            'angular/components/shared/nav-bar/nav-bar.component.css'
        ]
    }), 
    __metadata('design:paramtypes', [index_barrel_2.ApiService, index_barrel_1.AuthenticationService])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map