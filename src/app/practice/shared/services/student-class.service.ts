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
  selectedStudentClassKey: string;
  selectedSchool: School = new School();

  constructor(private firebase: AngularFireDatabase) {
    this.getStudentsClassesList("37230015");
  }

  getData() {
    this.selectedSchool.$key = '-LJE4oEmVj4tgP5aaDyG';
    this.studentsClassesList = this.firebase.list(`schools/-LJE4oEmVj4tgP5aaDyG/studentClasses`);
    // this.studentsClassesList = this.firebase.list(`schools/${this.selectedSchool.$key}/studentClasses`)
    return this.studentsClassesList;
  }

  insertStudentClass(studentClass: StudentClass, selectedSchoolEMIS: string) {
    this.firebase.database.ref(`schools/${selectedSchoolEMIS}/studentClasses/${studentClass.name}`).set({
      incharge: studentClass.incharge,
      session: studentClass.session
    });
  }

  getStudentsClassesList(selectedSchoolEMIS: string): AngularFireList<any> {
    this.studentsClassesList = this.firebase.list(`schools/${selectedSchoolEMIS}/studentClasses`);
    return this.studentsClassesList;
  }

  updateStudentClass(studentClass: StudentClass) {
    this.studentsClassesList.update(
      studentClass.$key,
      {
        name: studentClass.name,
        incharge: studentClass.incharge,
        clssRoom: studentClass.clssRoom,
        session: studentClass.session
      }
    );
  }

  deleteStudentClass($key: string) {
    this.studentsClassesList.remove($key);
  }
}
