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
	private languages:		Language[]	= [];
	
	constructor (
		private api:		ApiService,
		private session:	SessionService) { }
	
	ngOnInit () {
		
		this.getLanguages();
	}
	
	changeLanguage (language) {
		
		if (this.session.isAuthenticated()) {
			this.api.setAccountLanguage(this.session.getToken(), language);
		}
		this.session.setLanguage(language, true);
	}
	
	changeRole (role) {
		
		if (this.session.isAuthenticated()) {
			this.api.setAccountRole(this.session.getToken(), role);
		}
		this.session.setRole(role);
	}
	
	getUserId () : string {
		
		return (this.session.getAccount() != undefined)
			? this.session.getAccount().userId
				: '';
	}
	
	getUserRole () : string {
		
		return (this.session.getAccount() != undefined)
			? this.session.getAccount().role.name
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
		
		this.api.getLanguages(this.session.getToken())
			.then(languages => this.setLanguages(languages))
			.catch(this.handleError);
	}
	
	private setLanguages (languages: Language[]) {
		
		this.languages = languages;
	}
	
}