import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  project: Object = {};
  private sub: any;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.projectNameParameter = params['project-name'];
      this.loadProjects()
    });
  }

  loadProjects() {
    this.projectService.getProjects()
      .subscribe(
      projects => this.setCurrentProject(projects, this.projectNameParameter),
      err => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setCurrentProject(projects: Object, newProject: string) {
    //If we have information for the requested project
    if (projects[newProject]) {
      this.project = projects[newProject];
    }
    else {
    this.router.navigate(['404']); // here "About" is name not path

    }
  }

}