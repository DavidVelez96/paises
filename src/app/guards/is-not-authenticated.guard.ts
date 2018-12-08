import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// jwt
import { JwtHelperService  } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class IsNotAuthenticatedGuard implements CanActivate {
  private authenticated: boolean;
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private token: string;

  constructor(
    private _router: Router
  ) {
    
  }

  canActivate() {
    if(localStorage.getItem('token')){
      try {
        this.token = localStorage.getItem('token');
        this._router.navigate(['/paises']);
        this.authenticated = (!(this.jwtHelper.isTokenExpired(this.token)) && (this.jwtHelper.decodeToken(this.token) ? true : false));
        if(this.authenticated){
          return true;
        }else{
          localStorage.removeItem('token');
          this._router.navigate(['/paises']);
          return false;
        }
      }
      catch(e) {
        localStorage.removeItem('token');
        return false;
      }
    }else{
      return true;
    }
  }
}
