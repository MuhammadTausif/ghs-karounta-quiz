import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
