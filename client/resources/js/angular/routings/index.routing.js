"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('../components/rpg/home/home.component');
const login_component_1 = require('../components/rpg/login/login.component');
const profile_component_1 = require('../components/rpg/profile/profile.component');
const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent }
];
exports.IndexRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=index.routing.js.map