import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from "app/employee/employee";

@Component({
  selector: 'lm-employee-view-pop',
  templateUrl: './employee-view-pop.component.html',
  styleUrls: ['./employee-view-pop.component.css']
})
export class EmployeeViewPopComponent implements OnInit {
  @Input() employee:Employee
  @Input() openPop = false;
  @Output() openPopChange:EventEmitter<any> = new EventEmitter();
  constructor() { }
  onShown() {

  }
  onHidden() {
    this.openPopChange.emit(false);
  }
  ngOnInit() {
  }

}
