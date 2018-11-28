import { Component, OnInit } from '@angular/core';
import { StudentClassService } from 'src/app/practice/shared/services/student-class.service';
import { StudentClass } from 'src/app/practice/shared/models/studentClass.model';
import { SchoolService } from 'src/app/practice/shared/services/school.service';
import { School } from 'src/app/practice/shared/models/school.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-classes-list',
  templateUrl: './students-classes-list.component.html',
  styleUrls: ['./students-classes-list.component.css']
})
export class StudentsClassesListComponent implements OnInit {

  studentClassesList: StudentClass[];
  displayedStudentsClassesColumns: string[] = ['name', 'incharge', 'session', 'students', 'subjects', 'tests', 'action'];

  constructor(
    private studentClassService: StudentClassService,
    private router: Router
  ) { }

  ngOnInit() {
    var x = this.studentClassService.getStudentsClassesList("37230015");
    x.snapshotChanges().subscribe(
      item => {
        this.studentClassesList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.studentClassesList.push(y as StudentClass);        
        });
        console.log(this.studentClassesList);
      });
  }
}