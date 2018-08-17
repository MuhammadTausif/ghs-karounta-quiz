import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../../shared/services/school.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  constructor(public schoolService: SchoolService, private router: Router) { }

  submitAction: string;

  ngOnInit() {
    if (this.schoolService.selectedSchool.$key == null)
      this.submitAction = 'Add New';
    else
      this.submitAction = 'Update';
    // this.submitAction = 'Malinged';
    this.resetSchoolForm();
  }

  onSubmit(schoolForm: NgForm) {
    if (schoolForm.value.$key == null)
      this.schoolService.insertSchool(schoolForm.value);
    else
      this.schoolService.updateSchool(schoolForm.value);
    this.resetSchoolForm(schoolForm);
    this.router.navigate(['/schools-list']);
  }

  resetSchoolForm(schoolForm?: NgForm) {
    if (this.schoolService.selectedSchool.$key == null) {
      if (schoolForm != null)
        schoolForm.reset();
      this.schoolService.selectedSchool = {
        $key: null,
        name: '',
        EMIS: 0,
        tehsil: '',
        district: '',
        postOffice: ''
      }
      if (this.schoolService.selectedSchool.$key != null)
        alert('edit');
    }
  }
}