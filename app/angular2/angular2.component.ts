import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: 'app/angular2/angular2.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class Angular2Component {
    public pageTitle: string = "Angular 2";
}

@Component({
    templateUrl: 'app/angular2/angular2-getting-started-00-course-contents.html',
    directives: [ROUTER_DIRECTIVES]
})
export class Angular2GettingStarted00CourseContentsComponent {
    public pageTitle: string = "Floobjar";
}