"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "My Angular 2 Learn";
        this.firstParagraph = "Lorem ipsum dolor sit amet, consectetur" +
            "adipiscing elit. Aenean rutrum, ligula id fermentum hendrerit, tellus " +
            "tellus iaculis sem, ut vehicula leo mi at nulla. Quisque sed ex suscipit," +
            " consectetur leo vitae, sollicitudin felis. Pellentesque aliquam massa a est " +
            "malesuada, ac posuere magna lacinia. Suspendisse quis tempor eros. Etiam " +
            "luctus molestie massa eget ultricies. Donec congue eros elit, at aliquet " +
            "turpis facilisis vitae. Suspendisse potenti. Nam nec sapien nisl. Vestibulum " +
            "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;" +
            " Curabitur elementum mollis ipsum vel rhoncus. Nam et auctor est. Donec " +
            "efficitur feugiat nibh ut egestas.";
        this.secondParagraph = "Lorem ipsum dolor sit amet, consectetur" +
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n        <div><h1>{{pageTitle}}</h1>\n            <div><strong>My Firts Look to components in Angular</strong></div>\n            <br>\n            <p>{{firstParagraph}}</p>\n            <br>\n            <p>{{secondParagraph}}</p>\n        </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map