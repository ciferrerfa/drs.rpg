import { Component, OnInit, OnDestroy }	from '@angular/core';
import { Router, ActivatedRoute }		from '@angular/router';
import { Subscription }					from 'rxjs/Subscription';
import { TranslateService }				from 'ng2-translate/ng2-translate';

import { ApiService, SessionService }	from '../index.barrel';
import { Role }							from '../index.barrel';

@Component({
    selector: 'rpg-manage-role-detail',
	templateUrl: 'angular/components/rpg/manage/role/detail/manage-role-detail.component.tpl.html',
	styleUrls: [
		'angular/components/rpg/manage/role/detail/manage-role-detail.component.css'
	]
})

export class ManageRoleDetailComponent implements OnInit { 
	
	private role:			Role;
	private subscription:	Subscription;
	
	constructor(
		private api:		ApiService,
		private session:	SessionService,
		private translate:	TranslateService,
		private router:		Router,
		private route:		ActivatedRoute) { }
	
	ngOnInit () {
		this.subscription = this.route.params.subscribe(params => {
			let name = params['name']; 
			// let id = +params['id']; (+) converts string 'id' to a number
			this.getRole(name);
		});
	}
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	
	gotoManage() { this.router.navigate(['/manage']); }
	
	private handleError(error: any) {
		console.log('An error occurred: ' + error);
	}
	
	private getRole (name: string) {
		
		this.api.getRole(this.session.getLanguage(), name, this.session.getToken())
			.then(role => this.setRole(role))
			.catch(this.handleError);
	}
	
	private setRole (role: Role) {
		
		this.role = role;
	}
	
}