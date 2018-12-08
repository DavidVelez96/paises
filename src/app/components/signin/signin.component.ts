import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// models
import { User } from '../../models/user';

// service
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup;
  public user: User;
  public message: string;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
    this.user = new User('', '');
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    let that = this;
    this.loginForm = new FormGroup({
      email: new FormControl(that.user.email, [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl(that.user.password, [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  public signIn() {
    this._authService.signIn({"email": this.user.email, "password": this.user.password }).subscribe(
      (response: any) => {
        if(response.message === 'Te has logueado correctamente'){
          localStorage.setItem('token', response.token);
          this._router.navigate(['/paises']);
        }
      }, (error: any) =>{
        const res = JSON.parse(error._body);
        this.message = res.Message;
      }
    )
  }

}
