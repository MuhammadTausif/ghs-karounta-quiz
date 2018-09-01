import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../shared/models/chapter.model';
import { School } from '../../../shared/models/school.model';
import { StudentClass } from '../../../shared/models/studentClass.model';
import { Subject as StudentSubject } from '../../../shared/models/subject.model';
import { FormControl } from '@angular/forms';
import { SchoolService } from '../../../shared/services/school.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { StudentClassService } from '../../../shared/services/student-class.service';
import { ChapterService } from '../../../shared/services/chapter.service';
import { Router } from '@angular/router';
import { SectionService } from '../../../shared/services/section.service';
import { Section } from '../../../shared/models/section.model';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {

  schoolsList: School[];
  studentsClassesList: StudentClass[];
  subjectsList: StudentSubject[];
  chaptersList: Chapter[];
  section: Section;

  // Form Controls
  name = new FormControl('');
  serialNumber = new FormControl('');
  selectedSchoolEMIS = new FormControl('');
  selectedClassName = new FormControl('');
  selectedSubjectName = new FormControl('');
  selectedChapterName = new FormControl('');


  constructor(
    public schoolService: SchoolService,
    public subjectService: SubjectService,
    public studentsClassService: StudentClassService,
    public chapterService: ChapterService,
    public sectionService: SectionService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.getSchoolsList();
  }

  // Getting schools list
  getSchoolsList() {
    var x = this.schoolService.getData();
    x.snapshotChanges().subscribe(
      item => {
        this.schoolsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.schoolsList.push(y as School);
        });
      });
  }

  // Getting students classes list
  getStudentsClassesList(selectedSchoolEMIS?: string) {
    var x = this.studentsClassService.getStudentsClassesList(selectedSchoolEMIS);
    x.snapshotChanges().subscribe(
      item => {
        this.studentsClassesList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.studentsClassesList.push(y as StudentClass);
        });
      });
  }

  // Getting subjects list
  getSubjectsList(selectedSchoolEMIS?: string, studentClassName?: string) {
    var x = this.subjectService.getSubjectsList(selectedSchoolEMIS, studentClassName);
    x.snapshotChanges().subscribe(
      item => {
        this.subjectsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.subjectsList.push(y as StudentSubject);
        });
      });
  }

  // Getting subjects list
  getChaptersList(selectedSchoolEMIS?: string, studentClassName?: string, selectedSubjectName?: string) {
    var x = this.chapterService.getChaptersList(selectedSchoolEMIS, studentClassName, selectedSubjectName);
    x.snapshotChanges().subscribe(
      item => {
        this.chaptersList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.chaptersList.push(y as Chapter);
        });
      });
  }

  insertSection(){
    this.section = new Section();
    this.section.serialNumber= this.serialNumber.value;
    this.section.name= this.name.value;
    this.section.schoolEMIS= this.selectedSchoolEMIS.value;
    this.section.studentClassName= this.selectedClassName.value;
    this.section.studentSubjectName = this.selectedSubjectName.value;
    this.section.chapterName= this.selectedChapterName.value;

    this.sectionService.insertSection(this.section);
  }
}
