import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/practice/shared/services/subject.service';
import { StudentClassService } from 'src/app/practice/shared/services/student-class.service';
import { Router } from '@angular/router';
import { Subject } from 'src/app/practice/shared/models/subject.model';
import { StudentClass } from 'src/app/practice/shared/models/studentClass.model';
import { School } from 'src/app/practice/shared/models/school.model';
import { TestService } from 'src/app/practice/shared/services/test.service';

@Component({
  selector: 'app-subjects-list-in-class',
  templateUrl: './subjects-list-in-class.component.html',
  styleUrls: ['./subjects-list-in-class.component.css']
})
export class SubjectsListInClassComponent implements OnInit {

  public subjectsList: Subject[];
  public studentsClass: StudentClass;
  public studentsClassKey: string;
  public studentsSchool: School;

  displayedColumns: string[] = ['number', 'name', 'chapters','test', 'action'];

  constructor(
    private subjectService: SubjectService,
    private studentClassService: StudentClassService,
    private testService: TestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentsClassKey = this.studentClassService.selectedStudentClassKey;
    var x = this.subjectService.getSubjectsList("37230015", this.studentClassService.selectedStudentClassKey);
    x.snapshotChanges().subscribe(
      item => {
        this.subjectsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.subjectsList.push(y as Subject);
        });
        console.log(this.subjectsList);
      });
  }

  openChaptersList(selectedSubjectName: string){
    this.studentsClassKey = this.studentClassService.selectedStudentClassKey;
    this.subjectService.selectedSubjectName =  selectedSubjectName;
    this.router.navigate(['\chapters-list-of-subjects']);
  }

  activateSubjectTest(selectedSubjectName: string){
    this.testService.activateSubjectTest(
      "37230015",
      this.studentClassService.selectedStudentClassKey,
      selectedSubjectName
      );
  }

}
