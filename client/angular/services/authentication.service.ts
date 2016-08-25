import 'rxjs/add/operator/toPromise';import 'rxjs/add/operator/toPromise';

import { Injectable }				from '@angular/core';
import { Http, Headers, Response }	from '@angular/http';
import { Observable }				from 'rxjs/Rx'; //'rxjs/Observable';

import { Account }					from '../models/account.model';

//{auth: false, data: 'errordatabase', token: null}
export class Auth {
	auth:	boolean;
	data:	any;
	token:	string;
}

@Injectable()
export class AuthenticationService {
	
	private loginEndPoint : string = '/authentication/login'; 
	private logoutEndPoint : string = '/authentication/logout';
	private singupEndPoint : string = '/authentication/singup';
	
	private localStorageToken : string = 'rpg-token-auth';
	private localStorageAccount : string = 'rpg-account-auth';
	
	private token:		string	=	undefined;
	private account:	Account	=	undefined;
	
	constructor (private http: Http) {
		this.token = localStorage.getItem(this.localStorageToken);
		this.account = JSON.parse(localStorage.getItem(this.localStorageAccount));
	}
	
	private handleError (error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
	
	private httpPost (endPoint, params, headers): Promise<Auth> {
		return this.http.post(endPoint, params, headers)
			.toPromise()
			.then(response => response.json() as Auth)
			.catch(this.handleError);
	}
	
	private setToken (token: string) {
		this.token = token;
		
		if (token == undefined) {
			localStorage.removeItem(this.localStorageToken);
		}
		else {
			localStorage.setItem(this.localStorageToken, this.token);
		}
	}
	
	private setAccount (account: Account) {
		this.account = account;
		
		if (account == undefined) {
			localStorage.removeItem(this.localStorageAccount);
		}
		else {
			localStorage.setItem(this.localStorageAccount, JSON.stringify(this.account));
		}
	}
	
	login (userId: string, password: string): Promise<Auth> {
		var params = JSON.stringify({userId: userId, password: password});
		var headers = { headers: new Headers({'Content-Type': 'application/json'}) };
		
		return this.httpPost(this.loginEndPoint, params, headers)
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
		var params = JSON.stringify({ });
		var headers = { headers: new Headers({'x-security-token': this.token}) };
		
		return this.httpPost(this.logoutEndPoint, params, headers)
			.then(response => this.resolveLogout(response));
	}
	
	private resolveLogout (result: Auth): Auth {
		
		if (result.auth) {
			this.setToken(undefined);
			this.setAccount(undefined);
		}
		
		return result;
	}
	
	singup (userId: string, password: string, email: string): Promise<Auth> {
		var params = JSON.stringify({userId: userId, password: password, email: email});
		var headers = { headers: new Headers({'Content-Type': 'application/json'}) };
		
		return this.httpPost(this.singupEndPoint, params, headers)
			.then(response => this.resolveSingup(response));
	}
	
	private resolveSingup (result: Auth): Auth {
		
		if (result.auth) {
			this.setToken(result.token);
		}
		
		return result;
	}
	
	isAuthenticated () {
		return !!localStorage.getItem(this.localStorageToken);
	}
	
	getAccount () : Account {
		return this.account;
	}
	
}