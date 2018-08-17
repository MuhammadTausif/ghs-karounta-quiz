import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface Teachers {
  name: string;
  position: string;
  classIncharge: string;
  action: number
}

const TEACHERS_DATA: Teachers[] = [
  {position: "HM/SSE(CS)", name: 'Muhammad Tausif', classIncharge: 'HM', action: 0},
  {position:  "SSE(Bio)", name: 'Khalil Nawaz', classIncharge: '10th', action: 0},
  {position:  "SSE(Math)", name: 'Muhammad Jawad', classIncharge: '9th', action: 0},
  {position:  "EST(G)", name: 'Fahad Aziz', classIncharge: 'Nil', action: 0},
  {position:  "EST(DM)", name: 'Asif Kiani', classIncharge: '7th', action: 0},
  {position:  "EST(G)", name: 'Saeed Akhtar', classIncharge: '8th', action: 0},
  {position:  "SESE(Arabic)", name: 'Muzzamil Hussain', classIncharge: 'Nil', action: 0},
  {position:  "SESE(Science)", name: 'Afifa Kiran', classIncharge: '6th', action: 0},
  {position:  "SESE(Science)", name: 'Adeel Ashraf', classIncharge: 'Nil', action: 0},
  {position:  "PST", name: 'Mobeen Kiani', classIncharge: '5th, 4rth, 3rd', action: 0},
  {position:  "ESE(Arts)", name: 'Ehsan Ul Haq', classIncharge: '2nd, 1st, Nur', action: 0},
];

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['position', 'name', 'classIncharge', 'action'];
  teachersDataSource = new MatTableDataSource(TEACHERS_DATA);

  applyFilter(filterValue: string) {
    this.teachersDataSource.filter = filterValue.trim().toLowerCase();
  }

}
