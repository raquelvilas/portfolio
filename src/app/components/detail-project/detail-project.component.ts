import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Comment } from 'src/app/model/comment';
import { Project } from 'src/app/model/project';
import { Section } from 'src/app/model/section';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css'],
})
export class DetailProjectComponent implements OnInit {
  capturedId: number = 0;
  listOfSections: Section[] = [];
  activeComment: boolean = false;

  comment: Comment = {
    author: '',
    email: '',
    content: '',
    project_id: 0,
    id: 0,
  };

  project: Project = {
    id: 0,
    Project_title: '',
    Project_short_description: '',
    Project_thumbnail: '',
    Project_favorite: true,
    Sections: [],
  };

  constructor(
    private activatedRouter: ActivatedRoute,
    private service: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.capturedId = parseInt(
      this.activatedRouter.snapshot.paramMap.get('id')!
    );
    this.loadProject();
  }

  componentReload() {
    this.activeComment = true;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  addComment() {
    this.comment.project_id = this.capturedId;
    this.service.insertComment(this.comment).subscribe(() => {
      console.log(this.comment);
    });
    console.log(this.comment);
  }

  loadProject(): void {
    this.service.searchById(this.capturedId).subscribe((searchedProject) => {
      this.project = searchedProject;
      console.log(this.project.Sections);
    });
  }

  scroll(id: number) {
    document.getElementById('section-' + id)?.scrollIntoView();
  }
}
