import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../shared/services/school.service';
import { SubjectService } from '../../shared/services/subject.service';
import { StudentClassService } from '../../shared/services/student-class.service';
import { ChapterService } from '../../shared/services/chapter.service';
import { Router } from '@angular/router';

import { Subject as StudentSubject } from '../../shared/models/subject.model';
import { School } from '../../shared/models/school.model';
import { StudentClass } from '../../shared/models/studentClass.model';
import { FormControl } from '@angular/forms';
import { Test } from '../../shared/models/test.model';
import { TestService } from '../../shared/services/test.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  schoolsList: School[];
  studentsClassesList: StudentClass[];
  subjectsList: StudentSubject[];

  // Form Controls
  selectedSchoolEMIS = new FormControl('');
  selectedClassName = new FormControl('');
  selectedSubjectName = new FormControl('');
  selectedChapterName = new FormControl('');
  selectedChapterSectionsName = new FormControl('');
  testNumber = new FormControl('');
  noOfQuestions = new FormControl('');
  totalTime = new FormControl('');
  creationTime = new FormControl('');


  constructor(
    public schoolService: SchoolService,
    public subjectService: SubjectService,
    public studentsClassService: StudentClassService,
    public chapterService: ChapterService,
    public testService: TestService,
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

  insertTest(test: Test) {
    test.schoolEMIS = this.selectedSchoolEMIS.value;
    test.studentClassName = this.selectedClassName.value;
    test.studentSubjectName = this.selectedSubjectName.value;
    test.chapterName = this.selectedChapterName.value;
    test.chapterSections = this.selectedChapterSectionsName.value;
    test.testNumber = this.testNumber.value;
    test.noOfQuestions = this.noOfQuestions.value;
    test.totalTime = this.totalTime.value;
    test.creationTime = this.creationTime.value;

    this.testService.insertTest(test);
  }

}
