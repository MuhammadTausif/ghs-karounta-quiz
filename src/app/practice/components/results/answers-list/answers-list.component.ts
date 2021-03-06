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
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {

  public selectedStudentClassKey: string = this.studentsClassService.selectedStudentClassKey;
  public selectedStudentNumber: string = this.studentService.selectedStudentKey;
  public selectedStudentName: string = this.studentService.selectedStudentName;
  public selectedSubjectName: string = this.subjectService.selectedSubjectName;
  public selectedResultKey: string = this.testService.selectedResultKey;

  public studentsClass: StudentClass;
  public studentSubjectList: Subject[];
  public subjectResultsList: Result[];
  public testAnswerList: Answer[];

  displayedColumns: string[] = ['number','chapters', 'sections', 'questionNo', 'questionText', 'answer', 'yourAnswer'];

  constructor(
    private studentsClassService: StudentClassService,
    private studentService: StudentService,
    private subjectService: SubjectService,
    private testService: TestService,
    private router: Router,
  ) { }

  ngOnInit() {
    var x = this.testService.getAnswersOfTest(this.selectedStudentClassKey, this.selectedStudentNumber, this.selectedSubjectName, this.selectedResultKey)
    x.snapshotChanges().subscribe(
      item => {
        this.testAnswerList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          console.log(y);          
          y["$key"] = element.key;
          this.testAnswerList.push(y as Answer);
        });
        console.log("Answers: "+this.testAnswerList);
      });
  }

  openSubjectResults(selectedSubjectName?: string) {
    this.subjectService.selectedSubjectName = selectedSubjectName;
    this.router.navigate(['/tests-result']);
  }

  openAnswersList(resultKey: string){
    
    this.router.navigate(['/answers-list']);
  }
}

