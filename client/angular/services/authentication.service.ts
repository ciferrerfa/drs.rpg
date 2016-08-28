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
	
	constructor (
		private http: Http) { }
	
	private handleError (error: any): Promise<any> {
		
		console.log('An error occurred ' + error);
		return Promise.reject(error.message || error);
	}
	
	private httpPost (endPoint, params, headers): Promise<Auth> {
		
		return this.http.post(endPoint, params, headers)
			.toPromise()
			.then(response => response.json() as Auth)
			.catch(this.handleError);
	}
	
	login (userId: string, password: string): Promise<Auth> {
		
		var params = JSON.stringify({userId: userId, password: password});
		var headers = { headers: new Headers({'Content-Type': 'application/json'}) };
		
		return this.httpPost(this.loginEndPoint, params, headers);
	}
	
	logout (token: string) {
		
		var params = JSON.stringify({ });
		var headers = { headers: new Headers({'x-security-token': token}) };
		
		return this.httpPost(this.logoutEndPoint, params, headers);
	}
	
	singup (userId: string, password: string, email: string): Promise<Auth> {
		
		var params = JSON.stringify({userId: userId, password: password, email: email});
		var headers = { headers: new Headers({'Content-Type': 'application/json'}) };
		
		return this.httpPost(this.singupEndPoint, params, headers);
	}
	
}