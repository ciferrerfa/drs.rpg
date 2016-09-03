import { ModuleWithProviders } from "@angular/core";
import { TranslatePipe } from "./src/translate.pipe";
import { TranslateService } from "./src/translate.service";
export * from "./src/translate.pipe";
export * from "./src/translate.service";
export * from "./src/translate.parser";
/**
 * Deprecated, import the new TranslateModule in your NgModule instead
 * @deprecated
 */
export declare const TRANSLATE_PROVIDERS: any;
declare var _default: {
    pipes: typeof TranslatePipe[];
    providers: typeof TranslateService[];
};
export default _default;
export declare class TranslateModule {
    static forRoot(providedLoader?: any): ModuleWithProviders;
}
