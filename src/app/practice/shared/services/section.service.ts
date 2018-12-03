import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Section } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  public selectedSectionName: string;

  constructor(private firebase: AngularFireDatabase) { }

  getSectionsList(selectedSchoolEMIS: string, studentClassName: string, selectedSubjectName: string, selectedChapterName: string) {
    return this.firebase.list(`schools/${selectedSchoolEMIS}/studentClasses/${studentClassName}/Subjects/${selectedSubjectName}/chapters/${selectedChapterName}/sections`);
  }

  insertSection(section: Section){
    this.firebase.database.ref(`schools/${section.schoolEMIS}/studentClasses/${section.studentClassName}/Subjects/${section.studentSubjectName}/chapters/${section.chapterName}/sections/${section.name}`).set({
      name: section.name,
      serialNumber: section.serialNumber
    });
  }
}