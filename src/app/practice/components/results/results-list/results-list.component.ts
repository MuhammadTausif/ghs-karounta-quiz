import { Component, OnInit } from '@angular/core';
import { StudentClassService } from 'src/app/practice/shared/services/student-class.service';
import { StudentService } from 'src/app/practice/shared/services/student.service';
import { StudentClass } from 'src/app/practice/shared/models/studentClass.model';
import { Subject } from 'src/app/practice/shared/models/subject.model';
import { SubjectService } from 'src/app/practice/shared/services/subject.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  public selectedStudentClassKey: string = this.studentsClassService.selectedStudentClassKey;
  public selectedStudentNumber: string = this.studentService.selectedStudentKey;
  public selectedStudentName: string = this.studentService.selectedStudentName;

  public studentsClass: StudentClass;
  public studentSubjectList: Subject[];

  displayedColumns: string[] = ['number', 'name', 'result', 'action'];

  constructor(
    private studentsClassService: StudentClassService,
    private studentService: StudentService,
    private subjectService: SubjectService,
  ) { }

  ngOnInit() {
    var x = this.subjectService.getSubjectsListofStudent("37230015", this.selectedStudentClassKey, this.selectedStudentNumber);
    x.snapshotChanges().subscribe(
      item => {
        this.studentSubjectList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.studentSubjectList.push(y as Subject);
        });
        // console.log(this.studentsList);
      });
  }
}
