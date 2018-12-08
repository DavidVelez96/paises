import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// jwt
import { JwtHelperService  } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  private authenticated: boolean;
  private token: string;
  private jwtHelper: JwtHelperService  = new JwtHelperService ();

  constructor(
    private _router: Router
  ) {
    
  }

  canActivate() {
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      try {
        this.authenticated = (!(this.jwtHelper.isTokenExpired(this.token)) && (this.jwtHelper.decodeToken(this.token) ? true : false));
        if(this.authenticated){
          return true;
        }else{
          localStorage.removeItem('token');
          this._router.navigate(['/inicio']);
          return false;
        }
      }
      catch(e) {
        localStorage.removeItem('token');
        this._router.navigate(['/inicio']);
        return false;
      }
    }else{
      this._router.navigate(['/inicio']);
      return false;
    }
  }
}
