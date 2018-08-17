
import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  // item: Item = new Item();

  constructor(private itemSvc: ItemService) { }

  ngOnInit() {
  }

  createItem() {
    // this.itemSvc.createItem(this.item)
    // this.item = new Item() // reset item
  }

}
