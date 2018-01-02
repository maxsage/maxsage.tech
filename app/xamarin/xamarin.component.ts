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
    templateUrl: 'app/xamarin/xamarin.component.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinComponent {
    public pageTitle: string = "Xamarin";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-00-course-contents.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform00CourseContentsComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Course Contents";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-01-getting-started.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform01GettingStartedComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Getting Started";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-02-xaml-essentials.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform02XAMLEssentialsComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - XAML Essentials";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-03-layouts.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform03LayoutsComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Layouts";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-04-images.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform04ImagesComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Images";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-05-lists.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform05ListsComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Lists";
}
@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-06-navigation.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform06NavigationComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Navigation";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-07-forms-and-settings-pages.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform07FormsAndSettingsPagesComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Forms and Settings Pages";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-08-data-access.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform08DataAccessComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Data Access";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-09-model-view-viewmodel-architectural-pattern.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform09ModelViewViewModelArchitecturalPatternComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Model-View-ViewModel Architectural Pattern";
}

@Component({
    templateUrl: 'app/xamarin/xamarin-forms-cross-platform-10-beyond-the-basics.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class XamarinFormsCrossPlatform10BeyondTheBasicsComponent {
    public pageTitle: string = "Xamarin Forms Cross Platform - Beyond the Basics";
}