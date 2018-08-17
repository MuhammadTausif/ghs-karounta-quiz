import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  
  @Input() item: Item;

  constructor(private itemSvc: ItemService) { }

  updateTimeStamp() {
    let date = new Date().getTime()
    // this.itemSvc.updateItem(this.item.$key, { timeStamp: date })
  }

  updateActive(value: boolean) {
    // this.itemSvc.updateItem(this.item.$key, { active: value })
  }

  deleteItem() {
    // this.itemSvc.deleteItem(this.item.$key)
  }
  
  ngOnInit() {
  }

}
