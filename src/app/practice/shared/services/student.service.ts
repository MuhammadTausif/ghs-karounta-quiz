import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList: AngularFireList<any>;
  selectedStudent: Student = new Student();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.studentsList = this.firebase.list('students');
    return this.studentsList;
  }

  insertStudent(student: Student) {
    this.studentsList.push({
      name: student.name,
      fatherName: student.fatherName,
      studentClass: student.studentClassKey,
      rollNumber: student.rollNumber,
      phone: student.phone,
      address: student.address
    });
  }

  updateStudent(student: Student){
    this.studentsList.update(student.$key,
      {
        name:  student.name,
        fatherName:  student.fatherName,
        studentClass:  student.studentClassKey,
        rollNumber:  student.rollNumber,
        phone:  student.phone,
        address: student.address    
      }
    );
  }
}
