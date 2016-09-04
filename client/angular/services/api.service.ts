import 'rxjs/add/operator/toPromise';

import { Injectable }			from '@angular/core';
import { Response, Http, Headers, RequestOptions }				from '@angular/http';
import { Observable }			from 'rxjs/Rx'; //'rxjs/Observable';

import { EndPoint }				from './http-client.service';
import { Account }				from '../models/account.model';
import { Role }					from '../models/role.model';
import { Language }				from '../models/language.model';

@Injectable()
export class ApiService {
	
	constructor(
		private http: Http) { }
	
	getAccounts(language: Language, token: string): Promise<Account[]> {
		
		return this.http.get(EndPoint.account, this.getHeaders(language, '', token))
			.toPromise()
			.then(response => response.json().data as Account[])
			.catch(this.handleError);
	}
	
	getAccount(language: Language, userId: string, token: string): Promise<Account> {
		
		return this.http.get(EndPoint.account + '/' + userId, this.getHeaders(language, '', token))
			.toPromise()
			.then(response => response.json().data as Account)
			.catch(this.handleError);
	}
	
	getLanguages(token: string): Promise<Language[]> {
		
		return this.http.get(EndPoint.language, this.getHeaders(undefined, '', token))
			.toPromise()
			.then(response => response.json().data as Language[])
			.catch(this.handleError);
	}
	
	getLanguage(language: Language, code: string, token: string): Promise<Language> {
		
		return this.http.get(EndPoint.language + '/' + code, this.getHeaders(language, '', token))
			.toPromise()
			.then(response => response.json().data as Language)
			.catch(this.handleError); 
	}
	
	setAccountLanguage(token: string, language: Language): Promise<Language> {
		return this.http.put(EndPoint.account + '/language', JSON.stringify({ params: language }), this.getHeaders(undefined, 'application/json', token))
			.toPromise()
			.then(response => response.json().data as Language)
			.catch(this.handleError); 
	}
	
	setAccountRole(token: string, role: Role): Promise<Role> {
		return this.http.put(EndPoint.account + '/role', JSON.stringify({ params: role }), this.getHeaders(undefined, 'application/json', token))
			.toPromise()
			.then(response => response.json().data as Role)
			.catch(this.handleError); 
	}
	
	private getHeaders(language: Language, contentType: string, token: string): RequestOptions {
		
		var headers = new Headers();
		
		if (contentType != '') { headers.append('content-type', contentType); }
		
		headers.append('content-language', (language==undefined) ? 'ca-es' : language.code);
		
		if (token != '') { headers.append('x-security-token', token); }
		
		return new RequestOptions({ headers: headers });
	}
	
	getRoles(language: Language, token: string): Promise<Role[]> {
		
		return this.http.get(EndPoint.role, this.getHeaders(language, '', token))
			.toPromise()
			.then(response => response.json().data as Role[])
			.catch(this.handleError);
	}
	
	getRole(language: Language, name: string, token: string): Promise<Role> {
		
		return this.http.get(EndPoint.role + '/' + name, this.getHeaders(language, '', token))
			.toPromise()
			.then(response => response.json().data as Role)
			.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.log('An error occurred: ' + error);
		return Promise.reject(error.message || error);
	}
	
	/*
	getLanguage(code: string): Promise<Language> {
		return this.http.get(EndPoint.language)
			.toPromise()
			.then(response => response.json().data as Language)
			.catch(this.handleError);
	}
	
	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}
	
	private handleError (error: any) {
		let errMsg = (error.message) ? error.message : 
			error.status ? `${error.status} - ${error.statusText}` :
				'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
	
	getLanguages (): Observable<Language[]> {
		return this.http.get(this.languageEndPoint)
			.map(this.extractData)
			.catch(this.handleError);
	}
	*/
	
	/*
	
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
	
	getLanguages(): Promise<Language[]> {
		return this.http.get(this.languageLoginEndPoint)
			.toPromise()
			.then(response => response.json().data as Language[])
			.catch(this.handleError);
	}
	
	getLanguage(code: string): Promise<Language> {
		return this.http.get(this.languageLoginEndPoint + '/' + code)
			.toPromise()
			.then(response => response.json().data as Language)
			.catch(this.handleError);
	}
	
	getRoles(): Promise<Role[]> {
		return this.http.get(this.roleLogoutEndPoint)
			.toPromise()
			.then(response => response.json().data as Role[])
			.catch(this.handleError);
	}
	
	getRole(name: string): Promise<Role> {
		return this.http.get(this.roleLogoutEndPoint + '/' + name)
			.toPromise()
			.then(response => response.json().data as Role)
			.catch(this.handleError);
	}
	*/
}