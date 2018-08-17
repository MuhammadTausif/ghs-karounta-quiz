import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['number', 'name', 'students', 'action'];
  dataSource = ELEMENT_DATA;

}

export interface ClassesInterface {
  number: number;
  name: string;
  students: number;
  action: number;
}

const ELEMENT_DATA: ClassesInterface[] = [
  { number: 1, name: "Nursery", students: 10, action: 1},
  { number: 2, name: "One", students: 12, action: 1},
  { number: 3, name: "Two", students: 11, action: 1},
  { number: 4, name: "Three", students: 20, action: 1},
  { number: 5, name: "Forth", students: 32, action: 1},
  { number: 6, name: "Fifth", students: 10, action: 1},
  { number: 7, name: "Sixth", students: 20, action: 1},
  { number: 8, name: "Seventh", students: 12, action: 1},
  { number: 9, name: "Eigth", students: 23, action: 1},
  { number: 10, name: "Ninth", students: 32, action: 1},
  { number: 11, name: "Tenth", students: 18, action: 1}
];