import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  private readonly API = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  listProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.API)
  }
}
