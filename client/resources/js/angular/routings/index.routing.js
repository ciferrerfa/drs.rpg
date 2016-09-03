"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('../components/rpg/home/home.component');
const login_component_1 = require('../components/rpg/login/login.component');
const singup_component_1 = require('../components/rpg/singup/singup.component');
const manage_home_component_1 = require('../components/rpg/manage/home/manage-home.component');
const manage_account_detail_component_1 = require('../components/rpg/manage/account/detail/manage-account-detail.component');
const manage_account_list_component_1 = require('../components/rpg/manage/account/list/manage-account-list.component');
const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'singup', component: singup_component_1.SingupComponent },
    { path: 'manage', children: [
            { path: '', component: manage_home_component_1.ManageHomeComponent },
            { path: 'manage/account', component: manage_account_list_component_1.ManageAccountListComponent, outlet: 'manage' },
            { path: 'manage/account/:userId', component: manage_account_detail_component_1.ManageAccountDetailComponent, outlet: 'manage' }
        ] }
];
exports.IndexRoutingProviders = [];
exports.IndexRouting = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=index.routing.js.map