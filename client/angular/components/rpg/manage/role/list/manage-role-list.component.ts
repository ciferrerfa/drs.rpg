import { Component, OnInit }			from '@angular/core';
import { Router }						from '@angular/router';
import { TranslateService }				from 'ng2-translate/ng2-translate';

import { ApiService, SessionService }	from '../index.barrel';
import { Role }						from '../index.barrel';

@Component({
    selector: 'rpg-manage-role-list',
	templateUrl: 'angular/components/rpg/manage/role/list/manage-role-list.component.tpl.html',
	styleUrls: [
		'angular/components/rpg/manage/role/list/manage-role-list.component.css'
	]
})

export class ManageRoleListComponent implements OnInit  {
	
	private roles:	Role[]	= [];
	
	constructor(
		private api:		ApiService,
		private session:	SessionService,
		private translate:	TranslateService,
		private router:		Router) { }
	
	ngOnInit () {
		this.getRoles();
	}
	
	onSelect(role: Role) {
		this.router.navigate(['/manage/role', role.name]);
	}

	
	private handleError(error: any) {
		console.log('An error occurred: ' + error);
	}
	
	private getRoles () {
		
		this.api.getRoles(this.session.getLanguage(), this.session.getToken())
			.then(roles => this.setRoles(roles))
			.catch(this.handleError);
	}
	
	private setRoles (roles: Role[]) {
		
		this.roles = roles;
	}
	
}