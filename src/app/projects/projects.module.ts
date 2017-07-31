import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from "app/projects/projects.component";
import { ProjectComponent } from "app/projects/project/project.component";
import { ProjectListComponent } from "app/projects/project-list/project-list.component";
import { ProjectService } from "app/projects/shared/project.service";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectListComponent
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectsModule { }
