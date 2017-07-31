import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '議事録一覧';

  constructor(private router: Router){
  }

  gotoProjects() {
    this.router.navigateByUrl('/projects');
  }

}
