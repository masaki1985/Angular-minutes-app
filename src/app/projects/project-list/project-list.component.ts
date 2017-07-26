import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

import { ProjectService } from "app/projects/shared/project.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  projects: FirebaseListObservable<any[]>;
  
  constructor(
    private router: Router,
    private projectService: ProjectService,
    db: AngularFireDatabase) {
      this.projects = db.list('/projects');
  }

  addProject(newName: string) {
    this.projectService.addProject(newName);
  }

  gotoDetail(key: string) {
    this.router.navigate(['/projects', key]);
  }

  deleteAll() {
    this.projectService.deleteAll();
  }
}
