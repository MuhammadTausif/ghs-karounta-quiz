import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../shared/services/subject.service';
import { StudentClassService } from '../../shared/services/student-class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects-list-for-tests',
  templateUrl: './subjects-list-for-tests.component.html',
  styleUrls: ['./subjects-list-for-tests.component.css']
})
export class SubjectsListForTestsComponent implements OnInit {

  constructor(
    private subjectService: SubjectService,
    private studentClassService: StudentClassService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['number', 'name', 'tests', 'action'];
  dataSource = SUBJECTS_LIST_FOR_TESTS;

}

export interface SubjectInterfaceForTestsList {
  number: number;
  name: string;
  tests: number;
  action: number;
}

const SUBJECTS_LIST_FOR_TESTS: SubjectInterfaceForTestsList[] = [
  { number: 1, name: "Urdu", tests: 10, action: 1},
  { number: 2, name: "English", tests: 12, action: 1},
  { number: 3, name: "Islamiat", tests: 11, action: 1},
  { number: 4, name: "Math", tests: 20, action: 1},
  { number: 5, name: "Science", tests: 32, action: 1},
];