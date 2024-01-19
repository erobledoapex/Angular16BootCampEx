import { NgModule } from "@angular/core";
import { MyFirstComponent } from "./my-first/my-first.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: MyFirstComponent
    }
];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [MyFirstComponent]
}) export class MyFirstModule { }