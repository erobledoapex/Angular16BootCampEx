import { NgModule } from "@angular/core";
import { MyFirstComponent } from "./my-first/my-first.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { StructuralDirectivesComponent } from "./structural-directives/structural-directives.component";

const routes: Routes = [
    {
        path: '',
        component: MyFirstComponent
    },
    {
        path: 'ex-2',
        component: StructuralDirectivesComponent
    }
];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [MyFirstComponent, StructuralDirectivesComponent]
}) export class MyFirstModule { }