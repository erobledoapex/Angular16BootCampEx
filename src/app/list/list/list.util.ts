import { Item } from "./list.component";

export class ListUtil {
    static filterBySearch(filteredItems: Item[], v: string): Item[] {
        return filteredItems.filter(i => i.title.includes(v) || i.description.includes(v));
    }
    static filterItems(items: Item[], byOffer: boolean): Item[] {
        if (byOffer) {
            return items.filter(i => !!i.offerDiscount);
        }
        return items;
    }
}