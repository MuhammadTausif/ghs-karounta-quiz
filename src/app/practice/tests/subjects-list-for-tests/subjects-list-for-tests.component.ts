import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects-list-for-tests',
  templateUrl: './subjects-list-for-tests.component.html',
  styleUrls: ['./subjects-list-for-tests.component.css']
})
export class SubjectsListForTestsComponent implements OnInit {

  constructor() { }

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