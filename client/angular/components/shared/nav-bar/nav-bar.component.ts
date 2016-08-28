import 'rxjs/Rx';

import { Component, OnInit }			from '@angular/core';

import { ApiService, SessionService }	from '../index.barrel';

import { Language }						from '../index.barrel';

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
		private api:		ApiService,
		private session:	SessionService) { }
	
	ngOnInit () {
		
		this.getLanguages();
	}
	
	changeLanguage (language) {
		
		this.api.setAccountLanguage(language);
		this.session.setLanguage(language);
		this.language = this.session.getLanguage();
	}
	
	getUserId () : string {
		
		return (this.session.getAccount() != undefined)
			? this.session.getAccount().userId
				: '';
	}
	
	private handleError(error: any) {
		console.log('An error occurred: ' + error);
	}
	
	isAuthenticated () : boolean {
		
		return this.session.isAuthenticated();
	}
	
	logout () {
		
		this.session.logout();
	}
	
	private getLanguages () {
		
		this.api.getLanguages()
			.then(languages => this.setLanguages(languages))
			.catch(this.handleError);
	}
	
	private setLanguages (languages: Language[]) {
		
		this.languages = languages;
		this.setLanguage(languages[0]);
	}
	
	private setLanguage (language: Language) {
		
		this.language = (this.session.isAuthenticated())
			? this.session.getLanguage()
				: language;
	}
	
}