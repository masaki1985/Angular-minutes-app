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
  readonly: boolean = true;

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
    this.route.params.forEach((params: Params) => {
      this.selected = params.id;
    })
  }

  change() {
    this.readonly = false;
  }

  update(key, target, value) {
    this.projectService.update(key, target, value);
  }

  updateArray(project, target, value) {
    let array: any[];
    if(project.items) {
      array = project.items.value;
      array.push(value);
    }
    else {
      array = [value];
    }
    this.projectService.update(project.$key, target, array);
  }

  // test(key, value) {
  // test(key) {
  //   let value = [
  //     '項目１', '項目２', '項目３'
  //   ];
  //   value.push('項目４');
    
  //   this.projectService.test(key, value);
  // }

  // test2(key, value, project) {
  //   let url = key + '/items';
  //   let items: any[];
  //   if(value) {
  //     items = value
  //     items.push('項目５');
  //   }
  //   else {
  //     items.push = value;
  //   }
  //   this.projectService.test(key, items);
  // }

}
