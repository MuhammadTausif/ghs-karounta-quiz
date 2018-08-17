import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../../shared/services/school.service';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

  constructor(public schoolService: SchoolService) { }

  ngOnInit() {
  }

}
