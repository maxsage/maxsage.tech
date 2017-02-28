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
    var Angular2Component, Angular2GettingStarted00CourseContentsComponent;
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
                    this.pageTitle = "Floobjar";
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
        }
    }
});
//# sourceMappingURL=angular2.component.js.map