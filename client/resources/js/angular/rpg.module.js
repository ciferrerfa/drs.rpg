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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var index_routing_1 = require('./routings/index.routing');
var rpg_index_component_1 = require('./components/rpg/index/rpg-index.component');
var rpg_home_component_1 = require('./components/rpg/home/rpg-home.component');
var nav_bar_component_1 = require('./components/shared/nav-bar/nav-bar.component');
var sticky_footer_component_1 = require('./components/shared/sticky-footer/sticky-footer.component');
var RpgModule = (function () {
    function RpgModule() {
    }
    RpgModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                index_routing_1.IndexRouting
            ],
            declarations: [
                rpg_index_component_1.RpgIndexComponent,
                nav_bar_component_1.NavBarComponent,
                sticky_footer_component_1.StickyFooterComponent,
                rpg_home_component_1.RpgHomeComponent
            ],
            bootstrap: [
                rpg_index_component_1.RpgIndexComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RpgModule);
    return RpgModule;
}());
exports.RpgModule = RpgModule;
//# sourceMappingURL=rpg.module.js.map