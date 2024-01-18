import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { ItemsService } from "./items.service";
import { PhotosComponent } from "./detail/photos/photos.component";
import { PricesComponent } from "./detail/prices/prices.component";
import { FormsModule } from "@angular/forms";
import { PaginatorComponent } from "./list/paginator/paginator.component";
import { FilterByPagePipe } from "./list/filterByPage.pipe";
import { RoundDecimalsPipe } from "./detail/prices/roundPrice.pipe";

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
    imports: [CommonModule, ListRoutingModule, FormsModule],
    declarations: [
        ListComponent,
        DetailComponent,
        PhotosComponent,
        PricesComponent,
        PaginatorComponent,
        // pipes
        FilterByPagePipe,
        RoundDecimalsPipe
    ],
    providers: [ItemsService]
}) export class ListModule { }