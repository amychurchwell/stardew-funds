import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ProjectService]
})
export class FormComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, author: string, description: string, reward: string, money: number) {
    var newProject: Project = new Project(name, author, description, reward, money);
    this.projectService.addProject(newProject);
  }

}
