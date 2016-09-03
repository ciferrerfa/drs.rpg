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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var translate_pipe_1 = require("./src/translate.pipe");
var translate_service_1 = require("./src/translate.service");
__export(require("./src/translate.pipe"));
__export(require("./src/translate.service"));
__export(require("./src/translate.parser"));
/**
 * Deprecated, import the new TranslateModule in your NgModule instead
 * @deprecated
 */
exports.TRANSLATE_PROVIDERS = [
    {
        provide: translate_service_1.TranslateLoader,
        useFactory: function (http) { return new translate_service_1.TranslateStaticLoader(http); },
        deps: [http_1.Http]
    },
    translate_service_1.TranslateService
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    pipes: [translate_pipe_1.TranslatePipe],
    providers: [translate_service_1.TranslateService]
};
var TranslateModule = (function () {
    function TranslateModule() {
    }
    TranslateModule.forRoot = function (providedLoader) {
        if (providedLoader === void 0) { providedLoader = {
            provide: translate_service_1.TranslateLoader,
            useFactory: function (http) { return new translate_service_1.TranslateStaticLoader(http); },
            deps: [http_1.Http]
        }; }
        return {
            ngModule: TranslateModule,
            providers: [providedLoader, translate_service_1.TranslateService]
        };
    };
    TranslateModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                translate_pipe_1.TranslatePipe
            ],
            exports: [
                translate_pipe_1.TranslatePipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TranslateModule);
    return TranslateModule;
}());
exports.TranslateModule = TranslateModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXRyYW5zbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi10cmFuc2xhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUE0QyxlQUFlLENBQUMsQ0FBQTtBQUM1RCxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsK0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsa0NBQXVFLHlCQUF5QixDQUFDLENBQUE7QUFFakcsaUJBQWMsc0JBQXNCLENBQUMsRUFBQTtBQUNyQyxpQkFBYyx5QkFBeUIsQ0FBQyxFQUFBO0FBQ3hDLGlCQUFjLHdCQUF3QixDQUFDLEVBQUE7QUFFdkM7OztHQUdHO0FBQ1UsMkJBQW1CLEdBQVE7SUFDcEM7UUFDSSxPQUFPLEVBQUUsbUNBQWU7UUFDeEIsVUFBVSxFQUFFLFVBQUMsSUFBVSxJQUFLLE9BQUEsSUFBSSx5Q0FBcUIsQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0I7UUFDM0QsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO0tBQ2Y7SUFDRCxvQ0FBZ0I7Q0FDbkIsQ0FBQztBQUdGO2tCQUFlO0lBQ1gsS0FBSyxFQUFFLENBQUMsOEJBQWEsQ0FBQztJQUN0QixTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztDQUNoQyxDQUFDO0FBV0Y7SUFBQTtJQVdBLENBQUM7SUFWVSx1QkFBTyxHQUFkLFVBQWUsY0FJZDtRQUpjLDhCQUlkLEdBSmM7WUFDWCxPQUFPLEVBQUUsbUNBQWU7WUFDeEIsVUFBVSxFQUFFLFVBQUMsSUFBVSxJQUFLLE9BQUEsSUFBSSx5Q0FBcUIsQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0I7WUFDM0QsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO1NBQ2Y7UUFDRyxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsb0NBQWdCLENBQUM7U0FDaEQsQ0FBQztJQUNOLENBQUM7SUFuQkw7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLFlBQVksRUFBRTtnQkFDViw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4QkFBYTthQUNoQjtTQUNKLENBQUM7O3VCQUFBO0lBWUYsc0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLHVCQUFlLGtCQVczQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5waXBlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlU3RhdGljTG9hZGVyfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5waXBlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGFyc2VyXCI7XG5cbi8qKlxuICogRGVwcmVjYXRlZCwgaW1wb3J0IHRoZSBuZXcgVHJhbnNsYXRlTW9kdWxlIGluIHlvdXIgTmdNb2R1bGUgaW5zdGVhZFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IFRSQU5TTEFURV9QUk9WSURFUlM6IGFueSA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgdXNlRmFjdG9yeTogKGh0dHA6IEh0dHApID0+IG5ldyBUcmFuc2xhdGVTdGF0aWNMb2FkZXIoaHR0cCksXG4gICAgICAgIGRlcHM6IFtIdHRwXVxuICAgIH0sXG4gICAgVHJhbnNsYXRlU2VydmljZVxuXTtcblxuLy8gZm9yIGFuZ3VsYXItY2xpXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlXSxcbiAgICBwcm92aWRlcnM6IFtUcmFuc2xhdGVTZXJ2aWNlXVxufTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVHJhbnNsYXRlUGlwZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUcmFuc2xhdGVQaXBlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KHByb3ZpZGVkTG9hZGVyOiBhbnkgPSB7XG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgdXNlRmFjdG9yeTogKGh0dHA6IEh0dHApID0+IG5ldyBUcmFuc2xhdGVTdGF0aWNMb2FkZXIoaHR0cCksXG4gICAgICAgIGRlcHM6IFtIdHRwXVxuICAgIH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBUcmFuc2xhdGVNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtwcm92aWRlZExvYWRlciwgVHJhbnNsYXRlU2VydmljZV1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=