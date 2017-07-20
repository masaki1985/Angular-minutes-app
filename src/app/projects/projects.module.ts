import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from "app/projects/projects.component";
import { ProjectComponent } from "app/projects/project/project.component";
import { ProjectListComponent } from "app/projects/project-list/project-list.component";
import { ProjectService } from "app/projects/shared/project.service";
import { InMemoryDataService } from "app/core/in-memory-data.service";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
