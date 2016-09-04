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
let ManageRoleListComponent = class ManageRoleListComponent {
    constructor(api, session, translate, router) {
        this.api = api;
        this.session = session;
        this.translate = translate;
        this.router = router;
        this.roles = [];
    }
    ngOnInit() {
        this.getRoles();
    }
    onSelect(role) {
        this.router.navigate(['/manage/role', role.name]);
    }
    handleError(error) {
        console.log('An error occurred: ' + error);
    }
    getRoles() {
        this.api.getRoles(this.session.getLanguage(), this.session.getToken())
            .then(roles => this.setRoles(roles))
            .catch(this.handleError);
    }
    setRoles(roles) {
        this.roles = roles;
    }
};
ManageRoleListComponent = __decorate([
    core_1.Component({
        selector: 'rpg-manage-role-list',
        templateUrl: 'angular/components/rpg/manage/role/list/manage-role-list.component.tpl.html',
        styleUrls: [
            'angular/components/rpg/manage/role/list/manage-role-list.component.css'
        ]
    }), 
    __metadata('design:paramtypes', [index_barrel_1.ApiService, index_barrel_1.SessionService, ng2_translate_1.TranslateService, router_1.Router])
], ManageRoleListComponent);
exports.ManageRoleListComponent = ManageRoleListComponent;
//# sourceMappingURL=manage-role-list.component.js.map