import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "app/employee/employee.service";
import { Employee } from "app/employee/employee";
@Component({
  selector: 'lm-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeelist:Employee[];
  constructor(private empService:EmployeeService) { }
  getEmployees(){
    this.empService.getEmployees().subscribe(data=>{
      console.log(data);
      this.employeelist = data;
    })
  }
  ngOnInit() {
    this.getEmployees();
  }

}
