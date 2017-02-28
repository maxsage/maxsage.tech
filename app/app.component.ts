import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { WelcomeComponent } from './home/welcome.component';

import { Angular2Component, Angular2GettingStarted00CourseContentsComponent} from './angular2/angular2.component';
import { JQueryComponent } from './jquery/jquery.component';
import { Bootstrap3Component } from './bootstrap/bootstrap3.component';
import { VisualStudioComponent } from './visualstudio/visualstudio.component';
import { VisualStudioCodeComponent } from './visualstudiocode/visualstudiocode.component';
import { EmmetComponent } from './emmet/emmet.component';

import { CSharpComponent } from './csharp/csharp.component';
import { JavaScriptComponent } from './javascript/javascript.component';
import { TypeScriptComponent } from './typescript/typescript.component';
import { WPFComponent } from './wpf/wpf.component';

import { ODataComponent } from './odata/odata.component';

import { DGenComponent } from './dgen/dgen.component';


@Component ({
    selector: 'pm-app',
    template: `
            <div class='navbar navbar-inverse'>
                <div class='container'>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a [routerLink]="['Welcome']" class="navbar-brand">maxsage.tech</a>
                    </div>
                    <div class="navbar-collapse collapse">
                        <ul class='nav navbar-nav'>
                            <li><a [routerLink]="['WPF']">WPF</a></li>
                            <li><a [routerLink]="['Angular2']">Angular 2</a></li>
                            <li><a [routerLink]="['JQuery']">JQuery</a></li>
                            <li><a [routerLink]="['Bootstrap3']">Bootstrap 3</a></li>
                            <li><a [routerLink]="['VisualStudio']">Visual Studio</a></li>
                            <li><a [routerLink]="['VisualStudioCode']">Visual Studio Code</a></li>
                            <li><a [routerLink]="['Emmet']">Emmet</a></li>
                            <li><a [routerLink]="['CSharp']">C#</a></li>
                            <li><a [routerLink]="['JavaScript']">JavaScript</a></li>
                            <li><a [routerLink]="['TypeScript']">TypeScript</a></li>
                            <li><a [routerLink]="['OData']">OData</a></li>
                            <li><a [routerLink]="['DGen']">DGen</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class='container body-content'>
                <router-outlet></router-outlet>
                <hr />
                <footer>
                    <p>&copy; 2016 - maxsage.tech</p>
                </footer>
            </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/wpf', name: 'WPF', component: WPFComponent },
    { path: '/angular2', name: 'Angular2', component: Angular2Component },

    { path: '/jquery', name: 'JQuery', component: JQueryComponent },
    { path: '/bootstrap', name: 'Bootstrap3', component: Bootstrap3Component },
    
    { path: '/visualstudio', name: 'VisualStudio', component: VisualStudioComponent },
    { path: '/visualstudiocode', name: 'VisualStudioCode', component: VisualStudioCodeComponent },
    { path: '/emmet', name: 'Emmet', component: EmmetComponent },

    { path: '/csharp', name: 'CSharp', component: CSharpComponent },
    { path: '/javascript', name: 'JavaScript', component: JavaScriptComponent },
    { path: '/typescript', name: 'TypeScript', component: TypeScriptComponent },

    { path: '/odata', name: 'OData', component: ODataComponent },
    { path: '/dgen', name: 'DGen', component: DGenComponent },
    
])
export class AppComponent {
    pageTitle: string = 'maxsage.tech';
}