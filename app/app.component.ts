import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
            <div><strong>My Firts Look to components in Angular</strong></div>
            <br>
            <p>{{firstParagraph}}</p>
            <br>
            <p>{{secondParagraph}}</p>
        </div>
    `
})
export class AppComponent {
    pageTitle : string = "My Angular 2 Learn";
    firstParagraph : string = "Lorem ipsum dolor sit amet, consectetur" +
    "adipiscing elit. Aenean rutrum, ligula id fermentum hendrerit, tellus " +
    "tellus iaculis sem, ut vehicula leo mi at nulla. Quisque sed ex suscipit," +
    " consectetur leo vitae, sollicitudin felis. Pellentesque aliquam massa a est " +
    "malesuada, ac posuere magna lacinia. Suspendisse quis tempor eros. Etiam " +
    "luctus molestie massa eget ultricies. Donec congue eros elit, at aliquet " +
    "turpis facilisis vitae. Suspendisse potenti. Nam nec sapien nisl. Vestibulum " +
    "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;" +
    " Curabitur elementum mollis ipsum vel rhoncus. Nam et auctor est. Donec " +
    "efficitur feugiat nibh ut egestas.";
    
    secondParagraph : string = "Lorem ipsum dolor sit amet, consectetur" +
    "adipiscing elit. Aenean rutrum, ligula id fermentum hendrerit, tellus " +
    "tellus iaculis sem, ut vehicula leo mi at nulla. Quisque sed ex suscipit," +
    " consectetur leo vitae, sollicitudin felis. Pellentesque aliquam massa a est " +
    "malesuada, ac posuere magna lacinia. Suspendisse quis tempor eros. Etiam " +
    "luctus molestie massa eget ultricies. Donec congue eros elit, at aliquet " +
    "turpis facilisis vitae. Suspendisse potenti. Nam nec sapien nisl. Vestibulum " +
    "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;" +
    " Curabitur elementum mollis ipsum vel rhoncus. Nam et auctor est. Donec " +
    "efficitur feugiat nibh ut egestas.";
 }