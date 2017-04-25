import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { Signup } from './signup';
import { Header } from './header';
import { LoginComponent } from './login';
import { Home } from './home';
import { Landing } from './landing';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBd_SrFDsvcfwznkyPdkErpALupACnJDXk",
  authDomain: "niitstudent-f4941.firebaseapp.com",
  databaseURL: "https://niitstudent-f4941.firebaseio.com",
  projectId: "niitstudent-f4941",
  storageBucket: "niitstudent-f4941.appspot.com",
  messagingSenderId: "1091048741872"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent, Signup, Header, LoginComponent, Home, Landing
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: Signup
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'landing',
        component: Landing
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
