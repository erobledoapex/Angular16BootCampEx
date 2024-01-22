import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DComponent } from "./dialog/dialog.component";

@Component({
    selector: 'material',
    template: `
    <h3>Material basic buttons</h3>
    <button mat-button>Basic</button>
    <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>
    <h3>Raised buttons</h3>
    <button mat-raised-button (click)="openModal()">Click me</button>
    <button mat-raised-button color="primary">Primary</button>
    <button mat-raised-button color="accent">Accent</button>
    <button mat-raised-button color="warn">Warn</button>
    <button mat-raised-button disabled>Disabled</button>
    <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
    <hr>
    @if (name) {
        <span>Your name is: {{name}}</span>
    }
    `
}) export class MaterialComponent {
    name?: string;
    constructor(private dialog: MatDialog) { }
    openModal() {
        const ref = this.dialog.open(DComponent, {
            id: 'my-first-dialog',
            disableClose: true
        });
        ref.afterClosed().subscribe(name => {
            this.name = name;
        });
    }
}