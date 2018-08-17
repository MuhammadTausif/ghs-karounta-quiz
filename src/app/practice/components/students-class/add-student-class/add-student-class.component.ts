import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../../shared/services/school.service';
import { StudentClassService } from '../../../shared/services/student-class.service';
import { School } from '../../../shared/models/school.model';
import { StudentClass } from '../../../shared/models/studentClass.model';

@Component({
  selector: 'app-add-student-class',
  templateUrl: './add-student-class.component.html',
  styleUrls: ['./add-student-class.component.css']
})
export class AddStudentClassComponent implements OnInit {

  schoolsList: School[];
  studentsClassesList: StudentClass[];

  constructor(public schoolService: SchoolService, public studentClassService: StudentClassService) { }

  ngOnInit() {
    // Getting school list
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

    // Getting classes list
    var z = this.studentClassService.getData();
    z.snapshotChanges().subscribe(
      item => {
        this.studentsClassesList = [];
        item.forEach(element => {
          var w = element.payload.toJSON();
          w["$key"] = element.key;
          this.studentsClassesList.push(w as StudentClass)
        })
      }
    );

    // this.addStudentClass();
  }

  addStudentClass(){
   var tempStudentClass: StudentClass = new StudentClass();

   tempStudentClass.$key="Class5";
   tempStudentClass.name="Class 3";
   tempStudentClass.session="2018";

    this.studentClassService.insertStudentClass(tempStudentClass);
  }
}