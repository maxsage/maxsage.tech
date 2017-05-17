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
    templateUrl: 'app/wpf/wpf.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFComponent {
    public pageTitle: string = "WPF";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-00-course-contents.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth00CourseContentsComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Course Contents";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-01-course-overview.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth01CourseOverviewComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Course Overview";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-02-data-binding-overview.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth02DataBindingOverviewComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Data Binding Overview";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-03-data-sources.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth03DataSourcesComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Data Sources";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-04-binding-core-concepts.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth04BindingCoreConceptsComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Binding Core Concepts";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-05-unleashing-the-full-power-of-bindings.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth05UnleashingTheFullPowerOfBindingsComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Unleashing the Full Power of Bindings";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-06-deep-dive-into-datatemplates.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth06DeepDiveIntoDataTemplatesComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Deep Dive into DataTemplates";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-07-design-time-data-binding.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth07DesignTimeDataBindingComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Design Time Data Binding";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-08-containers-and-collection-controls.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth08ContainersAndCollectionControlsComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Containers and Collection Controls";
}

@Component({
    templateUrl: 'app/wpf/wpf-data-binding-in-depth-09-data-input-validation.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFDataBindingInDepth09DataInputValidationComponent {
    public pageTitle: string = "WPF Data Binding In Depth - Data Input Validation";
}

@Component({
    templateUrl: 'app/wpf/wpf-mvvm-in-depth-00-course-contents.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFMVVMInDepth00CourseContentsComponent {
    public pageTitle: string = "WPF MVVM In Depth - Course Contents";
}

@Component({
    templateUrl: 'app/wpf/wpf-mvvm-in-depth-01-mvvm-pattern-fundamentals.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFMVVMInDepth01MVVMPatternFundamentalsComponent {
    public pageTitle: string = "WPF MVVM In Depth - MVVM Pattern Fundamentals";
}

@Component({
    templateUrl: 'app/wpf/wpf-mvvm-in-depth-02-first-taste-of-mvvm.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFMVVMInDepth02FirstTasteOfMVVMComponent {
    public pageTitle: string = "WPF MVVM In Depth - First Taste of MVVM";
}

@Component({
    templateUrl: 'app/wpf/wpf-mvvm-in-depth-03-hooking-up-views-and-viewmodels-in-mvvm.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFMVVMInDepth03HookingUpViewsAndViewModelsInMVVMComponent {
    public pageTitle: string = "WPF MVVM In Depth - Hooking up Views and ViewModels in MVVM";
}

@Component({
    templateUrl: 'app/wpf/wpf-mvvm-in-depth-04-view-viewmodel-communication-in-wpf.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFMVVMInDepth04ViewViewModelCommunicationInWPFComponent {
    public pageTitle: string = "WPF MVVM In Depth - View/ViewModel Communication in WPF";
}

@Component({
    templateUrl: 'app/wpf/wpf-mvvm-in-depth-05-applied-mvvm-part-1-hierarchies-and-navigation.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFMVVMInDepth05AppliedMVVMPart1HierarchiesAndNavigationComponent {
    public pageTitle: string = "WPF MVVM In Depth - Applied MVVM Part 1 - Hierarchies and Navigation";
}

@Component({
    templateUrl: 'app/wpf/wpf-mvvm-in-depth-06-applied-mvvm-part-2-validation-and-dependency-injection.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WPFMVVMInDepth06AppliedMVVMPart2ValidationAndDependencyInjectionComponent {
    public pageTitle: string = "WPF MVVM In Depth - Applied MVVM Part 2 - Validation and Dependency Injection";
}

@Component({
    templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-00-course-contents.html',
    directives: [ROUTER_DIRECTIVES]
})
export class MVVMLightToolkitFundamentals00CourseContentsComponent {
    public pageTitle: string = "MVVM Light Toolkit Fundamentals - Course Contents";
}

@Component({
    templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-01-introduction-to-the-mvvm.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class MVVMLightToolkitFundamentals01IntroductionToTheMVVMComponent {
    public pageTitle: string = "MVVM Light Toolkit Fundamentals - Introduction to the MVVM";
}

@Component({
    templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-02-refactoring-the-app-to-mvvm.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class MVVMLightToolkitFundamentals02RefactoringTheAppToMVVMComponent {
    public pageTitle: string = "MVVM Light Toolkit Fundamentals - Refactoring the App to MVVM";
}

@Component({
    templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-03-the-core-components.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class MVVMLightToolkitFundamentals03TheCoreComponentsComponent {
    public pageTitle: string = "MVVM Light Toolkit Fundamentals - The Core Components";
}

@Component({
    templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-04-the-extras.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class MVVMLightToolkitFundamentals04TheExtrasComponent {
    public pageTitle: string = "MVVM Light Toolkit Fundamentals - The Extras";
}

@Component({
    templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-05-installing-the-mvvm-light-toolkit-and-additional-components.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class MVVMLightToolkitFundamentals05InstallingTheMVVMLightToolkitAndAdditionalComponentsComponent {
    public pageTitle: string = "MVVM Light Toolkit Fundamentals - Installing the MVVM Light Toolkit and Additional" +
        " Components";
}

@Component({
    templateUrl: 'app/wpf/mvvm-light-toolkit-fundamentals-06-advanced-examples-with-mvvm-light.html',
    directives: [ROUTER_DIRECTIVES, PreHighlight]
})
export class MVVMLightToolkitFundamentals06AdvancedExamplesWithMVVMLightComponent {
    public pageTitle: string = "MVVM Light Toolkit Fundamentals - Advanced Examples with MVVM Light";
}
