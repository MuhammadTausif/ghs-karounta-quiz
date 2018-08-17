import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { StudentClass } from '../models/studentClass.model';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class StudentClassService {

  studentsClassesList: AngularFireList<any>;
  selectedStudentClass: StudentClass = new StudentClass();
  selectedSchool: School = new School();


  constructor(private firebase: AngularFireDatabase) {

  }

  getData() {
    this.selectedSchool.$key = "-LJE4oEmVj4tgP5aaDyG";
    this.studentsClassesList = this.firebase.list(`schools/-LJE4oEmVj4tgP5aaDyG/studentClasses`);
    // this.studentsClassesList = this.firebase.list(`schools/${this.selectedSchool.$key}/studentClasses`)    
    return this.studentsClassesList;
  }

  insertStudentClass(studentClass: StudentClass) {

    this.firebase.database.ref().child(`schools/-LJE4oEmVj4tgP5aaDyG/studentClasses/class2`).set('second value');

    // this.firebase.database.ref().child(`schools/-LJE4oEmVj4tgP5aaDyG/studentClasses`).set(studentClass);

    // this.studentsClassesList.push({
    //   // $key: studentClass.$key,
    //   name: studentClass.name,
    //   // incharge: studentClass.inchargeID,
    //   // clssRoom: studentClass.clssRoomID,
    //   session: studentClass.session
    // });
  }

  updateStudentClass(studentClass: StudentClass) {
    this.studentsClassesList.update(
      studentClass.$key,
      {
        name: studentClass.name,
        incharge: studentClass.inchargeID,
        clssRoom: studentClass.clssRoomID,
        session: studentClass.session
      }
    );
  }

  deleteStudentClass($key: string) {
    this.studentsClassesList.remove($key);
  }

}
