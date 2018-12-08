import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { IsNotAuthenticatedGuard } from './guards/is-not-authenticated.guard';

// components
import { PaisesComponent } from './components/paises/paises.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent,
    canActivate: [IsNotAuthenticatedGuard]
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [IsNotAuthenticatedGuard]
  },
  {
    path: 'paises',
    component: PaisesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
