import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
})
export class ListProjectsComponent implements OnInit {
  listOfProjects: Project[] = [];

  constructor(private service: ProjectsService, private router: Router) {}

  ngOnInit(): void {
    this.service.listProjects().subscribe(
      //listen to updates on service returns
      (projects) => {
        this.listOfProjects = projects;
      } //name the return as "projects and attribute it to this objects' property named listOfProjects
    );
  }

  showDetails(id: number) {
    this.service.searchById(id).subscribe(() => {
      this.router.navigate(['/detail-project', id]);
    });
  }
}
