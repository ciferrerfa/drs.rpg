"use strict";
var router_1 = require('@angular/router');
var rpg_home_component_1 = require('../components/rpg/home/rpg-home.component');
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: rpg_home_component_1.RpgHomeComponent }
];
exports.IndexRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=index.routing.js.map