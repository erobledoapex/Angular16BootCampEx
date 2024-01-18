import { Item } from "./list.component";

export class ListUtil {
    static filterItems(items: Item[], byOffer: boolean): Item[] {
        if (byOffer) {
            return items.filter(i => !!i.offerDiscount);
        }
        return items;
    }
}