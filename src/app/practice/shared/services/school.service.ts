import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  schoolList: AngularFireList<any>;
  selectedSchool: School = new School();

  constructor(private firebase: AngularFireDatabase) { 
    this.getData()
  }

  getData() {
    this.schoolList = this.firebase.list('schools');
    return this.schoolList;
  }

  insertSchool(school: School) {
    this.firebase.database.ref(`schools/${school.EMIS}`).set({
      name: school.name,
      EMIS: school.EMIS,
      tehsil: school.tehsil,
      district: school.district,
      postOffice: school.postOffice
    });
    // this.schoolList.push({
    //   name: school.name,
    //   EMIS: school.EMIS,
    //   tehsil: school.tehsil,
    //   district: school.district,
    //   postOffice: school.postOffice
    // });
  }

  updateSchool(school: School) {
    this.schoolList.update(
      school.$key,
      {
        name: school.name,
        EMIS: school.EMIS,
        tehsil: school.tehsil,
        district: school.district,
        postOffice: school.postOffice
      });
  }

  deleteSchool($key: string){
    this.schoolList.remove($key);
  }
}