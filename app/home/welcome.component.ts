import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WelcomeComponent { 
    public pageTitle: string = "Welcome";
}