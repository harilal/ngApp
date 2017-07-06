import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { DataTableModule } from "primeng/components/datatable/datatable";
import { MdButtonModule, MdInputModule,MdSelectModule } from '@angular/material';
import { ModalModule } from "ngx-bootstrap/modal";

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from "app/employee/employee.service";
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeViewPopComponent } from './employee-view-pop/employee-view-pop.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpModule,
    DataTableModule,ModalModule,
    MdButtonModule,MdInputModule,MdSelectModule
  ],
  declarations: [EmployeeListComponent, EmployeeAddComponent, EmployeeViewPopComponent],
  providers: [EmployeeService]

})
export class EmployeeModule { }
