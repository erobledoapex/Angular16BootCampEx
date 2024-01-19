import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { ItemsService } from "./items.service";
import { PhotosComponent } from "./detail/photos/photos.component";
import { PricesComponent } from "./detail/prices/prices.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaginatorComponent } from "./list/paginator/paginator.component";
import { FilterByPagePipe } from "./list/filterByPage.pipe";
import { RoundDecimalsPipe } from "./detail/prices/roundPrice.pipe";
import { NewItemFormComponent } from "./list/new-item-form/new-item-form.component";

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' }, // redirect to ``
    {
        path: '',
        component: ListComponent,
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }

@NgModule({
    imports: [CommonModule, ListRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [
        ListComponent,
        DetailComponent,
        PhotosComponent,
        PricesComponent,
        PaginatorComponent,
        NewItemFormComponent,
        // pipes
        FilterByPagePipe,
        RoundDecimalsPipe
    ],
    providers: [ItemsService]
}) export class ListModule { }