import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, find, map } from 'rxjs';
import { Project } from '../model/project';
import { Comment } from '../model/comment';
import { Section } from '../model/section';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly API = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  listProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.API);
  }

  loadSections(ProjectId: number): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.API}/${ProjectId}`);
  }

  searchById(id: number): Observable<Project> {
    const url = `${this.API}/${id}`;
    return this.http.get<Project>(url);
  }

  changeFavorite(project: Project): Observable<Project> {
    project.Project_favorite = !project.Project_favorite;
    const url = `${this.API}/${project.id}`;
    return this.http.put<Project>(url, project);
  }

  insertComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>('http://localhost:3000/comments', comment);
  }
}
