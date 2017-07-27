import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
// import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

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
  // dataForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    db: AngularFireDatabase
    /*private fb: FormBuilder*/) {
      this.projects = db.list('/projects');
      // this.createForm();
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
    if(project[target].value === value) {
      return;
    }
    this.projectService.update(project.$key, target, value);
    this.show();
    this.readonly = true;
  }
  
  /**
   * 配列で管理しているデータの更新
   * @param project 更新対象のproject 
   * @param target  更新対象のプロパティ
   * @param value   更新する値
   */
  updateArrayData(project, target, value) {
    if(!value) { return; }
    let data: any[];
    if(project[target]) {
      data = project[target].value;
      data.push(value);
    }
    else {
      data = [value];
    }
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

  testShow() {
    this.hidden = false;
  }

  //TO DO
  //Reactive Forms test
  // data = new FormControl;

  // dataForm = new FormGroup({
  //   data: new FormControl()
  // });

  // createForm()  {
  //   this.dataForm = this.fb.group({
  //     data: ['', Validators.required],
  //   })
  // }

  

}
