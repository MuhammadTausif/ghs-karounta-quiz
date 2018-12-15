import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentClassService } from 'src/app/practice/shared/services/student-class.service';
import { StudentService } from 'src/app/practice/shared/services/student.service';
import { StudentClass } from 'src/app/practice/shared/models/studentClass.model';
import { Subject } from 'src/app/practice/shared/models/subject.model';
import { SubjectService } from 'src/app/practice/shared/services/subject.service';
import { TestService } from 'src/app/practice/shared/services/test.service';
import { Test } from 'src/app/practice/shared/models/test.model';
import { Answer } from 'src/app/practice/shared/models/answer.model';
import { Result } from 'src/app/practice/shared/models/result.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  public selectedStudentClassKey: string = this.studentsClassService.selectedStudentClassKey;
  public selectedStudentNumber: string = this.studentService.selectedStudentKey;
  public selectedStudentName: string = this.studentService.selectedStudentName;
  public selectedSubjectName: string = this.subjectService.selectedSubjectName;

  public studentsClass: StudentClass;
  public studentSubjectList: Subject[];
  public subjectResultsList: Result[];

  displayedColumns: string[] = ['number', 'datetime', 'chapters', 'sections', 'result'];

  constructor(
    private studentsClassService: StudentClassService,
    private studentService: StudentService,
    private subjectService: SubjectService,
    private testService: TestService,
    private router: Router,
  ) { }

  ngOnInit() {
    var x = this.testService.getTestsOfSubjectOfStudent(this.selectedStudentClassKey, this.selectedSubjectName, this.selectedStudentNumber);
    x.snapshotChanges().subscribe(
      item => {
        this.subjectResultsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          console.log(y);          
          y["$key"] = element.key;
          this.subjectResultsList.push(y as Result);
        });
        // console.log("Answers: "+this.subjectResultsList);
      });
  }

  openSubjectResults(selectedSubjectName?: string) {
    this.subjectService.selectedSubjectName = selectedSubjectName;
    this.router.navigate(['/tests-result']);
  }

  openAnswersList(resultKey: string){
    this.testService.selectedResultKey = resultKey;
    this.router.navigate(['/answers-list']);
  }
}
