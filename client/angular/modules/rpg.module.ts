import { NgModule }					from '@angular/core';
import { BrowserModule }			from '@angular/platform-browser';
import { HttpModule, JsonpModule }	from '@angular/http';
import { FormsModule }				from '@angular/forms';
import { FormBuilder }				from '@angular/common';
 
import { IndexRouting }				from '../routings/index.routing';

//import { HttpClient }				from '../services//http.service';
import { ApiService }				from '../services/api.service';
import { AuthenticationService }	from '../services/authentication.service';
import { SessionService }			from '../services/session.service';

import { IndexComponent }			from '../components/rpg/index/index.component';
import { NavBarComponent }			from '../components/shared/nav-bar/nav-bar.component';
import { StickyFooterComponent }	from '../components/shared/sticky-footer/sticky-footer.component';
import { HomeComponent }			from '../components/rpg/home/home.component';
import { LoginComponent }			from '../components/rpg/login/login.component';
import { ProfileComponent }			from '../components/rpg/profile/profile.component';

@NgModule({ 
	imports: [
		BrowserModule,	FormsModule,		HttpModule,				JsonpModule,
		IndexRouting
	],
	declarations: [
		IndexComponent,	NavBarComponent,	StickyFooterComponent,	HomeComponent,
		LoginComponent,	ProfileComponent
	],
	providers: [
		FormBuilder,	ApiService,			AuthenticationService,	SessionService
	],
	bootstrap: [
		IndexComponent
	]
})

export class RpgModule { }