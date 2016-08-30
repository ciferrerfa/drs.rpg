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
let NavBarComponent = class NavBarComponent {
    constructor(api, session) {
        this.api = api;
        this.session = session;
        this.errorMessage = '';
        this.languages = [];
    }
    ngOnInit() {
        this.getLanguages();
    }
    changeLanguage(language) {
        if (this.session.isAuthenticated()) {
            this.api.setAccountLanguage(this.session.getToken(), language);
        }
        this.session.setLanguage(language, true);
    }
    changeRole(role) {
        if (this.session.isAuthenticated()) {
            this.api.setAccountRole(this.session.getToken(), role);
        }
        this.session.setRole(role);
    }
    getUserId() {
        return (this.session.getAccount() != undefined)
            ? this.session.getAccount().userId
            : '';
    }
    getUserRole() {
        return (this.session.getAccount() != undefined)
            ? this.session.getAccount().role.name
            : '';
    }
    handleError(error) {
        console.log('An error occurred: ' + error);
    }
    isAuthenticated() {
        return this.session.isAuthenticated();
    }
    logout() {
        this.session.logout();
    }
    getLanguages() {
        this.api.getLanguages(this.session.getToken())
            .then(languages => this.setLanguages(languages))
            .catch(this.handleError);
    }
    setLanguages(languages) {
        this.languages = languages;
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
    __metadata('design:paramtypes', [index_barrel_1.ApiService, index_barrel_1.SessionService])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map