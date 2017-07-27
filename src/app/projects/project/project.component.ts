import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { ProjectService } from "app/projects/shared/project.service";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;
  selected: string;
  readonly: boolean = true;
  hidden: boolean = false;
  checked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    db: AngularFireDatabase) {
      this.projects = db.list('/projects');
  }

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

  //TO DO
  //大項目を更新
  updateItem(project, target, value) {
    if(!value) { return; }
    let data: any[];
    if(project.items) {
      data = project.items.value;
      data.push(value);
    }
    else {
      data = [value];
    }
    this.projectService.update(project.$key, target, data);
  }

  //TO DO
  //参加者を更新
  updateMember(project, target, value) {
    if(!value) { return; }
    let data: any[];
    if(project.members) {
      data = project.members.value;
      data.push(value);
    }
    else {
      data = [value];
    }
    this.projectService.update(project.$key, target, data);
  }

  //TO DO
  //参加者を削除
  deleteMembers(project) {
    let key = project.$key + '/members';
    this.projectService.delete(key);
  }

  testShow() {
    this.hidden = false;
    this.checked = false;
  }

  testHidden() {
    this.hidden = true;
    this.checked = true;
  }

  testConsole() {
    console.log("test");
  }

}
