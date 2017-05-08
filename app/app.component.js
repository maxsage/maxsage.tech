System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './home/welcome.component', './wpf/wpf.component', './angular2/angular2.component', './typescript/typescript.component', './javascript/javascript.component', './jquery/jquery.component', './bootstrap/bootstrap3.component', './visualstudio/visualstudio.component', './visualstudiocode/visualstudiocode.component', './emmet/emmet.component', './csharp/csharp.component', './odata/odata.component', './dgen/dgen.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, welcome_component_1, wpf_component_1, angular2_component_1, typescript_component_1, javascript_component_1, jquery_component_1, bootstrap3_component_1, visualstudio_component_1, visualstudiocode_component_1, emmet_component_1, csharp_component_1, odata_component_1, dgen_component_1;
    var PreHighlight, AppComponent;
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
            function (wpf_component_1_1) {
                wpf_component_1 = wpf_component_1_1;
            },
            function (angular2_component_1_1) {
                angular2_component_1 = angular2_component_1_1;
            },
            function (typescript_component_1_1) {
                typescript_component_1 = typescript_component_1_1;
            },
            function (javascript_component_1_1) {
                javascript_component_1 = javascript_component_1_1;
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
            function (odata_component_1_1) {
                odata_component_1 = odata_component_1_1;
            },
            function (dgen_component_1_1) {
                dgen_component_1 = dgen_component_1_1;
            }],
        execute: function() {
            PreHighlight = (function () {
                function PreHighlight(refElem) {
                    hljs.highlightBlock(refElem.nativeElement);
                }
                PreHighlight = __decorate([
                    core_1.Directive({
                        selector: 'pre'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PreHighlight);
                return PreHighlight;
            }());
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'maxsage.tech';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: "\n            <div class='navbar navbar-inverse'>\n                <div class='container'>\n                    <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                            <span class=\"sr-only\">Toggle navigation</span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                        </button>\n                        <a [routerLink]=\"['Welcome']\" class=\"navbar-brand\">maxsage.tech</a>\n                    </div>\n                    <div class=\"navbar-collapse collapse\">\n                        <ul class='nav navbar-nav'>\n                            <li><a [routerLink]=\"['WPF']\">WPF</a></li>\n                            <li><a [routerLink]=\"['Angular2']\">Angular 2</a></li>\n                            <li><a [routerLink]=\"['TypeScript']\">TypeScript</a></li>\n                            <li><a [routerLink]=\"['JavaScript']\">JavaScript</a></li>\n                            <li><a [routerLink]=\"['JQuery']\">JQuery</a></li>\n                            <li><a [routerLink]=\"['Bootstrap3']\">Bootstrap 3</a></li>\n                            <li><a [routerLink]=\"['VisualStudio']\">Visual Studio</a></li>\n                            <li><a [routerLink]=\"['VisualStudioCode']\">Visual Studio Code</a></li>\n                            <li><a [routerLink]=\"['Emmet']\">Emmet</a></li>\n                            <li><a [routerLink]=\"['CSharp']\">C#</a></li>\n                            <li><a [routerLink]=\"['OData']\">OData</a></li>\n                            <li><a [routerLink]=\"['DGen']\">DGen</a></li>\n                        </ul>\n                    </div>\n                    \n                </div>\n               \n            </div>\n            <div class='container body-content'>\n                <pre>\n                    <code class=\"html\">\n                        &lt;html&gt;\n                            &lt;body&gt;\n            \n                                &lt;h1&gt;My First Heading&lt;/h1&gt;\n                                &lt;p&gt;My first paragraph.&lt;/p&gt;\n            \n                            &lt;/body&gt;\n                        &lt;/html&gt;\n                    </code>\n                </pre>\n                <router-outlet></router-outlet>\n                <hr />\n                <footer>\n                    <p>&copy; 2017 - maxsage.tech</p>\n                </footer>\n            </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight],
                        providers: [http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/wpf', name: 'WPF', component: wpf_component_1.WPFComponent },
                        { path: '/wpf-data-binding-in-depth-00-course-contents', name: 'WPFDataBindingInDepth00CourseContents', component: wpf_component_1.WPFDataBindingInDepth00CourseContentsComponent },
                        { path: '/wpf-data-binding-in-depth-01-course-overview', name: 'WPFDataBindingInDepth01CourseOverview', component: wpf_component_1.WPFDataBindingInDepth01CourseOverviewComponent },
                        { path: '/wpf-data-binding-in-depth-02-data-binding-overview', name: 'WPFDataBindingInDepth02DataBindingOverview', component: wpf_component_1.WPFDataBindingInDepth02DataBindingOverviewComponent },
                        { path: '/wpf-data-binding-in-depth-03-data-sources', name: 'WPFDataBindingInDepth03DataSources', component: wpf_component_1.WPFDataBindingInDepth03DataSourcesComponent },
                        { path: '/wpf-data-binding-in-depth-04-binding-core-concepts', name: 'WPFDataBindingInDepth04BindingCoreConcepts', component: wpf_component_1.WPFDataBindingInDepth04BindingCoreConceptsComponent },
                        { path: '/wpf-data-binding-in-depth-05-unleashing-the-full-power-of-bindings', name: 'WPFDataBindingInDepth05UnleashingTheFullPowerOfBindings', component: wpf_component_1.WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent },
                        { path: '/wpf-data-binding-in-depth-06-deep-dive-into-datatemplates', name: 'WPFDataBindingInDepth06DeepDiveIntoDataTemplates', component: wpf_component_1.WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent },
                        { path: '/wpf-data-binding-in-depth-07-design-time-data-binding', name: 'WPFDataBindingInDepth07DesignTimeDataBinding', component: wpf_component_1.WPFDataBindingInDepth07DesignTimeDataBindingComponent },
                        { path: '/wpf-data-binding-in-depth-08-containers-and-collection-controls', name: 'WPFDataBindingInDepth08ContainersAndCollectionControls', component: wpf_component_1.WPFDataBindingInDepth08ContainersAndCollectionControlsComponent },
                        { path: '/wpf-data-binding-in-depth-09-data-input-validation', name: 'WPFDataBindingInDepth09DataInputValidation', component: wpf_component_1.WPFDataBindingInDepth09DataInputValidationComponent },
                        { path: '/wpf-mvvm-in-depth-00-course-contents', name: 'WPFMVVMInDepth00CourseContents', component: wpf_component_1.WPFMVVMInDepth00CourseContentsComponent },
                        { path: '/wpf-mvvm-in-depth-01-mvvm-pattern-fundamentals', name: 'WPFMVVMInDepth01MVVMPatternFundamentals', component: wpf_component_1.WPFMVVMInDepth01MVVMPatternFundamentalsComponent },
                        { path: '/wpf-mvvm-in-depth-02-first-taste-of-mvvm', name: 'WPFMVVMInDepth02FirstTasteOfMVVM', component: wpf_component_1.WPFMVVMInDepth02FirstTasteOfMVVMComponent },
                        { path: '/wpf-mvvm-in-depth-03-hooking-up-views-and-viewmodels-in-mvvm', name: 'WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVM', component: wpf_component_1.WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent },
                        { path: '/wpf-mvvm-in-depth-04-view-viewmodel-communication-in-wpf', name: 'WPFMVVMInDepth04ViewViewModelCommunicationInWPF', component: wpf_component_1.WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent },
                        { path: '/wpf-mvvm-in-depth-05-applied-mvvm-part-1-hierarchies-and-navigation', name: 'WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigation', component: wpf_component_1.WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent },
                        { path: '/wpf-mvvm-in-depth-06-applied-mvvm-part-2-validation-and-dependency-injection', name: 'WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjection', component: wpf_component_1.WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent },
                        { path: '/mvvm-light-toolkit-fundamentals-00-course-contents', name: 'MVVMLightToolkitFundamentals00CourseContents', component: wpf_component_1.MVVMLightToolkitFundamentals00CourseContentsComponent },
                        { path: '/mvvm-light-toolkit-fundamentals-01-introduction-to-the-mvvm', name: 'MVVMLightToolkitFundamentals01IntroductionToTheMVVM', component: wpf_component_1.MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent },
                        { path: '/mvvm-light-toolkit-fundamentals-02-refactoring-the-app-to-mvvm', name: 'MVVMLightToolkitFundamentals02RefactoringTheAppToMVVM', component: wpf_component_1.MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent },
                        { path: '/mvvm-light-toolkit-fundamentals-03-the-core-components', name: 'MVVMLightToolkitFundamentals03TheCoreComponents', component: wpf_component_1.MVVMLightToolkitFundamentals03TheCoreComponentsComponent },
                        { path: '/mvvm-light-toolkit-fundamentals-04-the-extras', name: 'MVVMLightToolkitFundamentals04TheExtras', component: wpf_component_1.MVVMLightToolkitFundamentals04TheExtrasComponent },
                        { path: '/mvvm-light-toolkit-fundamentals-05-installing-the-mvvm-light-toolkit-and-additional-components', name: 'MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponents', component: wpf_component_1.MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent },
                        { path: '/mvvm-light-toolkit-fundamentals-06-advanced-examples-with-mvvm-light', name: 'MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLight', component: wpf_component_1.MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent },
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
                        { path: '/angular2-first-look-00-course-contents', name: 'Angular2FirstLook00CourseContents', component: angular2_component_1.Angular2FirstLook00CourseContentsComponent },
                        { path: '/angular2-first-look-01-angular-2-in-action', name: 'Angular2FirstLook01Angular2InAction', component: angular2_component_1.Angular2FirstLook01Angular2InActionComponent },
                        { path: '/angular2-first-look-02-angular-2-architecture-whats-new-and-whats-different', name: 'Angular2FirstLook02Angular2ArchitectureWhatsNewAndWhatsDifferent', component: angular2_component_1.Angular2FirstLook02Angular2ArchitectureWhatsNewAndWhatsDifferentComponent },
                        { path: '/angular2-first-look-03-angular-2-essentials-modules-components-templates-and-metadata', name: 'Angular2FirstLook03Angular2EssentialsModulesComponentsTemplatesAndMetadata', component: angular2_component_1.Angular2FirstLook03Angular2EssentialsModulesComponentsTemplatesAndMetadataComponent },
                        { path: '/angular2-first-look-04-displaying-data-data-binding-directives-and-pipes', name: 'Angular2FirstLook04DisplayingDataDataBindingDirectivesAndPipes', component: angular2_component_1.Angular2FirstLook04DisplayingDataDataBindingDirectivesAndPipesComponent },
                        { path: '/angular2-first-look-05-services-dependency-injection-and-component-lifecycle-hooks.html', name: 'Angular2FirstLook05ServicesDependencyInjectionAndComponentLifecycleHooks', component: angular2_component_1.Angular2FirstLook05ServicesDependencyInjectionAndComponentLifecycleHooksComponent },
                        { path: '/angular2-first-look-06-data-with-http.html', name: 'Angular2FirstLook06DataWithHttp', component: angular2_component_1.Angular2FirstLook06DataWithHttpComponent },
                        { path: '/angular2-first-look-07-routing.html', name: 'Angular2FirstLook07Routing', component: angular2_component_1.Angular2FirstLook07RoutingComponent },
                        { path: '/angular2-first-look-08-angular-modules.html', name: 'Angular2FirstLook08AngularModules', component: angular2_component_1.Angular2FirstLook08AngularModulesComponent },
                        { path: '/angular2-reactive-forms-00-course-contents', name: 'Angular2ReactiveForms00CourseContents', component: angular2_component_1.Angular2ReactiveForms00CourseContentsComponent },
                        { path: '/angular2-reactive-forms-01-course-overview', name: 'Angular2ReactiveForms01CourseOverview', component: angular2_component_1.Angular2ReactiveForms01CourseOverviewComponent },
                        { path: '/angular2-reactive-forms-02-introduction', name: 'Angular2ReactiveForms02Introduction', component: angular2_component_1.Angular2ReactiveForms02IntroductionComponent },
                        { path: '/angular2-reactive-forms-03-course-contents', name: 'Angular2ReactiveForms03TemplateDrivenVsReactiveForms', component: angular2_component_1.Angular2ReactiveForms03TemplateDrivenVsReactiveFormsComponent },
                        { path: '/angular2-reactive-forms-04-course-contents', name: 'Angular2ReactiveForms04BuildingAReactiveForm', component: angular2_component_1.Angular2ReactiveForms04BuildingAReactiveFormComponent },
                        { path: '/angular2-reactive-forms-05-validation', name: 'Angular2ReactiveForms05Validation', component: angular2_component_1.Angular2ReactiveForms05ValidationComponent },
                        { path: '/angular2-reactive-forms-06-reacting-to-changes', name: 'Angular2ReactiveForms06ReactingToChanges', component: angular2_component_1.Angular2ReactiveForms06ReactingToChangesComponent },
                        { path: '/angular2-reactive-forms-07-dynamically-duplicate-input-elements', name: 'Angular2ReactiveForms07DynamicallyDuplicateInputElements', component: angular2_component_1.Angular2ReactiveForms07DynamicallyDuplicateInputElementsComponent },
                        { path: '/angular2-reactive-forms-08-reactive-form-in-context', name: 'Angular2ReactiveForms08ReactiveFormInContext', component: angular2_component_1.Angular2ReactiveForms08ReactiveFormInContextComponent },
                        { path: '/angular2-reactive-forms-09-create-read-update-and-delete-crud-using-http', name: 'Angular2ReactiveForms09CreateReadUpdateAndDeleteCrudUsingHttp', component: angular2_component_1.Angular2ReactiveForms09CreateReadUpdateAndDeleteCrudUsingHttpComponent },
                        { path: '/angular2-reactive-forms-10-final-words', name: 'Angular2ReactiveForms10FinalWords', component: angular2_component_1.Angular2ReactiveForms10FinalWordsComponent },
                        { path: '/javascript', name: 'JavaScript', component: javascript_component_1.JavaScriptComponent },
                        { path: '/building-a-javascript-development-environment00-course-contents', name: 'BuildingAJavaScriptDevelopmentEnvironment00CourseContents', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment00CourseContentsComponent },
                        { path: '/building-a-javascript-development-environment01-you-need-a-starter-kit', name: 'BuildingAJavaScriptDevelopmentEnvironment01YouNeedAStarterKit', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment01YouNeedAStarterKitComponent },
                        { path: '/building-a-javascript-development-environment02-editors-and-configuration', name: 'BuildingAJavaScriptDevelopmentEnvironment02EditorsAndConfiguration', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment02EditorsAndConfigurationComponent },
                        { path: '/building-a-javascript-development-environment03-package-management', name: 'BuildingAJavaScriptDevelopmentEnvironment03PackageManagement', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment03PackageManagementComponent },
                        { path: '/building-a-javascript-development-environment04-development-web-server', name: 'BuildingAJavaScriptDevelopmentEnvironment04DevelopmentWebServer', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment04DevelopmentWebServerComponent },
                        { path: '/building-a-javascript-development-environment05-automation', name: 'BuildingAJavaScriptDevelopmentEnvironment05Automation', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment05AutomationComponent },
                        { path: '/building-a-javascript-development-environment06-transpiling', name: 'BuildingAJavaScriptDevelopmentEnvironment06Transpiling', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment06TranspilingComponent },
                        { path: '/building-a-javascript-development-environment07-bundling', name: 'BuildingAJavaScriptDevelopmentEnvironment07Bundling', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment07BundlingComponent },
                        { path: '/building-a-javascript-development-environment08-linting', name: 'BuildingAJavaScriptDevelopmentEnvironment08Linting', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment08LintingComponent },
                        { path: '/building-a-javascript-development-environment09-testing-and-continuous-integration', name: 'BuildingAJavaScriptDevelopmentEnvironment09TestingAndContinuousIntegration', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment09TestingAndContinuousIntegrationComponent },
                        { path: '/building-a-javascript-development-environment10-http-calls', name: 'BuildingAJavaScriptDevelopmentEnvironment10HTTPCalls', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment10HTTPCallsComponent },
                        { path: '/building-a-javascript-development-environment11-project-structure', name: 'BuildingAJavaScriptDevelopmentEnvironment11ProjectStructure', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment11ProjectStructureComponent },
                        { path: '/building-a-javascript-development-environment12-production-build', name: 'BuildingAJavaScriptDevelopmentEnvironment12ProductionBuild', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment12ProductionBuildComponent },
                        { path: '/building-a-javascript-development-environment13-production-deploy', name: 'BuildingAJavaScriptDevelopmentEnvironment12ProductionDeploy', component: javascript_component_1.BuildingAJavaScriptDevelopmentEnvironment13ProductionDeployComponent },
                        { path: '/jquery', name: 'JQuery', component: jquery_component_1.JQueryComponent },
                        { path: '/bootstrap', name: 'Bootstrap3', component: bootstrap3_component_1.Bootstrap3Component },
                        { path: '/visualstudio', name: 'VisualStudio', component: visualstudio_component_1.VisualStudioComponent },
                        { path: '/visualstudiocode', name: 'VisualStudioCode', component: visualstudiocode_component_1.VisualStudioCodeComponent },
                        { path: '/emmet', name: 'Emmet', component: emmet_component_1.EmmetComponent },
                        { path: '/csharp', name: 'CSharp', component: csharp_component_1.CSharpComponent },
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