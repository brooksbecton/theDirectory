import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Auth } from './../../auth.service'
import { Project } from '../project'
import { ProjectNavComponent } from '../nav/projects-nav.component'
import { ProjectService } from '../projects.service'


@Component({
  selector: 'project-desc',
  templateUrl: './project-desc.component.html'
})

export class ProjectDescComponent {

  projects: Project[]
  projectNameParameter: string = "";
  project: Project = new Project;
  private sub: any;

  constructor(
    private auth: Auth,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.projectNameParameter = params['project-name'];
      this.projectService.getProject(this.projectNameParameter)
      .subscribe(newProject => {
        this.setCurrentProject(newProject);
      });
    });
  }

  editProject() {
    this.router.navigateByUrl('projects/' + this.project.name + '/edit');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setCurrentProject(newProject: Project) {
    if (newProject) {
      this.project = newProject;
    }
    else {
      this.router.navigate(['404']);
    }
  }

}