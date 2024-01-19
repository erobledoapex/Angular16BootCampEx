import { Component } from "@angular/core";

@Component({
    selector: 'custom-directives',
    template: `
        <h2>Custom directive</h2>
        <span capitalize>{{text}}</span>
    `
}) export class CustomDirectivesComponent {
    text: string = 'lorem ipsum dolor';
}