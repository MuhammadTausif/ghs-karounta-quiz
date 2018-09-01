import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Inject } from '@angular/core';
import { School } from '../../shared/models/school.model';
import { SchoolService } from '../../shared/services/school.service';
import { StudentService } from '../../shared/services/student.service';
import { StudentClassService } from '../../shared/services/student-class.service';
import { StudentClass } from '../../shared/models/studentClass.model';
import { Student } from '../../shared/models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  // selectedSchoolEMIS: string;
  schoolsList: School[];
  studentsClassesList: StudentClass[];

  name = new FormControl('');
  fatherName = new FormControl('');
  address = new FormControl('');
  phone= new FormControl('');
  studentClass = new FormControl('');
  rollNumber = new FormControl('');
  selectedSchoolEMIS = new FormControl('');
  selectedStudentClassName = new FormControl('');

  constructor(
    public schoolService: SchoolService,
    public studentService: StudentService,
    public studentsClassService: StudentClassService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.getSchoolsList();
    this.getStudentsClassesList();
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

  insertStudent(studentForm?: NgForm) {
    var student: Student = new Student();

    student.studentClassKey= this.studentClass.value;
    student.name = this.name.value;
    student.fatherName = this.fatherName.value;
    student.phone = this.phone.value;
    student.address = this.address.value;
    student.rollNumber = this.rollNumber.value;

    this.studentService.insertStudent(student, this.selectedSchoolEMIS.value);
  }

  onSubmit() {  }

  insertStudentReactiveForm(){
    console.warn(this.name.value);
    console.warn(this.fatherName.value);
    console.warn(this.selectedSchoolEMIS.value);
    console.warn(this.selectedStudentClassName.value);
  }
}
