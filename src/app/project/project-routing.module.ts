import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from "app/project/project-list/project-list.component";
const routes: Routes = [{
  path: "",
  children: [{
    path: "list",
    component: ProjectListComponent
  },
  {
    path: "",
    redirectTo: 'list'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
