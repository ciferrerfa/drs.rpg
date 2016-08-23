import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RpgIndexComponent }  from './rpg-index.component';

@NgModule({
    imports:        [ BrowserModule ],
    declarations:   [ RpgIndexComponent ],
    bootstrap:      [ RpgIndexComponent ]
})

export class AppModule { }