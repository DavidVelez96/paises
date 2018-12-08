import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';


// routing
import { AppRoutingModule } from './app-routing.module';

// guards
import { AuthenticatedGuard } from './guards/authenticated.guard';

// components
import { AppComponent } from './app.component';
import { PaisesComponent } from './components/paises/paises.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    SigninComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
