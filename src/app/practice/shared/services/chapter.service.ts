import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  selectedChapterName: string;

  constructor(private firebase: AngularFireDatabase) { }

  getChaptersList(selectedSchoolEMIS: string, studentClassName: string, selectedSubjectName: string) {
    return this.firebase.list(`schools/${selectedSchoolEMIS}/studentClasses/${studentClassName}/Subjects/${selectedSubjectName}/chapters`);
  }

  insertChapter(chapterName: string, studentSubjectName: string, selectedClassName: string, selectedSchoolEMIS: string) {
    this.firebase.database.ref(`schools/${selectedSchoolEMIS}/studentClasses/${selectedClassName}/Subjects/${studentSubjectName}/chapters/${chapterName}`).set({
      name: chapterName
    });
  }
}
