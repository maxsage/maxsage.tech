import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: 'app/javascript/javascript.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class JavaScriptComponent {
    public pageTitle: string = "JavaScript";
}

@Component({
    templateUrl: 'app/javascript/building-a-javascript-development-environment-00-course-contents.html',
    directives: [ROUTER_DIRECTIVES]
})
export class BuildingAJavaScriptDevelopmentEnvironment00CourseContentsComponent {
    public pageTitle: string = "Building A JavaScript Development Environment - CourseContents";
}

