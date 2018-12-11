import { Injectable } from '@angular/core';
import { Test } from '../models/test.model';
import { FirebaseDatabase } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private firebase: AngularFireDatabase) { }

  insertTest(test: Test) {
    this.firebase.database.ref(`schools/${test.schoolEMIS}/studentClasses/${test.studentClassName}/Subjects/${test.studentSubjectName}/chapters/${test.chapterName}/tests`).push({
      noOfQuestion: test.noOfQuestions,
      totalTime: test.totalTime,
      creationTime: test.creationTime,
      chapterSection: test.chapterSections
    });
  }

  activateTest(classRef: string, activeTestRef: string) {
    this.firebase.database.ref(classRef).set({
      activeTestReference: activeTestRef
    });
  }

  activateTestDetail(
    selectedSchoolKey?: string,
    selectedStudentClassKey?: string,
    selectedSubject?: string,
    selectedChapter?: string,
    selectedSection?: string
  ) {
    this.firebase.database.ref(
      "schools/"+selectedSchoolKey+
      "/studentClasses/"+ selectedStudentClassKey +
      "/tests/activeTest"
      ).set({
        schoolEMIS: selectedSchoolKey,
        studentClassName: selectedStudentClassKey,
        studentSubjectName: selectedSubject,
        chapterName: selectedChapter,
        section: selectedSection
    });
  }

  getActiveTestKey(className: string) {
    return this.firebase.list("schools/37230015/studentClasses/" + className + "/tests");
  }

}
