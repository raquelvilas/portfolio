import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
@Input() title : string = 'Title';
@Input() description : string = 'Description with a lot of characters to demonstrate a concept';

@Input() thereIsDescription :boolean = true;
}
