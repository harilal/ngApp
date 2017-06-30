import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class ProjectService {
  base_url = "https://logicapi.herokuapp.com/api/";

  constructor(private http: Http) { }
  getProjects() {
    return this.http.get(this.base_url + "project").map((data: Response) => {
      return data.json()
    });
  }
}
