import { Component, Directive, ElementRef } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Directive({
    selector: 'pre'
})

class PreHighlight {
    constructor(refElem: ElementRef) {
        hljs.highlightBlock(refElem.nativeElement);
    }
}

@Component({
    templateUrl: 'app/sqlite/sqlite.component.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class SqliteComponent {
    public pageTitle: string = "SQLite";
}





