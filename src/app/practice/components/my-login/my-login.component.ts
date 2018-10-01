import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyLoginService } from '../../shared/services/my-login.service';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  username: string;
  password: string;
  user = firebase.auth().currentUser;

  constructor(private myLoginService: MyLoginService) {
    this.username = 'abc@email.com';
    this.password = 'pass_123';
   }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      function(user){
        this.user = firebase.auth().currentUser;
      }
    );
  }

  login() {
    this.myLoginService.login(this.username, this.password);
  }

  logout(){
    firebase.auth().signOut();
  }
}
