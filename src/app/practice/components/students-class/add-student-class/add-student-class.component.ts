import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../../shared/services/school.service';
import { StudentClassService } from '../../../shared/services/student-class.service';
import { School } from '../../../shared/models/school.model';
import { StudentClass } from '../../../shared/models/studentClass.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student-class',
  templateUrl: './add-student-class.component.html',
  styleUrls: ['./add-student-class.component.css']
})
export class AddStudentClassComponent implements OnInit {

  schoolsList: School[];
  selectedSchoolEMIS: string;
  studentsClassesList: StudentClass[];

  constructor(
    public schoolService: SchoolService,
    public studentClassService: StudentClassService,
    public router: Router
  ) { }

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

  }

  insertStudentClass(studentsClassForm: NgForm) {
    this.studentClassService.insertStudentClass(studentsClassForm.value, this.selectedSchoolEMIS);
    this.router.navigate(['/classes-list-for-students']);
  }
}