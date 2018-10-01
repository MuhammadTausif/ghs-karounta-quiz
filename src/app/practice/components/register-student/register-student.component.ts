import { Component, OnInit } from '@angular/core';
import { RegisterStudentService } from '../../shared/services/register-student.service';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor( private registerStudentService: RegisterStudentService) { }

  email = new FormControl('');
  password = new FormControl('');

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  registerStudent(){
    this.registerStudentService.registerStudent(this.email.value, this.password.value);
  }
}
