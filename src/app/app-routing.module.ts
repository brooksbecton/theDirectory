import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './404/NotFound.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsAdminComponent } from './projects/admin/admin.component'
import { ProjectDescComponent } from './projects/project-desc/project-desc.component';
import { ResourcesComponent } from './resources/resources.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Auth } from './auth.service'
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'index', component: WelcomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/admin', component: ProjectsAdminComponent, canActivate:[AuthGuard] },
  { path: 'projects/:project-name', component: ProjectDescComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'utilities', component: UtilitiesComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    Auth,
    AuthGuard,
    ]
})
export class AppRoutingModule { }
