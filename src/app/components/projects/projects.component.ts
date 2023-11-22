import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  imagePath1 = '../../../assets/images/Projects-Smart-Review.png';
  imageAlt1 = 'Image with an example of a smart review card';
  title1 = 'Smarter preparation for exams';
  description1 = 'Practice with questions became more regular when we created smart trainings.'

  imagePath2 = '../../../assets/images/Projects-Finding-Content-Easily.png'
  imageAlt2 = 'Image with a phone focusing on filters added to the search experience';
  title2 = 'Finding content easily';
  description2 = 'Content consumption increased by 10% throught an improved search experience.'

  imagePath3 = '../../../assets/images/Projects-Design-System.png'
  imageAlt3 = 'Image with examples of components created';
  title3 = 'Initiatives for a design system';
  description3 = 'How we built one from scratch.'
}
