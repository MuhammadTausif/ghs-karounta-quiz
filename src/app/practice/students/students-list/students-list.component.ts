import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
import { Router } from '@angular/router';
import { Student } from '../../shared/models/student.model';
import { StudentClass } from '../../shared/models/studentClass.model';
import { School } from '../../shared/models/school.model';
import { StudentClassService } from '../../shared/services/student-class.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  public studentsList: Student[];
  public studentsClass: StudentClass;
  public studentsClassKey: string;
  public studentsSchool: School;

  displayedColumns: string[] = ['number', 'name', 'fatherName', 'village', 'result', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(
    private studentService: StudentService,
    private studentClassService: StudentClassService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentsClassKey = this.studentClassService.selectedStudentClassKey;
    var x = this.studentService.getStudentsList("37230015", this.studentClassService.selectedStudentClassKey);
    x.snapshotChanges().subscribe(
      item => {
        this.studentsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.studentsList.push(y as Student);
        });
        // console.log(this.studentsList);
      });
  }

  takeQuiz(selectedStudentKey?: string, selectedStudentName?: string){
    this.studentService.selectedStudentKey = selectedStudentKey;
    this.studentService.selectedStudentName = selectedStudentName;
    this.router.navigate(['/take-quiz']);
  }

  openSubjectForResults(selectedStudentKey?: string, selectedStudentName?: string){
    this.studentService.selectedStudentKey = selectedStudentKey;
    this.studentService.selectedStudentName = selectedStudentName;
    this.router.navigate(['/subjects-list-for-results']);
  }
}

export interface StudentsInterface {
  number: number;
  stdClass: string;
  name: string;
  fatherName: string;
  village: string;
  action: number;
}

const ELEMENT_DATA: StudentsInterface[] = [
  { number: 1, stdClass: "Nur", name: "Aslam", fatherName: "Nusrat", village: "Kot", action: 1 },
  { number: 2, stdClass: "Nur", name: "Akram", fatherName: "Mudasar", village: "Dhamiat", action: 1 },
  { number: 3, stdClass: "Nur", name: "Nasir", fatherName: "Faheem", village: "Kot", action: 1 },
  { number: 4, stdClass: "Nur", name: "Shahid", fatherName: "Khaliq", village: "Karounta", action: 1 },
  { number: 5, stdClass: "Nur", name: "Naseem", fatherName: "Farooq", village: "Sohawa", action: 1 },
];