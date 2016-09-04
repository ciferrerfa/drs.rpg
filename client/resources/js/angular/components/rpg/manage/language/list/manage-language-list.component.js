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
const router_1 = require('@angular/router');
const ng2_translate_1 = require('ng2-translate/ng2-translate');
const index_barrel_1 = require('../index.barrel');
let ManageLanguageListComponent = class ManageLanguageListComponent {
    constructor(api, session, translate, router) {
        this.api = api;
        this.session = session;
        this.translate = translate;
        this.router = router;
        this.languages = [];
    }
    ngOnInit() {
        this.getLanguages();
    }
    onSelect(language) {
        this.router.navigate(['/manage/language', language.code]);
    }
    handleError(error) {
        console.log('An error occurred: ' + error);
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
ManageLanguageListComponent = __decorate([
    core_1.Component({
        selector: 'rpg-manage-language-list',
        templateUrl: 'angular/components/rpg/manage/language/list/manage-language-list.component.tpl.html',
        styleUrls: [
            'angular/components/rpg/manage/language/list/manage-language-list.component.css'
        ]
    }), 
    __metadata('design:paramtypes', [index_barrel_1.ApiService, index_barrel_1.SessionService, ng2_translate_1.TranslateService, router_1.Router])
], ManageLanguageListComponent);
exports.ManageLanguageListComponent = ManageLanguageListComponent;
//# sourceMappingURL=manage-language-list.component.js.map