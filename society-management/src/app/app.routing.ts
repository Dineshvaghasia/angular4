import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
 

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
const appRoutes: Routes = [
    
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 @NgModule ({
     imports : [RouterModule.forRoot(appRoutes)],
     exports :[RouterModule]
 })
 export class AppRoutingModule {
     
 }