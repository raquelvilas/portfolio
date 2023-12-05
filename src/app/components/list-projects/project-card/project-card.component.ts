import { Component, Input } from '@angular/core';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import { Project } from 'src/app/model/project';

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
  };
}
