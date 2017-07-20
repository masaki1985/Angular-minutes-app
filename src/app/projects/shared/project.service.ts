import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from './project';

@Injectable()
export class ProjectService {

  private projectsUrl = '/api/projects';

  constructor(private http: Http) { }

  getProjects(): Observable<Project[]> {
    return this.http.get(this.projectsUrl)
                    .map(res => res.json().data as Project[]);
  }

}
