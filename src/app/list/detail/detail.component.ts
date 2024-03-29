import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Item } from "../list/list.component";
import { ItemsService } from "../items.service";
import { DetailUtil } from "./detail.util";

@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.scss'
}) export class DetailComponent implements OnInit {
    itemId: string | null = null;
    item?: Item;
    selectedPriceTag?: string;
    selectedPrice?: number;

    get offerPrice(): number {
        return DetailUtil.getOfferPrice(this.selectedPrice, this.item?.offerDiscount);
    }
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private itemsService: ItemsService
    ) {
        this.itemId = this.route.snapshot.paramMap.get('id');
        if (!this.itemId) {
            this.router.navigate(['list']);
        }
    }

    async ngOnInit() {
        if (!!this.itemId) {
            this.item = await this.itemsService.getItem(this.itemId);
            console.log(this.item);
        }
    }

    selectPrice(priceTag: string) {
        this.selectedPrice = this.item?.prices[priceTag];
        this.selectedPriceTag = priceTag;
    }
}