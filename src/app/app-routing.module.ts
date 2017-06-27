import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full'
  }, {
    path: 'employee',
    loadChildren: './employee/employee.module#EmployeeModule',

  }, {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
