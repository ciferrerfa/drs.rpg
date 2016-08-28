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
const common_1 = require('@angular/common');
const common_2 = require('@angular/common');
const router_1 = require('@angular/router');
const index_barrel_1 = require('../index.barrel');
let LoginComponent = class LoginComponent {
    constructor(fb, session, router) {
        this.fb = fb;
        this.session = session;
        this.router = router;
        this.error = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            userId: ['', common_2.Validators.required],
            password: ['', common_2.Validators.required]
        });
    }
    onSubmit(value) {
        this.session.login(value.userId, value.password)
            .then(data => this.resolveLogin());
    }
    resolveLogin() {
        if (this.session.isAuthenticated()) {
            this.router.navigate(['../profile']);
        }
        else {
            this.error = true;
        }
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'rpg-login',
        directives: [common_1.FORM_DIRECTIVES, common_2.NgIf],
        templateUrl: 'angular/components/rpg/login/login.component.tpl.html',
        styleUrls: [
            'angular/components/rpg/login/login.component.css'
        ]
    }), 
    __metadata('design:paramtypes', [common_1.FormBuilder, index_barrel_1.SessionService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map