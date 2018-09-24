import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseAuth } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class MyLoginService {

  authState: FirebaseAuth;

  constructor(private afa: AngularFireAuth) { }

  login(username: string, password: string){
    this.afa.auth.createUserAndRetrieveDataWithEmailAndPassword(username, password).then(
      res=> {
        console.log('Regitered User is: ', res);
      }
    )
    // firebase.auth().onAuthStateChanged()
    firebase.auth().signOut();
    console.warn("This is user"+firebase.auth().currentUser.email);
  }

  loginWithGoogle(username: string, password: string) {
    this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      console.log('user info is ', res);
    });
  }
}
