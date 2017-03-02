System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './home/welcome.component', './angular2/angular2.component', './jquery/jquery.component', './bootstrap/bootstrap3.component', './visualstudio/visualstudio.component', './visualstudiocode/visualstudiocode.component', './emmet/emmet.component', './csharp/csharp.component', './javascript/javascript.component', './typescript/typescript.component', './wpf/wpf.component', './odata/odata.component', './dgen/dgen.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, welcome_component_1, angular2_component_1, jquery_component_1, bootstrap3_component_1, visualstudio_component_1, visualstudiocode_component_1, emmet_component_1, csharp_component_1, javascript_component_1, typescript_component_1, wpf_component_1, odata_component_1, dgen_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (angular2_component_1_1) {
                angular2_component_1 = angular2_component_1_1;
            },
            function (jquery_component_1_1) {
                jquery_component_1 = jquery_component_1_1;
            },
            function (bootstrap3_component_1_1) {
                bootstrap3_component_1 = bootstrap3_component_1_1;
            },
            function (visualstudio_component_1_1) {
                visualstudio_component_1 = visualstudio_component_1_1;
            },
            function (visualstudiocode_component_1_1) {
                visualstudiocode_component_1 = visualstudiocode_component_1_1;
            },
            function (emmet_component_1_1) {
                emmet_component_1 = emmet_component_1_1;
            },
            function (csharp_component_1_1) {
                csharp_component_1 = csharp_component_1_1;
            },
            function (javascript_component_1_1) {
                javascript_component_1 = javascript_component_1_1;
            },
            function (typescript_component_1_1) {
                typescript_component_1 = typescript_component_1_1;
            },
            function (wpf_component_1_1) {
                wpf_component_1 = wpf_component_1_1;
            },
            function (odata_component_1_1) {
                odata_component_1 = odata_component_1_1;
            },
            function (dgen_component_1_1) {
                dgen_component_1 = dgen_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'maxsage.tech';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: "\n            <div class='navbar navbar-inverse'>\n                <div class='container'>\n                    <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                            <span class=\"sr-only\">Toggle navigation</span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                        </button>\n                        <a [routerLink]=\"['Welcome']\" class=\"navbar-brand\">maxsage.tech</a>\n                    </div>\n                    <div class=\"navbar-collapse collapse\">\n                        <ul class='nav navbar-nav'>\n                            <li><a [routerLink]=\"['WPF']\">WPF</a></li>\n                            <li><a [routerLink]=\"['Angular2']\">Angular 2</a></li>\n                            <li><a [routerLink]=\"['JQuery']\">JQuery</a></li>\n                            <li><a [routerLink]=\"['Bootstrap3']\">Bootstrap 3</a></li>\n                            <li><a [routerLink]=\"['VisualStudio']\">Visual Studio</a></li>\n                            <li><a [routerLink]=\"['VisualStudioCode']\">Visual Studio Code</a></li>\n                            <li><a [routerLink]=\"['Emmet']\">Emmet</a></li>\n                            <li><a [routerLink]=\"['CSharp']\">C#</a></li>\n                            <li><a [routerLink]=\"['JavaScript']\">JavaScript</a></li>\n                            <li><a [routerLink]=\"['TypeScript']\">TypeScript</a></li>\n                            <li><a [routerLink]=\"['OData']\">OData</a></li>\n                            <li><a [routerLink]=\"['DGen']\">DGen</a></li>\n\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class='container body-content'>\n                <router-outlet></router-outlet>\n                <hr />\n                <footer>\n                    <p>&copy; 2016 - maxsage.tech</p>\n                </footer>\n            </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/wpf', name: 'WPF', component: wpf_component_1.WPFComponent },
                        { path: '/angular2', name: 'Angular2', component: angular2_component_1.Angular2Component },
                        { path: '/angular2-getting-started-00-course-contents', name: 'Angular2GettingStarted00CourseContents', component: angular2_component_1.Angular2GettingStarted00CourseContentsComponent },
                        { path: '/angular2-getting-started-01-course-overview', name: 'Angular2GettingStarted01CourseOverview', component: angular2_component_1.Angular2GettingStarted01CourseOverviewComponent },
                        { path: '/angular2-getting-started-02-introduction', name: 'Angular2GettingStarted02Introduction', component: angular2_component_1.Angular2GettingStarted02IntroductionComponent },
                        { path: '/angular2-getting-started-03-first-things-first', name: 'Angular2GettingStarted03FirstThingsFirst', component: angular2_component_1.Angular2GettingStarted03FirstThingsFirstComponent },
                        { path: '/angular2-getting-started-04-introduction-to-components', name: 'Angular2GettingStarted04IntroductionToComponents', component: angular2_component_1.Angular2GettingStarted04IntroductionToComponentsComponent },
                        { path: '/angular2-getting-started-05-templates-interpolation-and-directives', name: 'Angular2GettingStarted05TemplatesInterpolationAndDirectives', component: angular2_component_1.Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent },
                        { path: '/angular2-getting-started-06-data-binding-and-pipes', name: 'Angular2GettingStarted06DataBindingAndPipes', component: angular2_component_1.Angular2GettingStarted06DataBindingAndPipesComponent },
                        { path: '/angular2-getting-started-07-more-on-components', name: 'Angular2GettingStarted07MoreOnComponents', component: angular2_component_1.Angular2GettingStarted07MoreOnComponentsComponent },
                        { path: '/angular2-getting-started-08-building-nested-components', name: 'Angular2GettingStarted08BuildingNestedComponents', component: angular2_component_1.Angular2GettingStarted08BuildingNestedComponentsComponent },
                        { path: '/angular2-getting-started-09-services-and-dependency-injection', name: 'Angular2GettingStarted09ServicesAndDependencyInjection', component: angular2_component_1.Angular2GettingStarted09ServicesAndDependencyInjectionComponent },
                        { path: '/angular2-getting-started-10-navigation-and-routing-basics', name: 'Angular2GettingStarted10NavigationAndRoutingBasics', component: angular2_component_1.Angular2GettingStarted10NavigationAndRoutingBasicsComponent },
                        { path: '/angular2-getting-started-11-retrieving-data-using-http', name: 'Angular2GettingStarted11RetrievingDataUsingHttp', component: angular2_component_1.Angular2GettingStarted11RetrievingDataUsingHttpComponent },
                        { path: '/angular2-getting-started-12-navigation-and-routing-additional-techniques', name: 'Angular2GettingStarted12NavigationAndRoutingAdditionalTechniques', component: angular2_component_1.Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent },
                        { path: '/angular2-getting-started-13-angular-modules', name: 'Angular2GettingStarted13AngularModules', component: angular2_component_1.Angular2GettingStarted13AngularModulesComponent },
                        { path: '/angular2-getting-started-14-angular2-setup-revisited', name: 'Angular2GettingStarted14Angular2SetupRevisited', component: angular2_component_1.Angular2GettingStarted14Angular2SetupRevisitedComponent },
                        { path: '/angular2-getting-started-15-final-words', name: 'Angular2GettingStarted15FinalWords', component: angular2_component_1.Angular2GettingStarted15FinalWordsComponent },
                        { path: '/jquery', name: 'JQuery', component: jquery_component_1.JQueryComponent },
                        { path: '/bootstrap', name: 'Bootstrap3', component: bootstrap3_component_1.Bootstrap3Component },
                        { path: '/visualstudio', name: 'VisualStudio', component: visualstudio_component_1.VisualStudioComponent },
                        { path: '/visualstudiocode', name: 'VisualStudioCode', component: visualstudiocode_component_1.VisualStudioCodeComponent },
                        { path: '/emmet', name: 'Emmet', component: emmet_component_1.EmmetComponent },
                        { path: '/csharp', name: 'CSharp', component: csharp_component_1.CSharpComponent },
                        { path: '/javascript', name: 'JavaScript', component: javascript_component_1.JavaScriptComponent },
                        { path: '/typescript', name: 'TypeScript', component: typescript_component_1.TypeScriptComponent },
                        { path: '/odata', name: 'OData', component: odata_component_1.ODataComponent },
                        { path: '/dgen', name: 'DGen', component: dgen_component_1.DGenComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map