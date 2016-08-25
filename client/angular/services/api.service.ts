import 'rxjs/add/operator/toPromise';

import { Injectable }				from '@angular/core';
import { Http, Response }			from '@angular/http';
import { Observable }				from 'rxjs/Rx'; //'rxjs/Observable';

import { Role }						from '../models/role.model';
import { Language }					from '../models/language.model';

@Injectable()
export class ApiService {
	
	private languageEndPoint : string = '/api/language'; 
	private roleEndPoint : string = '/api/role';
	
	constructor(
		private http: Http) { }
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
	
	getLanguages(): Promise<Language[]> {
		return this.http.get(this.languageEndPoint)
			.toPromise()
			.then(response => response.json().data as Language[])
			.catch(this.handleError);
	}
	
	getLanguage(code: string): Promise<Language> {
		return this.http.get(this.languageEndPoint)
			.toPromise()
			.then(response => response.json().data as Language)
			.catch(this.handleError);
	}
	
	/*
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