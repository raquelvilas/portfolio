import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/model/section';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css'],
})
export class ProjectSectionComponent implements OnInit {
  capturedProjectId: number = 0;

  @Input() section: Section = {
    Section_outline: '',
    Section_headline: '',
    Section_body: '',
    Project_id: 0,
    id: 0,
  };

  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.capturedProjectId = parseInt(
      this.activatedRouter.snapshot.paramMap.get('id')!
    );
  }
}
