import { NgModule } from "@angular/core";
import { MyFirstComponent } from "./my-first/my-first.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { StructuralDirectivesComponent } from "./structural-directives/structural-directives.component";
import { AttributeDirectivesComponent } from "./attribute-directives/attribute-directives.component";
import { CapitalizeDirective } from "./custom-directives/capitalize.directive";
import { CustomDirectivesComponent } from "./custom-directives/custom-directives.component";

const routes: Routes = [
    {
        path: '',
        component: MyFirstComponent
    },
    {
        path: 'ex-2',
        component: StructuralDirectivesComponent
    },
    {
        path: 'ex-3',
        component: AttributeDirectivesComponent
    },
    {
        path: 'ex-4',
        component: CustomDirectivesComponent
    },
];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [
        MyFirstComponent,
        StructuralDirectivesComponent,
        AttributeDirectivesComponent,
        CustomDirectivesComponent,
        // directives
        CapitalizeDirective
    ]
}) export class MyFirstModule { }