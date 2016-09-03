import { Component, OnInit }			from '@angular/core';
import { Router }						from '@angular/router';
import { TranslateService }				from 'ng2-translate/ng2-translate';

import { ApiService, SessionService }	from '../index.barrel';
import { Account }						from '../index.barrel';

@Component({
    selector: 'rpg-manage-account-list',
	templateUrl: 'angular/components/rpg/manage/account/list/manage-account-list.component.tpl.html',
	styleUrls: [
		'angular/components/rpg/manage/account/list/manage-account-list.component.css'
	]
})

export class ManageAccountListComponent implements OnInit  {
	
	private accounts:	Account[]	= [];
	
	constructor(
		private api:		ApiService,
		private session:	SessionService,
		private translate:	TranslateService,
		private router:		Router) { }
	
	ngOnInit () {
		this.getAccounts();
	}
	
	onSelect(account: Account) {
		this.router.navigate(['/manage/account', account.userId]);
	}

	
	private handleError(error: any) {
		console.log('An error occurred: ' + error);
	}
	
	private getAccounts () {
		
		this.api.getAccounts(this.session.getLanguage(), this.session.getToken())
			.then(accounts => this.setAccounts(accounts))
			.catch(this.handleError);
	}
	
	private setAccounts (accounts: Account[]) {
		
		this.accounts = accounts;
	}
}