import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from './project';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class ProjectService {

  //in-memory-web-api
  // private projectsUrl = '/api/projects';
  // constructor(private http: Http) { }
  // getProjects(): Observable<Project[]> {
  //   return this.http.get(this.projectsUrl)
  //                   .map(res => res.json().data as Project[])
  // }
  // getProject(id: number): Observable<Project> {
  //   const url = `${this.projectsUrl}/${id}`;
  //   return this.http.get(url)
  //                   .map(res => res.json().data as Project);
  // }

  projects: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.projects = db.list('/projects');
  }

  addProject(newName: string) {
    this.projects.push({ title: newName });
  }

  deleteAll() {
    this.projects.remove();
  }

  update(key, target, value) {
    key += '/' + target;
    this.projects.update(key, {value});    
  }




  // test(key: string, value: string[]) {
  //   this.projects.update(key, {items: value});
  // }

  // test2(key, value) {
  //   this.projects.update(key, {items: value});
  // }

}
