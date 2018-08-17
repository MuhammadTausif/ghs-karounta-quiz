import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-list-for-tests',
  templateUrl: './classes-list-for-tests.component.html',
  styleUrls: ['./classes-list-for-tests.component.css']
})
export class ClassesListForTestsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['number', 'name', 'tests', 'action'];
  dataSource = CLASSES_LIST_FOR_TESTS;

  ngOnInit() {
  }

}

export interface ClassesInterfaceForTestsList {
  number: number;
  name: string;
  tests: number;
  action: number;
}

const CLASSES_LIST_FOR_TESTS: ClassesInterfaceForTestsList[] = [
  { number: 1, name: "Nursery", tests: 10, action: 1},
  { number: 2, name: "One", tests: 12, action: 1},
  { number: 3, name: "Two", tests: 11, action: 1},
  { number: 4, name: "Three", tests: 20, action: 1},
  { number: 5, name: "Forth", tests: 32, action: 1},
  { number: 6, name: "Fifth", tests: 10, action: 1},
  { number: 7, name: "Sixth", tests: 20, action: 1},
  { number: 8, name: "Seventh", tests: 12, action: 1},
  { number: 9, name: "Eigth", tests: 23, action: 1},
  { number: 10, name: "Ninth", tests: 32, action: 1},
  { number: 11, name: "Tenth", tests: 18, action: 1}
];