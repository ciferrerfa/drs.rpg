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
const router_2 = require('@angular/router');
const ng2_translate_1 = require('ng2-translate/ng2-translate');
const session_service_1 = require('../../../../services/session.service');
let ManageHomeComponent = class ManageHomeComponent {
    constructor(session, translate, router) {
        this.session = session;
        this.translate = translate;
        this.router = router;
    }
};
ManageHomeComponent = __decorate([
    core_1.Component({
        directives: [router_1.ROUTER_DIRECTIVES],
        selector: 'rpg-manage-home',
        templateUrl: 'angular/components/rpg/manage/home/manage-home.component.tpl.html',
        styleUrls: [
            'angular/components/rpg/manage/home/manage-home.component.css'
        ]
    }), 
    __metadata('design:paramtypes', [session_service_1.SessionService, ng2_translate_1.TranslateService, router_2.Router])
], ManageHomeComponent);
exports.ManageHomeComponent = ManageHomeComponent;
//# sourceMappingURL=manage-home.component.js.map