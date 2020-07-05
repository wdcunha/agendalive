# Agenda Live

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Tutorial source

This is a project of a tutorial [Angular 9 tutorial](https://www.youtube.com/playlist?list=PL8iIphQOyG-DSLV6qWs8wh37o0R_F9Q_Q) from Michelli Brito.

It was used toolbar from [material](https://material.angular.io/components/toolbar/examples), as well [button raised](https://material.angular.io/components/button/overview) and [icon](https://material.angular.io/components/icon/examples). In order to organize content, it was used [tabs first](https://material.angular.io/components/tabs/examples). Some css was used to get it a little better of appearance. 

[Card](https://material.angular.io/components/card/examples) is another component added to make lives available and it is set to show 3 per line. So it was utilized this defintion for responsiveness below, where the first one defines on biggers sreens that the line will be diveded in 3 cards:
                  ```fxFlex="0 1 calc(33.3% - 11px)"
                  fxFlex.lt-md="0 1 calc(50% - 11px)"
                  fxFlex.lt-sm="100%"```
This definitions depends on the package [flex-layout](https://www.npmjs.com/package/@angular/flex-layout) and some examples of how to use it is on the page [Angular Flex-Layout Demos](). fxFlex align in vertical axis and fxLayoutAlign, horizontal. When used 70, 5 and 25, they give 100% in total.

It was used ng-container to execute layout grid definitions in the file [live-list-component.html](src/app/views/home/home.component.html), where was put ngfor to iterate livesPrevious that is retrieved from backend, thus creating a mat-card for each live fetched, being devided into 3 cards as defined above with fxFlex and changing accordingly to the screen size.

SafeResourceUrl was used to show content as a link inside cards for each live, as DomSanitizer was added to constructor and within the getLives method it call its methos bypassSecurityTrustResourceUrl in order to make it clickable as a link.

## Database

In order to have data, I needed to clone the project indicated in the video [Curso Angular 9 #07 Criando Models](https://www.youtube.com/watch?v=_u5SOAYQhtw&list=PL8iIphQOyG-DSLV6qWs8wh37o0R_F9Q_Q&index=7) on her repo at github, [Michelli Brito repo](https://github.com/MichelliBrito/agendalive) and I pushed it to my [github repo](https://github.com/wdcunha/agendalivebackend).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
