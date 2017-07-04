import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import{ base_url } from "app/config";
import 'rxjs/add/operator/map';
@Injectable()
export class ProjectService {


  constructor(private http: Http) { }
  getProjects() {
    return this.http.get(base_url + "project").map((data: Response) => {
      return data.json()
    });
  }
}
