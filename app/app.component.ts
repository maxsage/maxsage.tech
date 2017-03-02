import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { WelcomeComponent } from './home/welcome.component';

import {
    Angular2Component,
    Angular2GettingStarted00CourseContentsComponent,
    Angular2GettingStarted01CourseOverviewComponent,
    Angular2GettingStarted02IntroductionComponent,
    Angular2GettingStarted03FirstThingsFirstComponent,
    Angular2GettingStarted04IntroductionToComponentsComponent,
    Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent,
    Angular2GettingStarted06DataBindingAndPipesComponent,
    Angular2GettingStarted07MoreOnComponentsComponent,
    Angular2GettingStarted08BuildingNestedComponentsComponent,
    Angular2GettingStarted09ServicesAndDependencyInjectionComponent,
    Angular2GettingStarted10NavigationAndRoutingBasicsComponent,
    Angular2GettingStarted11RetrievingDataUsingHttpComponent,
    Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent,
    Angular2GettingStarted13AngularModulesComponent,
    Angular2GettingStarted14Angular2SetupRevisitedComponent,
    Angular2GettingStarted15FinalWordsComponent,
} from './angular2/angular2.component';

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
    { path: '/angular2-getting-started-00-course-contents', name: 'Angular2GettingStarted00CourseContents', component: Angular2GettingStarted00CourseContentsComponent},
    { path: '/angular2-getting-started-01-course-overview', name: 'Angular2GettingStarted01CourseOverview', component: Angular2GettingStarted01CourseOverviewComponent},
    { path: '/angular2-getting-started-02-introduction', name: 'Angular2GettingStarted02Introduction', component: Angular2GettingStarted02IntroductionComponent},
    { path: '/angular2-getting-started-03-first-things-first', name: 'Angular2GettingStarted03FirstThingsFirst', component: Angular2GettingStarted03FirstThingsFirstComponent},
    { path: '/angular2-getting-started-04-introduction-to-components', name: 'Angular2GettingStarted04IntroductionToComponents', component: Angular2GettingStarted04IntroductionToComponentsComponent},
    { path: '/angular2-getting-started-05-templates-interpolation-and-directives', name: 'Angular2GettingStarted05TemplatesInterpolationAndDirectives', component: Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent},
    { path: '/angular2-getting-started-06-data-binding-and-pipes', name: 'Angular2GettingStarted06DataBindingAndPipes', component: Angular2GettingStarted06DataBindingAndPipesComponent},
    { path: '/angular2-getting-started-07-more-on-components', name: 'Angular2GettingStarted07MoreOnComponents', component: Angular2GettingStarted07MoreOnComponentsComponent},
    { path: '/angular2-getting-started-08-building-nested-components', name: 'Angular2GettingStarted08BuildingNestedComponents', component: Angular2GettingStarted08BuildingNestedComponentsComponent},
    { path: '/angular2-getting-started-09-services-and-dependency-injection', name: 'Angular2GettingStarted09ServicesAndDependencyInjection', component: Angular2GettingStarted09ServicesAndDependencyInjectionComponent},
    { path: '/angular2-getting-started-10-navigation-and-routing-basics', name: 'Angular2GettingStarted10NavigationAndRoutingBasics', component: Angular2GettingStarted10NavigationAndRoutingBasicsComponent},
    { path: '/angular2-getting-started-11-retrieving-data-using-http', name: 'Angular2GettingStarted11RetrievingDataUsingHttp', component: Angular2GettingStarted11RetrievingDataUsingHttpComponent},
    { path: '/angular2-getting-started-12-navigation-and-routing-additional-techniques', name: 'Angular2GettingStarted12NavigationAndRoutingAdditionalTechniques', component: Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent},
    { path: '/angular2-getting-started-13-angular-modules', name: 'Angular2GettingStarted13AngularModules', component: Angular2GettingStarted13AngularModulesComponent},
    { path: '/angular2-getting-started-14-angular2-setup-revisited', name: 'Angular2GettingStarted14Angular2SetupRevisited', component: Angular2GettingStarted14Angular2SetupRevisitedComponent},
    { path: '/angular2-getting-started-15-final-words', name: 'Angular2GettingStarted15FinalWords', component: Angular2GettingStarted15FinalWordsComponent},


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