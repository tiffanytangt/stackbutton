import {Component} from '@angular/core';
@Component({
    moduleId: __moduleName,
    selector: 'project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent {
  projects = [
    {name: 'A Project Name', description: 'Description Text'},
    {name: 'More Project Name', description: 'More Description Text'},
    {name: 'Another Project Name', description: 'Another Description Text'},
  ]
}
