import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'prices',
    templateUrl: './prices.component.html',
    styleUrl: './prices.component.scss',
}) export class PricesComponent {
    private _data: { [tag: string]: number } = {};
    @Input()
    set data(d: { [tag: string]: number }) {
        this._data = d;
        this.tags = Object.keys(d);
        this.selectedTag = this.tags[0];
        this.selectedPrice.next(this.selectedTag);
    }
    get data(): { [tag: string]: number } {
        return this._data;
    }
    @Output() selectedPrice: EventEmitter<string> = new EventEmitter<string>();
    tags: string[] = [];
    selectedTag?: string;

    emitPrice(event: Event) {
        this.selectedPrice.next(event as unknown as string);
    }
}