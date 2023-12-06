import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css'],
})
export class DetailProjectComponent implements OnInit {
  id: string = '';
  activeComment: boolean = false;

  comment: Comment = {
    author: '',
    email: '',
    content: '',
  };
  constructor(
    private activatedRouter: ActivatedRoute,
    private service: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')!;
  }

  componentReload() {
    this.activeComment = true;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  addComment() {
    this.service.insertComment(this.comment).subscribe(() => {
      this.componentReload;
    });
  }
}
