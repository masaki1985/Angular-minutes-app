import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '議事録一覧';

  item: FirebaseObjectObservable<any[]>;

  constructor(private router: Router, db: AngularFireDatabase){
    this.item = db.object('/item');
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
  
}
