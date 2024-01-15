import { NgModule } from "@angular/core";
import { Z1Component } from "./z1/z1.component";
import { Z2Component } from "./z2/z2.component";
import { Z3Component } from "./z3/z3.component";

const components = [Z1Component, Z2Component, Z3Component];
@NgModule({
    declarations: components,
    exports: components
}) export class ZModule { }