import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css'],
})
export class DetailProjectComponent implements OnInit {
  id: string = '';

  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')!;
  }
}
