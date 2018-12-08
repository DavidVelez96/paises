import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// environment
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApiAuth: string;

  constructor(private http: HttpClient) {
    this.urlApiAuth = environment.urlApiAuth;
  }

  public signIn(user) {
		let headers = new Headers({'Content-Type': 'application/json'});
    let json = JSON.stringify(user);
    return this
      .http
      .post(`${this.urlApiAuth}/signin`, {headers: headers});
	}
}
