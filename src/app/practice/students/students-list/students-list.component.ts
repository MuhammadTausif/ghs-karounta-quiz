import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['number', 'name', 'fatherName', 'village','action'];
  dataSource = ELEMENT_DATA;

}

export interface StudentsInterface {
  number: number;
  stdClass: string;
  name: string;
  fatherName: string;
  village: string;
  action: number;
}

const ELEMENT_DATA: StudentsInterface[] = [
  { number: 1, stdClass: "Nur", name: "Aslam",  fatherName: "Nusrat",  village: "Kot", action: 1},
  { number: 2, stdClass: "Nur", name: "Akram",  fatherName: "Mudasar",  village: "Dhamiat", action: 1},
  { number: 3, stdClass: "Nur", name: "Nasir",  fatherName: "Faheem",  village: "Kot", action: 1},
  { number: 4, stdClass: "Nur", name: "Shahid",  fatherName: "Khaliq",  village: "Karounta", action: 1},
  { number: 5, stdClass: "Nur", name: "Naseem",  fatherName: "Farooq",  village: "Sohawa", action: 1},

];