import { Component } from "@angular/core";

@Component({
    selector: 'data-binding',
    template: `
        <h2>Event binding</h2>
        <button (click)="showAlert()">Click me</button>
        <h2>One way data binding</h2>
        <input type="text" [value]="text" />
        <h2>Two way data binding</h2>
        <span>{{text2}}</span> <br>x
        <input type="text" [(ngModel)]="text2" />
    `
}) export class DataBindingComponent {
    text: string = "Hello world";
    text2: string = "Hello world 2";
    showAlert() {
        alert("I was triggered by an event");
    }
}