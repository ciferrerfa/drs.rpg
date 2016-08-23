import { NgModule }					from '@angular/core';
import { BrowserModule }			from '@angular/platform-browser';

import { IndexRouting }				from './routings/index.routing';

import { RpgIndexComponent }		from './components/rpg/index/rpg-index.component';
import { RpgHomeComponent }			from './components/rpg/home/rpg-home.component';
import { NavBarComponent }			from './components/shared/nav-bar/nav-bar.component';
import { StickyFooterComponent }	from './components/shared/sticky-footer/sticky-footer.component';

@NgModule({
	imports: [
		BrowserModule,
		IndexRouting
	],
	declarations: [
		RpgIndexComponent,
		NavBarComponent,
		StickyFooterComponent,
		RpgHomeComponent
	],
	bootstrap: [
		RpgIndexComponent
	]
})

export class RpgModule { }