import { Component, Input } from '@angular/core';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() title : string = '';
  @Input() description : string = '';
  @Input() imageSource: string = '';
  @Input() imageAlt: string = '';
 
  thereIsUtils:boolean = false;

}
