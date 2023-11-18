import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagePath1 = '../../../assets/images/Projects-Smart-Review.png';
  title1 = 'Smarter preparation for exams';
  description1 = 'Practice with questions became more regular when we created smart trainings.'

  imagePath2 = '../../../assets/images/Projects-Finding-Content-Easily.png'
  title2 = 'Finding content easily';
  description2 = 'Content consumption increased by 10% throught an improved search experience.'

  imagePath3 = '../../../assets/images/Projects-Design-System.png'
  title3 = 'Initiatives for a design system';
  description3 = 'How we built one from scratch.'
}
