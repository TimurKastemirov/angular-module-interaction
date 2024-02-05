# ModuleInteraction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project purpose

This project shows how modules interact with each other in Angular.
When provided services are seen from components and services in different modules.

## Project structure

The project is divided into 4 modules:
- AppModule
- CoreModule
- FeatureModule
- PagesModule

The AppModule is the main module of the application. It is the root module of the application.
The CoreModule is a module that contains services that are used throughout the application and components that are used in AppModule.
The FeatureModule is a module that contains components that are used throughout the application.
The PagesModule is a module that contains components that are used throughout the application.

# Explanation of module interaction

The AppModule imports the CoreModule.
So all services from CoreModule are seen for entire application.
CoreModule's components, directives and pipes are seen only from AppModule's components.

PagesModule is lazy-loaded and imports the FeatureModule.
FeatureModule's services are seen from PagesModule's components and from other modules which are loaded as children via routing.

All FeatureModule's components are seen only from PagesModule.
To make FeatureModule's components visible from PagesModule's children lazy-loaded modules we need import their module (FeatureModule) to lazy-loaded modules.

All root provided services are singletons for entire application and are visible for all modules (entire application).
Example: ProductListModule is lazy-loaded. Its ProductListRootProvidedService (provided in root) is a singleton for entire application and can be injected into any component or service from any module, even from app.component.

But everything that is used in app.component goes to main.js file and increases the size of the main.js file.

# Services

## Provided in root services
Provided in root services are instantiated when component or service that injects them is instantiated.
If we have 10 services provided in root, and we inject them into app.component, all 10 services will be instantiated when app.component is instantiated.
If we have 10 services provided in root, and we inject them into 10 different components, each service will be instantiated when the component that injects it is instantiated.
If component is in lazy-loaded module, the service (provided in root) will be instantiated when the module is loaded and component will be instantiated.
If we have a service A that is provided in root, and we inject it into a service B that is provided in module or in component, the service A will be instantiated when the service B that injects it is instantiated.
if we inject service A that is provided in root into a multiple services or components, the service A will be instantiated ONCE when the first service or component that injects it is instantiated.

## Provided in module services

## Provided in component services

# Components, directives and pipes
All components, directives and pipes are visible only from the module where they are declared, unless they are exported from the module and imported to another module.
If we need to use a component, directive or pipe from another module, we need to export it from the module where it is declared and import it into the module where we want to use it.
Components, directives and pipes that are declared in the AppModule are visible only in AppModule's components and to make them visible in other modules, we need to export them from the AppModule and import AppModule (what is NOT RECOMMENDED TO DO) into the module where we want to use them.
So components, directives and pipes are module scoped and are visible only from the module where they are declared or from the module where their module is imported.
