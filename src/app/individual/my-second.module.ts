import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SampleComponent } from "./sample/sample.component";


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SampleComponent
    ],
    providers: [],
    exports: [SampleComponent]
}) export class MySecondModule { }