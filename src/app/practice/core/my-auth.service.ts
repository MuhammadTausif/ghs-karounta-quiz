import { Injectable } from '@angular/core';
// import { AngularFireAuth, FirebaseAuthState, AuthProviders, AuthMethods, AngularFire } from "angularfire2";
import { Router } from "@angular/router";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  constructor(
    afd: AngularFireDatabaseModule,
    af: AngularFireModule,
    router: Router
  ) { 
    // af.auth.subscribe((auth) => {
    //   this.authState = auth;
    // });
  }
}
