import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-practice',
  templateUrl: './register-practice.component.html',
  styleUrls: ['./register-practice.component.css']
})
export class RegisterPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tryRegister(value) {
  //   this.authService.doRegister(value)
  //     .then(res => {
  //       console.log(res);
  //       this.errorMessage = "";
  //       this.successMessage = "Your account has been created";
  //     }, err => {
  //       console.log(err);
  //       this.errorMessage = err.message;
  //       this.successMessage = "";
  //     })
  // }

  // doRegister(value) {
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  //       .then(res => {
  //         resolve(res);
  //       }, err => reject(err))
  //   })
  // }

}
