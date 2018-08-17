import { Component, OnInit } from '@angular/core';
import { School } from '../../../shared/models/school.model';
import { SchoolService } from '../../../shared/services/school.service';
import { FirebaseDatabase } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})

export class SchoolsListComponent implements OnInit {

  schoolsList: School[];
  displayedColumns: string[] = ['name', 'EMIS', 'tehsil', 'action'];

  constructor(
    public schoolService: SchoolService,
    public db: AngularFireDatabase,
    public router: Router
  ) { }

  ngOnInit() {
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
      this.schoolService.selectedSchool = new School();
  }

  onDetail(school: School){
    this.schoolService.selectedSchool = Object.assign({}, school);
    this.router.navigate(['/school-detail']);
  }

  onEdit(school: School) {
    this.schoolService.selectedSchool = Object.assign({}, school);
    this.router.navigate(['/add-school']);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.schoolService.deleteSchool(key);
    }
  }
}