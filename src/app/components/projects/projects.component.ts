import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import{ Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  listOfProjects: Project[] = [];

  constructor(private service: ProjectsService){}

  ngOnInit(): void {
      this.service.listProjects().subscribe(     //listen to updates on service returns
        (projects) => { this.listOfProjects = projects}    //name the return as "projects and attribute it to this objects' property named listOfProjects
      )   
  }
}
