import { Injectable }					from '@angular/core';
//import { Response, Http, Headers }				from '@angular/http';
//import { Observable }			from 'rxjs/Rx'; //'rxjs/Observable';

import { ApiService }					from './api.service';
import { AuthenticationService, Auth }	from './authentication.service';

//import { EndPoint }				from './http-client.service';
import { Account, Language }			from '../models/index.barrel';

class Storage {
	public static get account():	string { return 'rpg-account'; }
	public static get language():	string { return 'rpg-language'; }
	public static get token():		string { return 'rpg-token'; }
}

@Injectable()
export class SessionService {
	
	constructor (
		private auth:	AuthenticationService) { }
	
	getAccount () : Account {
		
		return (!!localStorage.getItem(Storage.account))
			? JSON.parse(localStorage.getItem(Storage.account))
				: undefined;
	}
	
	private setAccount (account: Account) {
		
		localStorage.removeItem(Storage.account);
		
		if (account != undefined) {
			localStorage.setItem(Storage.account, JSON.stringify(account));
			this.setLanguage(account.language, false);
		}
	}
	
	setLanguage (language, modifyAccount) {
		
		if (modifyAccount) {
			if (this.isAuthenticated()) {
				var account = this.getAccount();
				account.language = language;
				this.setAccount(account); 
			}
		}
		
		sessionStorage.removeItem(Storage.language);
		
		if (language != undefined) {
			sessionStorage.setItem(Storage.language, JSON.stringify(language));
		}
	}
	
	getLanguage () : Language {
		
		return (!!sessionStorage.getItem(Storage.language))
			? JSON.parse(sessionStorage.getItem(Storage.language))
				: { _id: '', code: 'es-ca', name: '', __v:0 };
	}
	
	getToken () : string {
		
		return (!!localStorage.getItem(Storage.token))
			? localStorage.getItem(Storage.token)
				: '';
	}
	
	private setToken (token: string) {
		
		localStorage.removeItem(Storage.token);
		
		if (token != undefined) {
			localStorage.setItem(Storage.token, token);
		}
	}
	
	isAuthenticated () {
		
		return !!localStorage.getItem(Storage.token);
	}
	
	login (userId: string, password: string): Promise<Auth> {
		
		return this.auth.login(userId, password)
			.then(response => this.resolveLogin(response));
	}
	
	private resolveLogin (result: Auth): Auth {
		
		if (result.auth) {
			this.setToken(result.token);
			this.setAccount(result.data);
		}
		
		return result;
	}
	
	logout () {
		
		this.auth.logout(this.getToken())
			.then(response => this.resolveLogout(response));
	}
	
	private resolveLogout (result: Auth) {
		
		if (result.auth) {
			this.setToken(undefined);
			this.setAccount(undefined);
		}
	}
	
	singup (userId: string, password: string, email: string): Promise<Auth> {
		
		return this.auth.singup(userId, password, email)
			.then(response => this.resolveSingup(response));
	}
	
	private resolveSingup (result: Auth): Auth {
		
		if (result.auth) {
			this.setToken(result.token);
			this.setAccount(result.data);
		}
		
		return result;
	}
    
}