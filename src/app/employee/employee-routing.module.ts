import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "app/employee/employee-list/employee-list.component";
import { EmployeeAddComponent } from "app/employee/employee-add/employee-add.component";
const routes: Routes = [{
  path: "",
  children: [{
    path: "list",
    component: EmployeeListComponent
  }, {
    path: "add",
    component: EmployeeAddComponent
  }, {
    path: "",
    redirectTo: 'list',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
