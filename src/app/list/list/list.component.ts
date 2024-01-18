import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemsService } from "../items.service";

export interface Item {
    id: string;
    title: string;
    prices: { [tag: string]: number },
    photos: string[];
    description: string;
}

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
}) export class ListComponent implements OnInit {
    items: Item[] = [];
    currentPage: number = 1;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private itemsService: ItemsService
    ) { }

    async ngOnInit() {
        this.items = await this.itemsService.getItems();
    }

    navigateToDetail(id: string) {
        this.router.navigate(['detail', id], { relativeTo: this.route });
    }

    changePage(page: number) {
        this.currentPage = page;
    }
}