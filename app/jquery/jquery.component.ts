import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: 'app/jquery/jquery.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class JQueryComponent {
    public pageTitle: string = "JQuery";
}