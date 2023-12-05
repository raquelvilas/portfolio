import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, find, map } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly API = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  listProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.API);
  }

  searchById(id: number): Observable<Project | null> {
    return this.http.get<Project[]>(this.API).pipe(
      map((itens: Project[]) => {
        const selectedItem = itens.find((item: Project) => {
          return item.Project_id === id;
        });
        return selectedItem || null;
      })
    );
  }

  changeFavorite(project: Project): Observable<Project> {
    project.Project_favorite = !project.Project_favorite;
    const url = `http://localhost:3000/detail-project/${project.Project_id}`;
    return this.http.put<Project>(url, project);
  }
}
