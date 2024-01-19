import { Component } from "@angular/core";

@Component({
    selector: 'structural-directives',
    template: `
        <h2>NgFor</h2>
        <ul>
            <li *ngFor="let item of list">{{item}}</li>
        </ul>
        <h2>NgIf</h2>
        <ul>
            <ng-container *ngFor="let item of list">
                <li *ngIf="item === 'B'">{{item}}</li>
            </ng-container>
        </ul>
        <h2>NgSwitch</h2>
        <ul>
            <li *ngFor="let item of list">
                <ng-container [ngSwitch]="item">
                    <span *ngSwitchCase="'A'">1</span>
                    <span *ngSwitchCase="'B'">2</span>
                    <span *ngSwitchCase="'C'">3</span>
                </ng-container>
            </li>
        </ul>
    `
}) export class StructuralDirectivesComponent {
    list: string[] = ['A', 'B', 'C']
}