import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { base_url } from "app/config";
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {
  constructor(private http: Http) { }
  getEmployees() {
    return this.http.get(base_url + "employee").map((data: Response) => {
      return data.json()
    });
  }
}
