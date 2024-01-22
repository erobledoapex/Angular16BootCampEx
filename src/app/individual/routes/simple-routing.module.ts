import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SimpleLazyLoadingComponent } from "./simple-lazy-loading/simple-lazy-loading.component";

const routes: Routes = [
    {
        path: '',
        component: SimpleLazyLoadingComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        SimpleLazyLoadingComponent
    ]
}) export class SimpleRoutingModule { }