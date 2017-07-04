import { Component, OnInit } from '@angular/core';

import { ProjectService } from "app/project/project.service";
import { Project } from "app/project/project";
@Component({
  selector: 'lm-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList:Project[];
  constructor(private projectService: ProjectService) { }
  getProjects() {
    this.projectService.getProjects().subscribe(data => {
      console.log(data)
      this.projectList=data;
    })
  }
  ngOnInit() {
    this.getProjects();
  }

}
