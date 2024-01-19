import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemsService } from "../items.service";
import { ListUtil } from "./list.util";
import { FormControl } from "@angular/forms";
import { Subscription, debounceTime } from "rxjs";

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
}) export class ListComponent implements OnInit, OnDestroy {
    items: Item[] = [];
    currentPage: number = 1;
    offersActive: boolean = false;
    filteredItems: Item[] = [];
    showForm: boolean = false;
    searchFC = new FormControl();
    subs: Subscription[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private itemsService: ItemsService
    ) { }

    get newId(): string {
        const lastId = +this.items[this.items.length - 1].id;
        return lastId + 1 + "";
    }

    async ngOnInit() {
        this.items = await this.itemsService.getItems();
        this.filterItems(this.items);
        this.subscribeToSearch();
    }

    private subscribeToSearch() {
        this.subs.push(this.searchFC.valueChanges.pipe(debounceTime(1000)).subscribe(v => {
            const filteredItems = ListUtil.filterBySearch(this.items, v);
            this.filterItems(filteredItems);
        }));
    }

    navigateToDetail(id: string) {
        this.router.navigate(['detail', id], { relativeTo: this.route });
    }

    changePage(page: number) {
        this.currentPage = page;
    }

    filterOffers(active: boolean) {
        this.offersActive = active;
        this.filterItems(this.items);
    }

    private filterItems(items: Item[]) {
        this.filteredItems = ListUtil.filterItems(items, this.offersActive);
    }

    toggleCreateItemForm() {
        this.showForm = !this.showForm;
    }

    async handleItemCreated(newItem: Item) {
        await this.itemsService.addItem(newItem);
        this.filterItems(this.items);
        this.toggleCreateItemForm();
        alert('Item creado exitosamente');
    }

    ngOnDestroy(): void {
        this.subs.forEach(s => s.unsubscribe());
        this.subs = [];
    }
}