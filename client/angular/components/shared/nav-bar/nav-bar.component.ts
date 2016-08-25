import 'rxjs/Rx';

import { Component, OnInit }		from '@angular/core';

import { AuthenticationService }	from '../index.barrel';
import { ApiService }				from '../index.barrel';

import { Language }					from '../index.barrel';

@Component({
	selector: 'nav-bar',
	templateUrl: 'angular/components/shared/nav-bar/nav-bar.component.tpl.html',
	styleUrls: [
		'angular/components/shared/nav-bar/nav-bar.component.css'
	]
})

export class NavBarComponent implements OnInit {
	
	private errorMessage:	string		= '';
	private language:		Language	= { _id: '', code: 'es-ca', name: '', __v:0 };
	private languages:		Language[]	= [];
	
	constructor (
		private api:	ApiService,
		private auth:	AuthenticationService) { }
	
	private setLanguages (languages: Language[]) {
		this.languages = languages;
		this.language = (this.isAuthenticated())
			? this.getLanguage()
				: languages[0];
	}
	
	private getLanguages () {
		this.api.getLanguages()
			.then(languages => this.setLanguages(languages));
	}
	
	ngOnInit () {
		this.getLanguages();
	}
	
	changeLanguage (language) {
		this.language = language;
	}
	
	isAuthenticated () : boolean {
		return this.auth.isAuthenticated();
	}
	
	getUserId () : string {
		return (this.auth.getAccount()!=undefined)
			? this.auth.getAccount().userId
				: '';
	}
	
	getLanguage () : Language {
		return (this.auth.getAccount()!=undefined)
			? this.auth.getAccount().language
				: { _id: '', code: 'es-ca', name: '', __v:0 };
	}
	
	logout () {
		this.auth.logout();
	}
}