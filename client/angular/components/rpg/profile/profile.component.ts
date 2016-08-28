import { Component }					from '@angular/core';
import { CanActivate }					from '@angular/router';

import { SessionService }		from '../index.barrel';

@Component({
	selector: 'rpg-profile',
	templateUrl: 'angular/components/rpg/profile/profile.component.tpl.html',
	styleUrls: [
		'angular/components/rpg/profile/profile.component.css'
	]
})

//@CanActivate(() => isAuthenticated())
export class ProfileComponent {
	
}