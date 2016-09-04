import { Component, OnInit, OnDestroy }	from '@angular/core';
import { Router, ActivatedRoute }		from '@angular/router';
import { Subscription }					from 'rxjs/Subscription';
import { TranslateService }				from 'ng2-translate/ng2-translate';

import { ApiService, SessionService }	from '../index.barrel';
import { Language }						from '../index.barrel';

@Component({
    selector: 'rpg-manage-language-detail',
	templateUrl: 'angular/components/rpg/manage/language/detail/manage-language-detail.component.tpl.html',
	styleUrls: [
		'angular/components/rpg/manage/language/detail/manage-language-detail.component.css'
	]
})

export class ManageLanguageDetailComponent implements OnInit { 
	
	private language:		Language;
	private subscription:	Subscription;
	
	constructor(
		private api:		ApiService,
		private session:	SessionService,
		private translate:	TranslateService,
		private router:		Router,
		private route:		ActivatedRoute) { }
	
	ngOnInit () {
		this.subscription = this.route.params.subscribe(params => {
			let code = params['code']; 
			// let id = +params['id']; (+) converts string 'id' to a number
			this.getLanguage(code);
		});
	}
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	
	gotoManage() { this.router.navigate(['/manage']); }
	
	private handleError(error: any) {
		console.log('An error occurred: ' + error);
	}
	
	private getLanguage (code: string) {
		
		this.api.getLanguage(this.session.getLanguage(), code, this.session.getToken())
			.then(language => this.setLanguage(language))
			.catch(this.handleError);
	}
	
	private setLanguage (language: Language) {
		
		this.language = language;
	}
	
}