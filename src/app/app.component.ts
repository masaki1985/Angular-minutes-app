import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '議事録一覧';

  item: FirebaseObjectObservable<any[]>;
  items: FirebaseListObservable<any[]>;

  constructor(private router: Router, db: AngularFireDatabase){
    this.item = db.object('/item');
    // this.item = db.object('https://angularapp-bc6f0.firebaseio.com/item');
    this.items = db.list('/items');
    // this.items = db.list('https://angularapp-bc6f0.firebaseio.com/item');
  }

  gotoProjects() {
    this.router.navigateByUrl('/projects');
  }

  save(newName: string) {
    this.item.set({name: newName});   
  }
  update(newSize: string) {
    this.item.update({size: newSize});
  }
  delete() {
    this.item.remove();
  }

  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }
  
}
