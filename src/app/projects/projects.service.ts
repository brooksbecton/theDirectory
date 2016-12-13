// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Project } from './Project';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class ProjectService {
  constructor(private http: Http) { }
  private projectsUrl = './assets/projects.json';  // URL to web api

  getProjects(): Observable<Project[]> {
    return this.http.get(this.projectsUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}