import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  classes: string[] = [
   'None', 'Nursery', '1st', '2nd', '3rd', '4rth', '5th', '6th', '7th', '8th', '9th', '10th'
  ];

  designations: string[] = ['HM', 'SSE(CS)', 'SSE(Bio)', 'SSE(Math)', 'SSE(Eng)', 'EST(G)', 'SESE(Arabic)', 'SESE(Math)', 'SESE(Scince)', 'EST(DM)', 'ESE(Arts)', 'ESE(Sci-Math)', 'PST']
}
