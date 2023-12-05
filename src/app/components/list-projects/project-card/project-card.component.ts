import { Component, Input } from '@angular/core';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import { Project } from 'src/app/model/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  thereIsUtils: boolean = false;

  @Input() project: Project = {
    Project_id: 0,
    Project_title: '',
    Project_short_description: '',
    Project_thumbnail: '',
    Project_favorite: true,
  };

  constructor(private service: ProjectsService) {}

  changeFavoriteIcon(): string {
    if (this.project.Project_favorite == false) {
      return 'inactive';
    } else if (this.project.Project_favorite == true) {
      return 'active';
    }
    return 'inactive';
  }

  updateFavorite() {
    this.service.changeFavorite(this.project).subscribe();
  }
}
