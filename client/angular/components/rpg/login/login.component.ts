import { Component, EventEmitter }			from '@angular/core';
import { OnInit, Output, Input }			from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder }		from '@angular/common';
import { Validators, ControlGroup, NgIf }	from '@angular/common';
import { Router }							from '@angular/router';

import { AuthenticationService }			from '../index.barrel';

@Component({
	selector:   'rpg-login',
	directives: [ FORM_DIRECTIVES, NgIf ],
	templateUrl: 'angular/components/rpg/login/login.component.tpl.html',
	styleUrls: [
		'angular/components/rpg/login/login.component.css'
	]
})

export class LoginComponent implements OnInit {
	
	private form:	ControlGroup;
	private error:	boolean			= false;
	
	constructor(
		private fb:		FormBuilder, 
		private auth:	AuthenticationService,
		private router:	Router) { }
	
	ngOnInit() {
		this.form = this.fb.group({
			userId:		['', Validators.required],
			password:	['', Validators.required]
		});
	}
	
	onSubmit(value: any) {
		this.auth.login(value.userId, value.password)
			.then(data => this.resolveLogin());
	}
	
	private resolveLogin() {
		if (this.auth.isAuthenticated()) {
			this.router.navigate(['../profile'])
		}
		else {
			this.error = true;
		}
	}
 
}