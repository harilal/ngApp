import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeeModule { }
