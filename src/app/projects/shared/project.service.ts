import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from './project';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class ProjectService {

  projects: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.projects = db.list('/projects');
  }

  addProject(newTitle: string) {
    this.projects.push({ title: {value :newTitle} });
  }

  deleteAll() {
    this.projects.remove();
  }

  delete(key) {
    this.projects.remove(key);
  }

  update(key, target, value) {
    key += '/' + target;
    let test = this.projects.update(key, {value});
  }

}
