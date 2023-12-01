import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsComponent } from './components/projects/list-projects.component';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ListProjectsComponent,
  },
  {
    path: 'detail-project/:id',
    component: DetailProjectComponent,
  },
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
