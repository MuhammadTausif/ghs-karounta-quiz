import { Injectable } from '@angular/core';
// import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Item } from './item';
// import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private basePath: string = '/items';

  items: AngularFireList<Item[]> = null; //  list of objects
  item: AngularFireObject<Item> = null; //   single object

  constructor(private db: AngularFireDatabase) { }

  getItemsList(query = {}): AngularFireList<Item[]> {
    this.items = this.db.list(this.basePath
      // ,{
      //   query: query
      // }
    );
    return this.items
  }

  // Return a single observable item
  getItem(key: string): AngularFireObject<Item> {
    const itemPath = `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath)
    return this.item
  }

  createItem(item: Item): void {
    // this.items.push({ content: item.active });
    // this.items.push(item);
    // .catch(error => this.handleError(error))
  }

  // Update an existing item
  updateItem(key: string, value: any): void {
    this.items.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteItem(key: string): void {
    this.items.remove(key)
      .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.items.remove()
      .catch(error => this.handleError(error))
  }

  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }
}
