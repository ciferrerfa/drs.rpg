import { Component, OnInit, OnDestroy }	from '@angular/core';
import { Router, ActivatedRoute }		from '@angular/router';
import { Subscription }					from 'rxjs/Subscription';
import { TranslateService }				from 'ng2-translate/ng2-translate';

import { ApiService, SessionService }	from '../index.barrel';
import { Account }						from '../index.barrel';

@Component({
    selector: 'rpg-manage-account-detail',
	templateUrl: 'angular/components/rpg/manage/account/detail/manage-account-detail.component.tpl.html',
	styleUrls: [
		'angular/components/rpg/manage/account/detail/manage-account-detail.component.css'
	]
})

export class ManageAccountDetailComponent implements OnInit { 
	
	private account:		Account;
	private subscription:	Subscription;
	
	constructor(
		private api:		ApiService,
		private session:	SessionService,
		private translate:	TranslateService,
		private router:		Router,
		private route:		ActivatedRoute) { }
	
	ngOnInit () {
		this.subscription = this.route.params.subscribe(params => {
			let userId = params['userId']; 
			// let id = +params['id']; (+) converts string 'id' to a number
			this.getAccount(userId);
		});
	}
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	
	gotoAccounts() { this.router.navigate(['/manage']); }
	
	private handleError(error: any) {
		console.log('An error occurred: ' + error);
	}
	
	private getAccount (userId: string) {
		
		this.api.getAccount(this.session.getLanguage(), userId, this.session.getToken())
			.then(account => this.setAccount(account))
			.catch(this.handleError);
	}
	
	private setAccount (account: Account) {
		
		this.account = account;
	}
	
}