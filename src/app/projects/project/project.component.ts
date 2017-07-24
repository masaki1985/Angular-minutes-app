import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { Project } from "app/projects/shared/project";
import { ProjectService } from "app/projects/shared/project.service";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // project: Project;
  projects: FirebaseListObservable<any[]>;
  selected: string;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    db: AngularFireDatabase) {
      this.projects = db.list('/projects');
  }

  // ngOnInit() {
  //   this.route.params.forEach((params: Params) => {
  //     let id = +params['id'];
  //     this.projectService.getProject(id)
  //                        .subscribe(project => {
  //                          project.date = new Date(project.date);
  //                          this.project = project;})
  //   })
  // }

  ngOnInit() {
    console.log(this.projects);
    this.route.params.forEach((params: Params) => {
      console.log(params);
      this.selected = params.id;
    })
  }

}
