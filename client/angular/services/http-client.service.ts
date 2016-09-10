//import { Http, Headers }	from '@angular/http';
//import { Injectable }		from '@angular/core';

export class EndPoint {
	//auth
	public static get login():	string { return '/api/authentication/login'; }
	public static get logout():	string { return '/api/authentication/logout'; }
	public static get singup():	string { return '/api/authentication/singup'; }
	
	//api
	public static get language():	string { return '/api/language'; }
	public static get role():		string { return '/api/role'; }
	public static get account():	string { return '/api/account'; }
}
	
/*
@Injectable()
export class HttpClient {
	
	constructor(
		private http: Http) { }
    
    get (endPoint: string) {
		return this.http.get(endPoint);
    }
    
    put (endPoint: string, data: string) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		return this.http.put(endPoint, data, headers);
    }
*/    
    /*
    createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
    */
  /*  
}
*/