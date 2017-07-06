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
  clickedEmployee:Employee;
  showEmployee:boolean = false;
  constructor(private empService:EmployeeService) { }
  getEmployees(){
    this.empService.getEmployees().subscribe(data=>{
      console.log(data);
      this.employeelist = data;
    })
  }
  selectEmployee(employee:Employee){
    this.clickedEmployee = employee;
    this.showEmployee = true;
  }
  ngOnInit() {
    this.getEmployees();
  }

}
