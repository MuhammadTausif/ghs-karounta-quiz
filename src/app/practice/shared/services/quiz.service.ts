import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Question } from '../models/question.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private firebase: AngularFireDatabase) { }

  submitAnswer(
    studentRollNo: string,
    question: Question,
    option: string,
    startDateTime: string
  ) {
    this.firebase.database.ref(
      `schools/${question.schoolEMIS}/studentClasses/${question.studentClassName}/Students/${studentRollNo}/Subjects/${question.studentSubjectName}/chapters/${question.chapterName}/sections/${question.sectionName}/answers/${startDateTime}/${question.$key}`
    ).set({
      answeredOption: option,
      questionText: question.questionName
    });
  }

  submitUniqueAnswer(
    studentRollNo: string,
    question: Question,
    option: string,
    startDateTime: string
  ) {
    this.firebase.database.ref(
      `schools/${question.schoolEMIS}/studentClasses/${question.studentClassName}/Students/${studentRollNo}/Subjects/${question.studentSubjectName}/answers/${startDateTime}`
    ).push({
      chapters: question.chapterName,
      sections: question.sectionName,
      questionKey: question.$key,
      answeredOption: option,
      questionText: question.questionName
    });
  }

}
