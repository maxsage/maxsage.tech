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
    var PreHighlight, XamarinComponent, XamarinFormsCrossPlatform00CourseContentsComponent, XamarinFormsCrossPlatform01GettingStartedComponent, XamarinFormsCrossPlatform02XAMLEssentialsComponent, XamarinFormsCrossPlatform03LayoutsComponent, XamarinFormsCrossPlatform04ImagesComponent, XamarinFormsCrossPlatform05ListsComponent, XamarinFormsCrossPlatform06NavigationComponent, XamarinFormsCrossPlatform07FormsAndSettingsPagesComponent, XamarinFormsCrossPlatform08DataAccessComponent, XamarinFormsCrossPlatform09ModelViewViewModelArchitecturalPatternComponent, XamarinFormsCrossPlatform10BeyondTheBasicsComponent;
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
            XamarinComponent = (function () {
                function XamarinComponent() {
                    this.pageTitle = "Xamarin";
                }
                XamarinComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinComponent);
                return XamarinComponent;
            }());
            exports_1("XamarinComponent", XamarinComponent);
            XamarinFormsCrossPlatform00CourseContentsComponent = (function () {
                function XamarinFormsCrossPlatform00CourseContentsComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Course Contents";
                }
                XamarinFormsCrossPlatform00CourseContentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-00-course-contents.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform00CourseContentsComponent);
                return XamarinFormsCrossPlatform00CourseContentsComponent;
            }());
            exports_1("XamarinFormsCrossPlatform00CourseContentsComponent", XamarinFormsCrossPlatform00CourseContentsComponent);
            XamarinFormsCrossPlatform01GettingStartedComponent = (function () {
                function XamarinFormsCrossPlatform01GettingStartedComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Getting Started";
                }
                XamarinFormsCrossPlatform01GettingStartedComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-01-getting-started.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform01GettingStartedComponent);
                return XamarinFormsCrossPlatform01GettingStartedComponent;
            }());
            exports_1("XamarinFormsCrossPlatform01GettingStartedComponent", XamarinFormsCrossPlatform01GettingStartedComponent);
            XamarinFormsCrossPlatform02XAMLEssentialsComponent = (function () {
                function XamarinFormsCrossPlatform02XAMLEssentialsComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - XAML Essentials";
                }
                XamarinFormsCrossPlatform02XAMLEssentialsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-02-xaml-essentials.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform02XAMLEssentialsComponent);
                return XamarinFormsCrossPlatform02XAMLEssentialsComponent;
            }());
            exports_1("XamarinFormsCrossPlatform02XAMLEssentialsComponent", XamarinFormsCrossPlatform02XAMLEssentialsComponent);
            XamarinFormsCrossPlatform03LayoutsComponent = (function () {
                function XamarinFormsCrossPlatform03LayoutsComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Layouts";
                }
                XamarinFormsCrossPlatform03LayoutsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-03-layouts.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform03LayoutsComponent);
                return XamarinFormsCrossPlatform03LayoutsComponent;
            }());
            exports_1("XamarinFormsCrossPlatform03LayoutsComponent", XamarinFormsCrossPlatform03LayoutsComponent);
            XamarinFormsCrossPlatform04ImagesComponent = (function () {
                function XamarinFormsCrossPlatform04ImagesComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Images";
                }
                XamarinFormsCrossPlatform04ImagesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-04-images.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform04ImagesComponent);
                return XamarinFormsCrossPlatform04ImagesComponent;
            }());
            exports_1("XamarinFormsCrossPlatform04ImagesComponent", XamarinFormsCrossPlatform04ImagesComponent);
            XamarinFormsCrossPlatform05ListsComponent = (function () {
                function XamarinFormsCrossPlatform05ListsComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Lists";
                }
                XamarinFormsCrossPlatform05ListsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-05-lists.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform05ListsComponent);
                return XamarinFormsCrossPlatform05ListsComponent;
            }());
            exports_1("XamarinFormsCrossPlatform05ListsComponent", XamarinFormsCrossPlatform05ListsComponent);
            XamarinFormsCrossPlatform06NavigationComponent = (function () {
                function XamarinFormsCrossPlatform06NavigationComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Navigation";
                }
                XamarinFormsCrossPlatform06NavigationComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-06-navigation.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform06NavigationComponent);
                return XamarinFormsCrossPlatform06NavigationComponent;
            }());
            exports_1("XamarinFormsCrossPlatform06NavigationComponent", XamarinFormsCrossPlatform06NavigationComponent);
            XamarinFormsCrossPlatform07FormsAndSettingsPagesComponent = (function () {
                function XamarinFormsCrossPlatform07FormsAndSettingsPagesComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Forms and Settings Pages";
                }
                XamarinFormsCrossPlatform07FormsAndSettingsPagesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-07-forms-and-settings-pages.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform07FormsAndSettingsPagesComponent);
                return XamarinFormsCrossPlatform07FormsAndSettingsPagesComponent;
            }());
            exports_1("XamarinFormsCrossPlatform07FormsAndSettingsPagesComponent", XamarinFormsCrossPlatform07FormsAndSettingsPagesComponent);
            XamarinFormsCrossPlatform08DataAccessComponent = (function () {
                function XamarinFormsCrossPlatform08DataAccessComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Data Access";
                }
                XamarinFormsCrossPlatform08DataAccessComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-08-data-access.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform08DataAccessComponent);
                return XamarinFormsCrossPlatform08DataAccessComponent;
            }());
            exports_1("XamarinFormsCrossPlatform08DataAccessComponent", XamarinFormsCrossPlatform08DataAccessComponent);
            XamarinFormsCrossPlatform09ModelViewViewModelArchitecturalPatternComponent = (function () {
                function XamarinFormsCrossPlatform09ModelViewViewModelArchitecturalPatternComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Model-View-ViewModel Architectural Pattern";
                }
                XamarinFormsCrossPlatform09ModelViewViewModelArchitecturalPatternComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-09-model-view-viewmodel-architectural-pattern.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform09ModelViewViewModelArchitecturalPatternComponent);
                return XamarinFormsCrossPlatform09ModelViewViewModelArchitecturalPatternComponent;
            }());
            exports_1("XamarinFormsCrossPlatform09ModelViewViewModelArchitecturalPatternComponent", XamarinFormsCrossPlatform09ModelViewViewModelArchitecturalPatternComponent);
            XamarinFormsCrossPlatform10BeyondTheBasicsComponent = (function () {
                function XamarinFormsCrossPlatform10BeyondTheBasicsComponent() {
                    this.pageTitle = "Xamarin Forms Cross Platform - Beyond the Basics";
                }
                XamarinFormsCrossPlatform10BeyondTheBasicsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/xamarin/xamarin-forms-cross-platform-10-beyond-the-basics.html',
                        directives: [router_1.ROUTER_DIRECTIVES, PreHighlight]
                    }), 
                    __metadata('design:paramtypes', [])
                ], XamarinFormsCrossPlatform10BeyondTheBasicsComponent);
                return XamarinFormsCrossPlatform10BeyondTheBasicsComponent;
            }());
            exports_1("XamarinFormsCrossPlatform10BeyondTheBasicsComponent", XamarinFormsCrossPlatform10BeyondTheBasicsComponent);
        }
    }
});
//# sourceMappingURL=xamarin.component.js.map