import { Component, EventEmitter }					from '@angular/core';
import { OnInit, Output, Input }					from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Validators }	from '@angular/common';
import { ControlGroup, NgIf }						from '@angular/common';
import { Router }									from '@angular/router';
import { TranslateService }							from 'ng2-translate/ng2-translate';

import { Auth }						from '../index.barrel';
import { SessionService }							from '../../../services/session.service';

@Component({
	selector:   'rpg-singup',
	directives: [ FORM_DIRECTIVES, NgIf ],
	templateUrl: 'angular/components/rpg/singup/singup.component.tpl.html',
	styleUrls: [
		'angular/components/rpg/singup/singup.component.css'
	]
})

export class SingupComponent implements OnInit {
	
	private form:		ControlGroup;
	private error:		string;
	
	constructor(
		private fb:			FormBuilder, 
		private session:	SessionService,
		private translate:	TranslateService,
		private router:		Router) { }
	
	ngOnInit() {
		this.form = this.fb.group({
			userId:		['', Validators.required],
			password:	['', Validators.required],
			email:		['', Validators.required]
		});
	}
	
	onSubmit(value: any) {
		this.error = '';
		this.session.singup(value.userId, value.password, value.email)
			.then(data => this.resolveSingup(data));
	}
	
	private resolveSingup(data: Auth) {
		if (this.session.isAuthenticated()) {
			this.router.navigate(['../profile']);
		}
		else {
			this.translate.get(data.data).subscribe((res: string) => {
				this.error = res;
			});
		}
		
		return data;
	}
 
}