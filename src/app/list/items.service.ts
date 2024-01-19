import { Injectable } from "@angular/core";
import { Item } from "./list/list.component";
import { hardcodedItems } from "./hardcodedItems.mock";

@Injectable()
export class ItemsService {
    items?: Item[];
    async getItems(): Promise<Item[]> {
        return new Promise((r) => {
            this.items = hardcodedItems;
            r(this.items);
        });
    }

    async addItem(item: Item): Promise<boolean> {
        this.items?.push(item);
        return true;
    }

    async getItem(id: string) {
        if (!this.items) {
            this.items = await this.getItems();
        }
        return this.items.find(i => i.id === id);
    }
}