import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class ProjectService {

  projects: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.projects = db.list('/projects');
  }

  addProject(newTitle: string) {
    this.projects.push({ title: newTitle });
  }

  deleteAll() {
    this.projects.remove();
  }

  delete(key) {
    this.projects.remove(key);
  }

  update(key, target, value) {
    let test = this.projects.update(key, {[target]: value});
  }

}
