import { Component } from "@angular/core";

@Component({
    selector: 'attribute-directives',
    template: `
        <h2>NgClass</h2>
        <button (click)="active = !active">Toggle active</button> <br>
        <span [ngClass]="{ redText: active }">Hello</span>
        <pre>active: {{active | json}}</pre>

        <h2>NgStyle</h2>
        <span [ngStyle]="styles">Hello</span>
    `,
    styles: `
        .redText { color: red; }
    `
}) export class AttributeDirectivesComponent {
    active: boolean = false;
    styles = { color: 'red' };
}