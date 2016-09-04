import { Component, OnInit }			from '@angular/core';
import { Router }						from '@angular/router';
import { TranslateService }				from 'ng2-translate/ng2-translate';

import { ApiService, SessionService }	from '../index.barrel';
import { Language }						from '../index.barrel';

@Component({
    selector: 'rpg-manage-language-list',
	templateUrl: 'angular/components/rpg/manage/language/list/manage-language-list.component.tpl.html',
	styleUrls: [
		'angular/components/rpg/manage/language/list/manage-language-list.component.css'
	]
})

export class ManageLanguageListComponent implements OnInit  {
	
	private languages:	Language[]	= [];
	
	constructor(
		private api:		ApiService,
		private session:	SessionService,
		private translate:	TranslateService,
		private router:		Router) { }
	
	ngOnInit () {
		this.getLanguages();
	}
	
	onSelect(language: Language) {
		this.router.navigate(['/manage/language', language.code]);
	}

	
	private handleError(error: any) {
		console.log('An error occurred: ' + error);
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