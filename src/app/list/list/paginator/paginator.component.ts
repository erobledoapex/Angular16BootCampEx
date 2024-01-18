import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PaginatorUtil } from "./paginator.util";

@Component({
    selector: 'paginator',
    templateUrl: './paginator.component.html',
    styleUrl: './paginator.component.scss'
}) export class PaginatorComponent implements OnInit {
    pages: number[] = [];
    private _totalItems: number = 0;
    @Input()
    set totalItems(t: number) {
        this._totalItems = t;
        if (this.initiated) {
            this.calculatePages();
        }
    }
    get totalItems(): number {
        return this._totalItems;
    }
    @Input() itemsPerPage: number = 5;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
    currentPage: number = 1;
    initiated: boolean = false;

    ngOnInit(): void {
        this.calculatePages();
        this.initiated = true;
    }

    selectPage(page: number) {
        this.currentPage = page;
        this.pageChanged.next(page);
    }

    private calculatePages() {
        this.pages = PaginatorUtil.calculatePages(this.totalItems, this.itemsPerPage);
    }
}