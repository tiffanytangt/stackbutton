import {Component} from '@angular/core';
@Component({
    moduleId: __moduleName,
    selector: 'sub-nav',
    templateUrl: './sub-nav.component.html',
    styleUrls: ['./sub-nav.component.css']
})

export class SubNavComponent {
  navList = [
    { 'target': '/projects', 'label': 'Projects'},
    { 'target': '/version-control', 'label': 'Version Control'},
    { 'target': '/issue-tracking', 'label': 'Issue Tracking'},
    { 'target': '/automation', 'label': 'Automation'}
  ];
}
