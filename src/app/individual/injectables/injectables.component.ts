import { Component, OnInit } from "@angular/core";
import { OneModuleInjectableService } from "./one-module-injectable.service";
import { RootInjectableService } from "../../services/root-injectable.service";

@Component({
    selector: 'injectables',
    template: `
        <h2>Module providers injectable</h2>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h2>Root injectable</h2>
        <h3>This component instance</h3>
        <span>{{data}}</span>
        <br>
        <sample />
    `
}) export class InjectablesComponent implements OnInit {
    items: string[] = [];
    data: string = "";

    constructor(
        private oneModuleInyectableService: OneModuleInjectableService,
        private rootInjectableService: RootInjectableService
    ) { }
    ngOnInit(): void {
        this.items = this.oneModuleInyectableService.items;
        this.data = this.rootInjectableService.persistentData;
    }

}