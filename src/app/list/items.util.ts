import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ItemForm, ItemPhotosFG, ItemPricesFG } from "./list/new-item-form/new-item-form.component";
import { Item } from "./list/list.component";
import { NotRepeated } from "./list/new-item-form/NotRepeated.validator";

export class ItemsUtil {
    static convertFGToItem(fg: FormGroup<ItemForm>, id: string): Item {
        const value = fg.getRawValue();
        const prices = value.prices;
        const item: Item = {
            id,
            title: value.title,
            description: value.description,
            offerDiscount: value.offerDiscount,
            photos: value.photos.map(p => p.url),
            prices: prices.reduce((a, b) => {
                a[b.tag] = b.price;
                return a;
            }, {} as { [tag: string]: number })
        }
        return item;
    }

    static getNewPricesRow(): FormGroup<ItemPricesFG> {
        return new FormGroup<ItemPricesFG>({
            tag: new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z0-9\-\_]$/), NotRepeated('tag')]),
            price: new FormControl(null, [Validators.required])
        });
    }

    static getNewPhotosRow(): FormGroup<ItemPhotosFG> {
        return new FormGroup<ItemPhotosFG>({
            url: new FormControl(null, [Validators.required])
        });
    }
}