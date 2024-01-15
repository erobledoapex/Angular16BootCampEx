import { NgModule } from "@angular/core";
import { B1Component } from "./b1/b1.component";
import { B2Component } from "./b2/b2.component";
import { B3Component } from "./b3/b3.component";
import { ZModule } from "../z/z.module";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: '', redirectTo: 'b1', pathMatch: 'full' }, // redirect to `a1`
    {
        path: 'b1',
        component: B1Component
    },
    {
        path: 'b2',
        component: B2Component
    },
    {
        path: 'b3',
        component: B3Component
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BRoutingModule { }

@NgModule({
    declarations: [B1Component, B2Component, B3Component],
    imports: [CommonModule, BRoutingModule, ZModule]
}) export class BModule { }