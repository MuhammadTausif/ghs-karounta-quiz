import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-angular6-fire-base2-setup',
  templateUrl: './angular6-fire-base2-setup.component.html',
  styleUrls: ['./angular6-fire-base2-setup.component.css']
})
export class Angular6FireBase2SetupComponent implements OnInit {

  title = 'Angular Firebase Setup';
  description = 'Angular-Firebase Demo';
 
  itemValue = '';
  items: Observable<any[]>;
 
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items-old').valueChanges();
  }
 
  onSubmit() {
    this.db.list('/items-old').push({ content: this.itemValue });
    this.itemValue = '';
  }

  ngOnInit() {
  }

}
