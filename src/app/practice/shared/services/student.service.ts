import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList: AngularFireList<any>;
  selectedStudent: Student = new Student();
  selectedClassName: string;
  selectedSchoolEMIS: string;

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.studentsList = this.firebase.list('students');
    return this.studentsList;
  }

  getStudentsList(selectedSchoolEMIS: string, studentClassName: string ){
    this.studentsList = this.firebase.list(`schools/${selectedSchoolEMIS}/studentClasses/${studentClassName}/Students`);
    return this.studentsList;
    // return this.firebase.list(`schools/${selectedSchoolEMIS}/studentClasses/${studentClassName}/subjects`);
  }


  insertStudent(student: Student, selectedSchoolEMIS: string) {
    this.firebase.database.ref(`schools/37230015/studentClasses/${student.studentClassKey}/Students/${student.rollNumber}`).set({
      name: student.name,
      fatherName: student.fatherName,
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
