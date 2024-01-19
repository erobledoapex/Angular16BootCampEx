import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Item } from "../list.component";
import { ItemsUtil } from "../../items.util";

export interface ItemForm {
    title: AbstractControl,
    description: AbstractControl,
    photos: FormArray<FormGroup<ItemPhotosFG>>,
    prices: FormArray<FormGroup<ItemPricesFG>>,
    offerDiscount: AbstractControl
}

export interface ItemPricesFG {
    tag: AbstractControl;
    price: AbstractControl;
}

export interface ItemPhotosFG {
    url: AbstractControl;
}

@Component({
    selector: 'new-item-form',
    templateUrl: './new-item-form.component.html',
    styleUrl: './new-item-form.component.scss'
}) export class NewItemFormComponent {
    @Output() itemCreated: EventEmitter<Item> = new EventEmitter<Item>();
    @Input() newId!: string;
    itemForm: FormGroup<ItemForm> = new FormGroup<ItemForm>({
        title: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
        photos: new FormArray([
            ItemsUtil.getNewPhotosRow()
        ]),
        prices: new FormArray([
            ItemsUtil.getNewPricesRow()
        ]),
        offerDiscount: new FormControl()
    });

    get photosFA(): FormArray {
        return this.itemForm.controls.photos;
    }
    get pricesFA(): FormArray {
        return this.itemForm.controls.prices;
    }

    createItem() {
        const item = ItemsUtil.convertFGToItem(this.itemForm, this.newId);
        this.itemCreated.next(item);
    }

    addPhotoRow() {
        this.photosFA.push(ItemsUtil.getNewPhotosRow())
    }

    deletePhotoRow(index: number) {
        this.photosFA.removeAt(index);
    }

    addPriceRow() {
        this.pricesFA.push(
            ItemsUtil.getNewPricesRow()
        );
    }

    deletePriceRow(index: number) {
        this.pricesFA.removeAt(index);
    }
}