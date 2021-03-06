import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { DataTableModule } from "primeng/components/datatable/datatable";


import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from "app/project/project.service";
@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    HttpModule,
    DataTableModule
  ],
  declarations: [ProjectListComponent],
  providers:[ProjectService]
})
export class ProjectModule { }
