import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Question } from '../models/question.model';
import { Student } from '../models/student.model';
import { Result } from '../models/result.model';

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

  startQuiz(
    result: Result,
  ) {
    this.firebase.database.ref(
      `schools/${result.schoolEMIS}/studentClasses/${result.studentClassName}/Students/${result.studentRollNo}/Subjects/${result.studentSubjectName}/results/${result.startDateTime}`
    ).set({
      chapter: result.chapter,
      section: result.section,
      dateAndTime: result.startDateTime
    });
  }
  
  submitUniqueAnswer(
    studentRollNo: string,
    question: Question,
    option: string,
    startDateTime: string
  ) {
    this.firebase.database.ref(
      `schools/${question.schoolEMIS}/studentClasses/${question.studentClassName}/Students/${studentRollNo}/Subjects/${question.studentSubjectName}/results/${startDateTime}/answers`
    ).push({
      chapters: question.chapterName,
      sections: question.sectionName,
      questionKey: question.$key,
      answeredOption: option,
      questionText: question.questionName
    });
  }

}
