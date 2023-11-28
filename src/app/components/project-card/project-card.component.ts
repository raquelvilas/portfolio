import { Component, Input } from '@angular/core';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  thereIsUtils: boolean = false;

  @Input() project: Project = {
    id: 0,
    title: '',
    description: '',
    imageSource: '',
    imageAlt: '',
  };
}
