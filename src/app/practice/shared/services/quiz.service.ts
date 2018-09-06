import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Question } from '../models/question.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private firebase: AngularFireDatabase) { }

  submitAnswer( studentRollNo: string, question: Question, option: string ){
    this.firebase.database.ref(`schools/${question.schoolEMIS}/studentClasses/${question.studentClassName}/Students/${studentRollNo}/Subjects/${question.studentSubjectName}/chapters/${question.chapterName}/sections/${question.sectionName}/answers/${question.$key}`).set({
      answeredOption: option,
      // questionText: question.questionName
    }); 
  }
}
