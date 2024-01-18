import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemsService } from "../items.service";
import { ListUtil } from "./list.util";

export interface Item {
    id: string;
    title: string;
    prices: { [tag: string]: number },
    photos: string[];
    description: string;
    offerDiscount?: number;
}

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
}) export class ListComponent implements OnInit {
    items: Item[] = [];
    currentPage: number = 1;
    offersActive: boolean = false;
    filteredItems: Item[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private itemsService: ItemsService
    ) { }

    async ngOnInit() {
        this.items = await this.itemsService.getItems();
        this.filterItems();
    }

    navigateToDetail(id: string) {
        this.router.navigate(['detail', id], { relativeTo: this.route });
    }

    changePage(page: number) {
        this.currentPage = page;
    }

    filterOffers(active: boolean) {
        this.offersActive = active;
        this.filterItems();
    }

    private filterItems() {
        this.filteredItems = ListUtil.filterItems(this.items, this.offersActive);
    }
}