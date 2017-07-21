import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Project } from "app/projects/shared/project";
import { ProjectService } from "app/projects/shared/project.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(
    private router: Router,
    private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects()
                       .subscribe(projects => this.projects = projects);
  }

  gotoDetail(project: Project) {
    this.router.navigate(['/projects', project.id]);
  }

}
