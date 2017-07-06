import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lm-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  genderList = [
    { code: 'Male', name: 'Male' },
    { code: 'Female', name: 'Female' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
