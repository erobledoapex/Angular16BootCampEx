import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialogc',
    template: `
        <h2 mat-dialog-title>Form inside a dialog</h2>
        <mat-dialog-content>
            <div class="col">
                <label>What is your name?</label>
                <input [(ngModel)]="name" type="text" />
            </div>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button mat-dialog-close>Cancel</button>
            <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
            <button mat-button (click)="passBackData()">Submit</button>
        </mat-dialog-actions>
    `
}) export class DComponent {
    name: string = "";
    constructor(private ref: MatDialogRef<DComponent>) { }
    passBackData() {
        this.ref.close(this.name);
    }
}