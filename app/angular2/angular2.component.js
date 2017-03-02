System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Angular2Component, Angular2GettingStarted00CourseContentsComponent, Angular2GettingStarted01CourseOverviewComponent, Angular2GettingStarted02IntroductionComponent, Angular2GettingStarted03FirstThingsFirstComponent, Angular2GettingStarted04IntroductionToComponentsComponent, Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent, Angular2GettingStarted06DataBindingAndPipesComponent, Angular2GettingStarted07MoreOnComponentsComponent, Angular2GettingStarted08BuildingNestedComponentsComponent, Angular2GettingStarted09ServicesAndDependencyInjectionComponent, Angular2GettingStarted10NavigationAndRoutingBasicsComponent, Angular2GettingStarted11RetrievingDataUsingHttpComponent, Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent, Angular2GettingStarted13AngularModulesComponent, Angular2GettingStarted14Angular2SetupRevisitedComponent, Angular2GettingStarted15FinalWordsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Angular2Component = (function () {
                function Angular2Component() {
                    this.pageTitle = "Angular 2";
                }
                Angular2Component = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2Component);
                return Angular2Component;
            }());
            exports_1("Angular2Component", Angular2Component);
            Angular2GettingStarted00CourseContentsComponent = (function () {
                function Angular2GettingStarted00CourseContentsComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Course Contents";
                }
                Angular2GettingStarted00CourseContentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-00-course-contents.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted00CourseContentsComponent);
                return Angular2GettingStarted00CourseContentsComponent;
            }());
            exports_1("Angular2GettingStarted00CourseContentsComponent", Angular2GettingStarted00CourseContentsComponent);
            Angular2GettingStarted01CourseOverviewComponent = (function () {
                function Angular2GettingStarted01CourseOverviewComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Course Overview";
                }
                Angular2GettingStarted01CourseOverviewComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-01-course-overview.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted01CourseOverviewComponent);
                return Angular2GettingStarted01CourseOverviewComponent;
            }());
            exports_1("Angular2GettingStarted01CourseOverviewComponent", Angular2GettingStarted01CourseOverviewComponent);
            Angular2GettingStarted02IntroductionComponent = (function () {
                function Angular2GettingStarted02IntroductionComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Introduction";
                }
                Angular2GettingStarted02IntroductionComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-02-introduction.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted02IntroductionComponent);
                return Angular2GettingStarted02IntroductionComponent;
            }());
            exports_1("Angular2GettingStarted02IntroductionComponent", Angular2GettingStarted02IntroductionComponent);
            Angular2GettingStarted03FirstThingsFirstComponent = (function () {
                function Angular2GettingStarted03FirstThingsFirstComponent() {
                    this.pageTitle = "Angular 2 Getting Started - First Things First";
                }
                Angular2GettingStarted03FirstThingsFirstComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-03-first-things-first.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted03FirstThingsFirstComponent);
                return Angular2GettingStarted03FirstThingsFirstComponent;
            }());
            exports_1("Angular2GettingStarted03FirstThingsFirstComponent", Angular2GettingStarted03FirstThingsFirstComponent);
            Angular2GettingStarted04IntroductionToComponentsComponent = (function () {
                function Angular2GettingStarted04IntroductionToComponentsComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Introduction To Components";
                }
                Angular2GettingStarted04IntroductionToComponentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-04-introduction-to-components.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted04IntroductionToComponentsComponent);
                return Angular2GettingStarted04IntroductionToComponentsComponent;
            }());
            exports_1("Angular2GettingStarted04IntroductionToComponentsComponent", Angular2GettingStarted04IntroductionToComponentsComponent);
            Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent = (function () {
                function Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Templates, Interpolation and Directives";
                }
                Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-05-templates-interpolation-and-directives.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent);
                return Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent;
            }());
            exports_1("Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent", Angular2GettingStarted05TemplatesInterpolationAndDirectivesComponent);
            Angular2GettingStarted06DataBindingAndPipesComponent = (function () {
                function Angular2GettingStarted06DataBindingAndPipesComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Data Binding and Pipes";
                }
                Angular2GettingStarted06DataBindingAndPipesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-06-data-binding-and-pipes.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted06DataBindingAndPipesComponent);
                return Angular2GettingStarted06DataBindingAndPipesComponent;
            }());
            exports_1("Angular2GettingStarted06DataBindingAndPipesComponent", Angular2GettingStarted06DataBindingAndPipesComponent);
            Angular2GettingStarted07MoreOnComponentsComponent = (function () {
                function Angular2GettingStarted07MoreOnComponentsComponent() {
                    this.pageTitle = "Angular 2 Getting Started - More on Components";
                }
                Angular2GettingStarted07MoreOnComponentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-07-more-on-components.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted07MoreOnComponentsComponent);
                return Angular2GettingStarted07MoreOnComponentsComponent;
            }());
            exports_1("Angular2GettingStarted07MoreOnComponentsComponent", Angular2GettingStarted07MoreOnComponentsComponent);
            Angular2GettingStarted08BuildingNestedComponentsComponent = (function () {
                function Angular2GettingStarted08BuildingNestedComponentsComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Building Nested Components";
                }
                Angular2GettingStarted08BuildingNestedComponentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-08-building-nested-components.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted08BuildingNestedComponentsComponent);
                return Angular2GettingStarted08BuildingNestedComponentsComponent;
            }());
            exports_1("Angular2GettingStarted08BuildingNestedComponentsComponent", Angular2GettingStarted08BuildingNestedComponentsComponent);
            Angular2GettingStarted09ServicesAndDependencyInjectionComponent = (function () {
                function Angular2GettingStarted09ServicesAndDependencyInjectionComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Services and Dependency Injection";
                }
                Angular2GettingStarted09ServicesAndDependencyInjectionComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-09-services-and-dependency-injection.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted09ServicesAndDependencyInjectionComponent);
                return Angular2GettingStarted09ServicesAndDependencyInjectionComponent;
            }());
            exports_1("Angular2GettingStarted09ServicesAndDependencyInjectionComponent", Angular2GettingStarted09ServicesAndDependencyInjectionComponent);
            Angular2GettingStarted10NavigationAndRoutingBasicsComponent = (function () {
                function Angular2GettingStarted10NavigationAndRoutingBasicsComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Navigation and Routing Basics";
                }
                Angular2GettingStarted10NavigationAndRoutingBasicsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-10-navigation-and-routing-basics.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted10NavigationAndRoutingBasicsComponent);
                return Angular2GettingStarted10NavigationAndRoutingBasicsComponent;
            }());
            exports_1("Angular2GettingStarted10NavigationAndRoutingBasicsComponent", Angular2GettingStarted10NavigationAndRoutingBasicsComponent);
            Angular2GettingStarted11RetrievingDataUsingHttpComponent = (function () {
                function Angular2GettingStarted11RetrievingDataUsingHttpComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Retrieving Data Using Http";
                }
                Angular2GettingStarted11RetrievingDataUsingHttpComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-11-retrieving-data-using-http.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted11RetrievingDataUsingHttpComponent);
                return Angular2GettingStarted11RetrievingDataUsingHttpComponent;
            }());
            exports_1("Angular2GettingStarted11RetrievingDataUsingHttpComponent", Angular2GettingStarted11RetrievingDataUsingHttpComponent);
            Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent = (function () {
                function Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Navigation and Routing Additional Techniques";
                }
                Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-12-navigation-and-routing-additional-techniques.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent);
                return Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent;
            }());
            exports_1("Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent", Angular2GettingStarted12NavigationAndRoutingAdditionalTechniquesComponent);
            Angular2GettingStarted13AngularModulesComponent = (function () {
                function Angular2GettingStarted13AngularModulesComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Angular Modules";
                }
                Angular2GettingStarted13AngularModulesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-13-angular-modules.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted13AngularModulesComponent);
                return Angular2GettingStarted13AngularModulesComponent;
            }());
            exports_1("Angular2GettingStarted13AngularModulesComponent", Angular2GettingStarted13AngularModulesComponent);
            Angular2GettingStarted14Angular2SetupRevisitedComponent = (function () {
                function Angular2GettingStarted14Angular2SetupRevisitedComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Angular 2 Setup Revisited";
                }
                Angular2GettingStarted14Angular2SetupRevisitedComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-14-angular2-setup-revisited.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted14Angular2SetupRevisitedComponent);
                return Angular2GettingStarted14Angular2SetupRevisitedComponent;
            }());
            exports_1("Angular2GettingStarted14Angular2SetupRevisitedComponent", Angular2GettingStarted14Angular2SetupRevisitedComponent);
            Angular2GettingStarted15FinalWordsComponent = (function () {
                function Angular2GettingStarted15FinalWordsComponent() {
                    this.pageTitle = "Angular 2 Getting Started - Final Words";
                }
                Angular2GettingStarted15FinalWordsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/angular2/angular2-getting-started-15-final-words.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GettingStarted15FinalWordsComponent);
                return Angular2GettingStarted15FinalWordsComponent;
            }());
            exports_1("Angular2GettingStarted15FinalWordsComponent", Angular2GettingStarted15FinalWordsComponent);
        }
    }
});
//# sourceMappingURL=angular2.component.js.map