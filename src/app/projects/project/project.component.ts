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

  /**
   * データの更新
   * @param project 更新対象のproject
   * @param target  更新対象のプロパティ
   * @param value   更新する値
   */
  update(project, target, value) {
    if(project[target] === value) {
      return;
    }
    this.projectService.update(project.$key, target, value);
    this.show();
    this.readonly = true;
  }
  
  /**
   * 配列で管理しているデータの追加
   * @param project 追加対象のproject 
   * @param target  追加対象のプロパティ
   * @param value   追加する値
   */
  addData(project, target, value) {
    if(!value) { return; }
    let data = project[target];
    if(data) {
      data = project[target];
      data.push(value);
    }
    else {
      data = [value];
    }
    this.projectService.update(project.$key, target, data);
    this.show();
  }

  updateMember(project, target, index, value) {
    let key = project.$key + '/' + target;
    this.projectService.update(key, index , value)
    this.show();    
  }
  
  updateMajorItem(project, target, value) {
    if(!value) { return; }
    let key = project.$key;
    let data = project.items;
    if(data) {
      data.push({major: value});
    }
    else {
      key += '/' + target;
      target = '0';
      data = {major: value};
    }
    this.projectService.update(key, target, data);
    this.show();    
  }
  
  updateSubItem(project, target, index, value) {
    if(!value) { return; }
    let key = project.$key;
    key += '/' + target + '/' + index;
    let data = project.items[index].sub
    if(data) {
      data.push(value);
    }
    else {
      data = [value];
    }
    this.projectService.update(key, 'sub', data);
    this.show();
  }
  /**
   * データの削除
   * @param project 削除対象のproject 
   * @param target  削除対象のプロパティ
   * @param index   削除対象のindex
   */
  delete(project, target, index) {
    let data = project[target];
    data.splice(index, 1);
    this.projectService.update(project.$key, target, data);
    this.show();
  }

  deleteItem(project, target, index, subIndex) {
    let data = project.items[index].sub;
    data.splice(subIndex, 1);
    this.projectService.update(project.$key, target, data);
    this.show();
  }
  /**
   * 配列で管理しているデータの全削除
   * @param project 削除対象のprojct
   * @param target 削除対象のプロパティ
   */
  deleteAll(project, target) {
    let key = project.$key + '/' + target;
    this.projectService.delete(key);
    this.show();    
  }

  /**
   * チェックボックスを表示する
   */
  show() {
    this.hidden = false;
    this.checked = false;
  }

  /**
   * チェックボックスを隠す
   */
  hide() {
    this.hidden = true;
    this.checked = true;
  }

  testConsole() {
    console.log("test");
  }

}
