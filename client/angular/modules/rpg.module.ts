import { NgModule }								from '@angular/core';
import { BrowserModule }						from '@angular/platform-browser';
import { HttpModule, JsonpModule, Http }		from '@angular/http';
import { FormsModule }							from '@angular/forms';
import { FormBuilder }							from '@angular/common';
import { TranslateModule, TranslateLoader }		from 'ng2-translate/ng2-translate';
import { TranslateStaticLoader }				from 'ng2-translate/ng2-translate';
 
import { IndexRouting, IndexRoutingProviders }	from '../routings/index.routing';

//import { HttpClient }							from '../services/http.service';
import { ApiService }							from '../services/api.service';
import { AuthenticationService }				from '../services/authentication.service';
import { SessionService }						from '../services/session.service';

import { IndexComponent }						from '../components/rpg/index/index.component';
import { NavBarComponent }						from '../components/shared/nav-bar/nav-bar.component';
import { StickyFooterComponent }				from '../components/shared/sticky-footer/sticky-footer.component';
import { HomeComponent }						from '../components/rpg/home/home.component';
import { LoginComponent }						from '../components/rpg/login/login.component';
import { SingupComponent }						from '../components/rpg/singup/singup.component';
import { ManageHomeComponent }					from '../components/rpg/manage/home/manage-home.component';
import { ManageAccountListComponent }			from '../components/rpg/manage/account/list/manage-account-list.component';
import { ManageAccountDetailComponent }			from '../components/rpg/manage/account/detail/manage-account-detail.component';
import { ManageLanguageListComponent }			from '../components/rpg/manage/language/list/manage-language-list.component';
import { ManageLanguageDetailComponent }		from '../components/rpg/manage/language/detail/manage-language-detail.component';
import { ManageRoleListComponent }				from '../components/rpg/manage/role/list/manage-role-list.component';
import { ManageRoleDetailComponent }			from '../components/rpg/manage/role/detail/manage-role-detail.component';

@NgModule({ 
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		IndexRouting,
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (http: Http) => new TranslateStaticLoader(
				http, 
				'/resources/i18n', 
				'.json'),
			deps: [Http]
		})
	],
	declarations: [
		IndexComponent,					NavBarComponent,	
		StickyFooterComponent,			HomeComponent,
		LoginComponent,					SingupComponent,
		ManageHomeComponent,
		ManageAccountListComponent,		ManageAccountDetailComponent,
		ManageLanguageListComponent,	ManageLanguageDetailComponent,
		ManageRoleListComponent,		ManageRoleDetailComponent
	],
	providers: [
		FormBuilder,	ApiService,				AuthenticationService,	
		SessionService,	IndexRoutingProviders
	],
	bootstrap: [
		IndexComponent
	]
})

export class RpgModule { }