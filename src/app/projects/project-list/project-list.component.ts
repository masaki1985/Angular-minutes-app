import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

import { Project } from "app/projects/shared/project";
import { ProjectService } from "app/projects/shared/project.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  // projects: Project[];
  projects: FirebaseListObservable<any[]>;
  
  constructor(
    private router: Router,
    private projectService: ProjectService,
    db: AngularFireDatabase) {
      this.projects = db.list('/projects');
  }

  // ngOnInit() {
  //   this.getProjects();
  // }
  
  // getProjects() {
  //   this.projectService.getProjects()
  //                      .subscribe(projects => this.projects = projects);
  // }

  addProject(newName: string) {
    // this.projects.push({ title: newName });
    this.projectService.addProject(newName);
  }

  gotoDetail(key: string) {
    this.router.navigate(['/projects', key]);
  }

  deleteAll() {
    // this.projects.remove();
    this.projectService.deleteAll();
  }
}
