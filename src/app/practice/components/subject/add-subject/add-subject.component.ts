import { Component, OnInit } from '@angular/core';
import { School } from '../../../shared/models/school.model';
import { StudentClass } from '../../../shared/models/studentClass.model';
import { FormControl, NgForm } from '@angular/forms';
import { SchoolService } from '../../../shared/services/school.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { StudentClassService } from '../../../shared/services/student-class.service';
import { Router } from '@angular/router';
import { Subject as StudentSubject } from '../../../shared/models/subject.model';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {


  schoolsList: School[];
  studentsClassesList: StudentClass[];

  // Form Controls
  name = new FormControl('');
  subjectClass = new FormControl('');
  selectedSchoolEMIS = new FormControl('');
  selectedSubjectClassName = new FormControl('');


  constructor(
    public schoolService: SchoolService,
    public subjectService: SubjectService,
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
  
  insertSubject(studentForm?: NgForm) {
    var studentSubject: StudentSubject = new StudentSubject();

    studentSubject.studentClassKey= this.selectedSubjectClassName.value;
    studentSubject.name = this.name.value;
    
    this.subjectService.insertSubject(studentSubject, this.selectedSchoolEMIS.value);
  }

}
