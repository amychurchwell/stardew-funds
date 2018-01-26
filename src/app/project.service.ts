import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: string) {
    return this.database.object('/projects/' + projectId);
  }
  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
                                author: localUpdatedProject.author,
                                description: localUpdatedProject.description,
                                money: localUpdatedProject.money});
  }

  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }



  fundProject(projectToFund){
    projectToFund.money -= 1;
    var projectEntryInFirebase = this.getProjectById(projectToFund.$key);
    projectEntryInFirebase.update({money: projectToFund.money});
    return projectToFund;
  }
}
