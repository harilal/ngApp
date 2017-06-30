import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from "app/employee/employee.service";

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpModule
  ],
  declarations: [EmployeeListComponent],
  providers: [EmployeeService]

})
export class EmployeeModule { }
