import { Component } from "@angular/core";

@Component({
    selector: 'pipes',
    template: `
    <h3>Pipes</h3>
    <span>{{x | currency: 'MXN'}}</span>
    <br>
    <span>{{y | capitalize}}</span>
    `
}) export class PipesComponent {
    x: number = 34.223;
    y: string = "hello world";
}