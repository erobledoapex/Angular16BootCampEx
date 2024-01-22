import { NgModule } from "@angular/core";
import { MyFirstComponent } from "./my-first/my-first.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { StructuralDirectivesComponent } from "./structural-directives/structural-directives.component";
import { AttributeDirectivesComponent } from "./attribute-directives/attribute-directives.component";
import { CapitalizeDirective } from "./custom-directives/capitalize.directive";
import { CustomDirectivesComponent } from "./custom-directives/custom-directives.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { FormsModule } from "@angular/forms";
import { InjectablesComponent } from "./injectables/injectables.component";
import { OneModuleInjectableService } from "./injectables/one-module-injectable.service";
import { MySecondModule } from "./my-second.module";
import { PipesComponent } from "./pipes/pipes.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";

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
    {
        path: 'ex-5',
        component: DataBindingComponent
    },
    {
        path: 'ex-6',
        component: InjectablesComponent
    },
    {
        path: 'ex-7',
        component: PipesComponent
    },
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        MySecondModule
    ],
    declarations: [
        MyFirstComponent,
        StructuralDirectivesComponent,
        AttributeDirectivesComponent,
        CustomDirectivesComponent,
        DataBindingComponent,
        InjectablesComponent,
        PipesComponent,
        // directives
        CapitalizeDirective,
        // pipes
        CapitalizePipe,
    ],
    providers: [OneModuleInjectableService]
}) export class MyFirstModule { }