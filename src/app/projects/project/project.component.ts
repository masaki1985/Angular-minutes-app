import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { Project } from "app/projects/shared/project";
import { ProjectService } from "app/projects/shared/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.projectService.getProject(id)
                         .subscribe(project => this.project = project)
    })
  }

}
