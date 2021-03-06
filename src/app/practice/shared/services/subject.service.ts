import { Injectable } from '@angular/core';
import { Subject as StudentSubject} from '../../shared/models/subject.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  selectedSubjectName: string;

  constructor(private firebase: AngularFireDatabase) { }

  insertSubject(studentSubject: StudentSubject, selectedSchoolEMIS: string){
    this.firebase.database.ref(`schools/${selectedSchoolEMIS}/studentClasses/${studentSubject.studentClassKey}/Subjects/${studentSubject.name}`).set({
      name: studentSubject.name
    });
  }

  getSubjectsList(selectedSchoolEMIS: string, studentClassName: string ){
    return this.firebase.list(`schools/${selectedSchoolEMIS}/studentClasses/${studentClassName}/Subjects`);
  }

  getSubjectsListofStudent(selectedSchoolEMIS: string, studentClassName: string, studentKey: string ){
    return this.firebase.list(`schools/${selectedSchoolEMIS}/studentClasses/${studentClassName}/Students/${studentKey}/Subjects`);
  }

}

