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

  constructor(private myLoginService: MyLoginService) { }

  ngOnInit() {
  }

  login() {
    this.myLoginService.login(this.username, this.password);
  }
}
