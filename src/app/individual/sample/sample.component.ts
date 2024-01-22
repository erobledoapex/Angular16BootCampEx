import { Component, OnInit } from "@angular/core";
import { RootInjectableService } from "../../services/root-injectable.service";

@Component({
    selector: 'sample',
    template: `
        <h3>Sample component instance</h3>
        <span>{{data}}</span>
    `
}) export class SampleComponent implements OnInit {
    constructor(private rootInjectable: RootInjectableService) { }
    data: string = "";

    ngOnInit(): void {
        this.data = this.rootInjectable.persistentData;
    }
}