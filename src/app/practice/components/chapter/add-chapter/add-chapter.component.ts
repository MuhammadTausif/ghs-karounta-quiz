import { Component, OnInit } from '@angular/core';
import { School } from '../../../shared/models/school.model';
import { StudentClass } from '../../../shared/models/studentClass.model';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { SchoolService } from '../../../shared/services/school.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { StudentClassService } from '../../../shared/services/student-class.service';
import { Router } from '@angular/router';
import { Subject as StudentSubject } from '../../../shared/models/subject.model';
import { Chapter } from '../../../shared/models/chapter.model';
import { ChapterService } from '../../../shared/services/chapter.service';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {

  schoolsList: School[];
  studentsClassesList: StudentClass[];
  subjectsList: StudentSubject[];

  selectedStudentClassKey = this.studentsClassService.selectedStudentClassKey;
  selectedSubject = this.subjectService.selectedSubjectName;

  // Form Controls
  name = new FormControl('');
  selectedSchoolEMIS = new FormControl('');
  selectedClassName = new FormControl('');
  selectedSubjectName = new FormControl('');

  constructor(
    public schoolService: SchoolService,
    public subjectService: SubjectService,
    public studentsClassService: StudentClassService,
    public chapterService: ChapterService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.getSchoolsList();
    this.getStudentsClassesList();
    // this.getSubjectListOfClass();
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

  insertChapter(){
    this.chapterService.insertChapter(this.name.value, this.selectedSubject, this.selectedStudentClassKey, "37230015");
    this.router.navigate(['/chapters-list-of-subjects']);
  }

}