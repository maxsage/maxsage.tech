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
    var PreHighlight, WPFComponent, WPFDataBindingInDepth00CourseContentsComponent, WPFDataBindingInDepth01CourseOverviewComponent, WPFDataBindingInDepth02DataBindingOverviewComponent, WPFDataBindingInDepth03DataSourcesComponent, WPFDataBindingInDepth04BindingCoreConceptsComponent, WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent, WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent, WPFDataBindingInDepth07DesignTimeDataBindingComponent, WPFDataBindingInDepth08ContainersAndCollectionControlsComponent, WPFDataBindingInDepth09DataInputValidationComponent, WPFMVVMInDepth00CourseContentsComponent, WPFMVVMInDepth01MVVMPatternFundamentalsComponent, WPFMVVMInDepth02FirstTasteOfMVVMComponent, WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent, WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent, WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent, WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent, MVVMLightToolkitFundamentals00CourseContentsComponent, MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent, MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent, MVVMLightToolkitFundamentals03TheCoreComponentsComponent, MVVMLightToolkitFundamentals04TheExtrasComponent, MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent, MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            WPFComponent = (function () {
                function WPFComponent() {
                    this.pageTitle = "WPF";
                }
                WPFComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFComponent);
                return WPFComponent;
            }());
            exports_1("WPFComponent", WPFComponent);
            WPFDataBindingInDepth00CourseContentsComponent = (function () {
                function WPFDataBindingInDepth00CourseContentsComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Course Contents";
                }
                WPFDataBindingInDepth00CourseContentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-00-course-contents.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth00CourseContentsComponent);
                return WPFDataBindingInDepth00CourseContentsComponent;
            }());
            exports_1("WPFDataBindingInDepth00CourseContentsComponent", WPFDataBindingInDepth00CourseContentsComponent);
            WPFDataBindingInDepth01CourseOverviewComponent = (function () {
                function WPFDataBindingInDepth01CourseOverviewComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Course Overview";
                }
                WPFDataBindingInDepth01CourseOverviewComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-01-course-overview.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth01CourseOverviewComponent);
                return WPFDataBindingInDepth01CourseOverviewComponent;
            }());
            exports_1("WPFDataBindingInDepth01CourseOverviewComponent", WPFDataBindingInDepth01CourseOverviewComponent);
            WPFDataBindingInDepth02DataBindingOverviewComponent = (function () {
                function WPFDataBindingInDepth02DataBindingOverviewComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Data Binding Overview";
                }
                WPFDataBindingInDepth02DataBindingOverviewComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-02-data-binding-overview.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth02DataBindingOverviewComponent);
                return WPFDataBindingInDepth02DataBindingOverviewComponent;
            }());
            exports_1("WPFDataBindingInDepth02DataBindingOverviewComponent", WPFDataBindingInDepth02DataBindingOverviewComponent);
            WPFDataBindingInDepth03DataSourcesComponent = (function () {
                function WPFDataBindingInDepth03DataSourcesComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Data Sources";
                }
                WPFDataBindingInDepth03DataSourcesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-03-data-sources.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth03DataSourcesComponent);
                return WPFDataBindingInDepth03DataSourcesComponent;
            }());
            exports_1("WPFDataBindingInDepth03DataSourcesComponent", WPFDataBindingInDepth03DataSourcesComponent);
            WPFDataBindingInDepth04BindingCoreConceptsComponent = (function () {
                function WPFDataBindingInDepth04BindingCoreConceptsComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Binding Core Concepts";
                }
                WPFDataBindingInDepth04BindingCoreConceptsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-04-binding-core-concepts.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth04BindingCoreConceptsComponent);
                return WPFDataBindingInDepth04BindingCoreConceptsComponent;
            }());
            exports_1("WPFDataBindingInDepth04BindingCoreConceptsComponent", WPFDataBindingInDepth04BindingCoreConceptsComponent);
            WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent = (function () {
                function WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Unleashing the Full Power of Bindings";
                }
                WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-05-unleashing-the-full-power-of-bindings.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent);
                return WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent;
            }());
            exports_1("WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent", WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent);
            WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent = (function () {
                function WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Deep Dive into DataTemplates";
                }
                WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-06-deep-dive-into-datatemplates.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent);
                return WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent;
            }());
            exports_1("WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent", WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent);
            WPFDataBindingInDepth07DesignTimeDataBindingComponent = (function () {
                function WPFDataBindingInDepth07DesignTimeDataBindingComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Design Time Data Binding";
                }
                WPFDataBindingInDepth07DesignTimeDataBindingComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-07-design-time-data-binding.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth07DesignTimeDataBindingComponent);
                return WPFDataBindingInDepth07DesignTimeDataBindingComponent;
            }());
            exports_1("WPFDataBindingInDepth07DesignTimeDataBindingComponent", WPFDataBindingInDepth07DesignTimeDataBindingComponent);
            WPFDataBindingInDepth08ContainersAndCollectionControlsComponent = (function () {
                function WPFDataBindingInDepth08ContainersAndCollectionControlsComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Containers and Collection Controls";
                }
                WPFDataBindingInDepth08ContainersAndCollectionControlsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-08-containers-and-collection-controls.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth08ContainersAndCollectionControlsComponent);
                return WPFDataBindingInDepth08ContainersAndCollectionControlsComponent;
            }());
            exports_1("WPFDataBindingInDepth08ContainersAndCollectionControlsComponent", WPFDataBindingInDepth08ContainersAndCollectionControlsComponent);
            WPFDataBindingInDepth09DataInputValidationComponent = (function () {
                function WPFDataBindingInDepth09DataInputValidationComponent() {
                    this.pageTitle = "WPF Data Binding In Depth - Data Input Validation";
                }
                WPFDataBindingInDepth09DataInputValidationComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-data-binding-in-depth-09-data-input-validation.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFDataBindingInDepth09DataInputValidationComponent);
                return WPFDataBindingInDepth09DataInputValidationComponent;
            }());
            exports_1("WPFDataBindingInDepth09DataInputValidationComponent", WPFDataBindingInDepth09DataInputValidationComponent);
            WPFMVVMInDepth00CourseContentsComponent = (function () {
                function WPFMVVMInDepth00CourseContentsComponent() {
                    this.pageTitle = "WPF MVVM In Depth - Course Contents";
                }
                WPFMVVMInDepth00CourseContentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-mvvm-in-depth-00-course-contents.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFMVVMInDepth00CourseContentsComponent);
                return WPFMVVMInDepth00CourseContentsComponent;
            }());
            exports_1("WPFMVVMInDepth00CourseContentsComponent", WPFMVVMInDepth00CourseContentsComponent);
            WPFMVVMInDepth01MVVMPatternFundamentalsComponent = (function () {
                function WPFMVVMInDepth01MVVMPatternFundamentalsComponent() {
                    this.pageTitle = "WPF MVVM In Depth - MVVM Pattern Fundamentals";
                }
                WPFMVVMInDepth01MVVMPatternFundamentalsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-mvvm-in-depth-01-mvvm-pattern-fundamentals.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFMVVMInDepth01MVVMPatternFundamentalsComponent);
                return WPFMVVMInDepth01MVVMPatternFundamentalsComponent;
            }());
            exports_1("WPFMVVMInDepth01MVVMPatternFundamentalsComponent", WPFMVVMInDepth01MVVMPatternFundamentalsComponent);
            WPFMVVMInDepth02FirstTasteOfMVVMComponent = (function () {
                function WPFMVVMInDepth02FirstTasteOfMVVMComponent() {
                    this.pageTitle = "WPF MVVM In Depth - First Taste of MVVM";
                }
                WPFMVVMInDepth02FirstTasteOfMVVMComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-mvvm-in-depth-02-first-taste-of-mvvm.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFMVVMInDepth02FirstTasteOfMVVMComponent);
                return WPFMVVMInDepth02FirstTasteOfMVVMComponent;
            }());
            exports_1("WPFMVVMInDepth02FirstTasteOfMVVMComponent", WPFMVVMInDepth02FirstTasteOfMVVMComponent);
            WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent = (function () {
                function WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent() {
                    this.pageTitle = "WPF MVVM In Depth - Hooking up Views and ViewModels in MVVM";
                }
                WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-mvvm-in-depth-03-hooking-up-views-and-viewmodels-in-mvvm.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent);
                return WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent;
            }());
            exports_1("WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent", WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent);
            WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent = (function () {
                function WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent() {
                    this.pageTitle = "WPF MVVM In Depth - View/ViewModel Communication in WPF";
                }
                WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-mvvm-in-depth-04-view-viewmodel-communication-in-wpf.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent);
                return WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent;
            }());
            exports_1("WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent", WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent);
            WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent = (function () {
                function WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent() {
                    this.pageTitle = "WPF MVVM In Depth - Applied MVVM Part 1 - Hierarchies and Navigation";
                }
                WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-mvvm-in-depth-05-applied-mvvm-part-1-hierarchies-and-navigation.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent);
                return WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent;
            }());
            exports_1("WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent", WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent);
            WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent = (function () {
                function WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent() {
                    this.pageTitle = "WPF MVVM In Depth - Applied MVVM Part 2 - Validation and Dependency Injection";
                }
                WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/wpf-mvvm-in-depth-06-applied-mvvm-part-2-validation-and-dependency-injection.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent);
                return WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent;
            }());
            exports_1("WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent", WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent);
            MVVMLightToolkitFundamentals00CourseContentsComponent = (function () {
                function MVVMLightToolkitFundamentals00CourseContentsComponent() {
                    this.pageTitle = "MVVM Light Toolkit Fundamentals - Course Contents";
                }
                MVVMLightToolkitFundamentals00CourseContentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-00-course-contents.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MVVMLightToolkitFundamentals00CourseContentsComponent);
                return MVVMLightToolkitFundamentals00CourseContentsComponent;
            }());
            exports_1("MVVMLightToolkitFundamentals00CourseContentsComponent", MVVMLightToolkitFundamentals00CourseContentsComponent);
            MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent = (function () {
                function MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent() {
                    this.pageTitle = "MVVM Light Toolkit Fundamentals - Introduction to the MVVM";
                }
                MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-01-introduction-to-the-mvvm.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent);
                return MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent;
            }());
            exports_1("MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent", MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent);
            MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent = (function () {
                function MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent() {
                    this.pageTitle = "MVVM Light Toolkit Fundamentals - Refactoring the App to MVVM";
                }
                MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-02-refactoring-the-app-to-mvvm.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent);
                return MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent;
            }());
            exports_1("MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent", MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent);
            MVVMLightToolkitFundamentals03TheCoreComponentsComponent = (function () {
                function MVVMLightToolkitFundamentals03TheCoreComponentsComponent() {
                    this.pageTitle = "MVVM Light Toolkit Fundamentals - The Core Components";
                }
                MVVMLightToolkitFundamentals03TheCoreComponentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-03-the-core-components.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MVVMLightToolkitFundamentals03TheCoreComponentsComponent);
                return MVVMLightToolkitFundamentals03TheCoreComponentsComponent;
            }());
            exports_1("MVVMLightToolkitFundamentals03TheCoreComponentsComponent", MVVMLightToolkitFundamentals03TheCoreComponentsComponent);
            MVVMLightToolkitFundamentals04TheExtrasComponent = (function () {
                function MVVMLightToolkitFundamentals04TheExtrasComponent() {
                    this.pageTitle = "MVVM Light Toolkit Fundamentals - The Extras";
                }
                MVVMLightToolkitFundamentals04TheExtrasComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-04-the-extras.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MVVMLightToolkitFundamentals04TheExtrasComponent);
                return MVVMLightToolkitFundamentals04TheExtrasComponent;
            }());
            exports_1("MVVMLightToolkitFundamentals04TheExtrasComponent", MVVMLightToolkitFundamentals04TheExtrasComponent);
            MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent = (function () {
                function MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent() {
                    this.pageTitle = "MVVM Light Toolkit Fundamentals - Installing the MVVM Light Toolkit and Additional" +
                        " Components";
                }
                MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-05-installing-the-mvvm-light-toolkit-and-additional-components.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent);
                return MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent;
            }());
            exports_1("MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent", MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent);
            MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent = (function () {
                function MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent() {
                    this.pageTitle = "MVVM Light Toolkit Fundamentals - Advanced Examples with MVVM Light";
                }
                MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-06-advanced-examples-with-mvvm-light.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent);
                return MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent;
            }());
            exports_1("MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent", MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent);
        }
    }
});
//# sourceMappingURL=wpf.component.js.map