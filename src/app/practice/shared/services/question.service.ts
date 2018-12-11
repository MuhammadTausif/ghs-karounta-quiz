import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  tempListA: AngularFireList<Question>;

  constructor(private firebase: AngularFireDatabase) { }

  getQuestionsList(selectedSchoolEMIS: string, studentClassName: string, selectedSubjectName: string, selectedChapterName: string, selectedSectionName: string) {
    this.tempListA = this.firebase.list(`schools/${selectedSchoolEMIS}/studentClasses/${studentClassName}/Subjects/${selectedSubjectName}/chapters/${selectedChapterName}/sections/${selectedSectionName}/questions`);
    return this.tempListA;
  }

  insertQuestion(question: Question) {
    this.firebase.database.ref(`schools/${question.schoolEMIS}/studentClasses/${question.studentClassName}/Subjects/${question.studentSubjectName}/chapters/${question.chapterName}/sections/${question.sectionName}/questions/${question.$key}`).set({
      questionName: question.questionName,
      optionA: question.optionA,
      optionB: question.optionB,
      optionC: question.optionC,
      optionD: question.optionD
    });
  }
}
