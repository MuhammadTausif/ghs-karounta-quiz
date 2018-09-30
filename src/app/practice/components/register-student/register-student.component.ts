import { Component, OnInit } from '@angular/core';
import { RegisterStudentService } from '../../shared/services/register-student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor( private registerStudentService: RegisterStudentService) { }

  ngOnInit() {
  }

  registerStudent(email: string, password: string){
    this.registerStudentService.registerStudent(email, password);
  }

}
