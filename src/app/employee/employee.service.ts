import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {
  base_url = "https://logicapi.herokuapp.com/api/";

  constructor(private http: Http) { }
  getEmployees() {
    return this.http.get(this.base_url + "employee").map((data: Response) => {
      return data.json()
    });
  }
}
