import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: 'app/wpf/wpf.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFComponent {
    public pageTitle: string = "WPF";
}