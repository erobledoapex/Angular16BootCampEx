import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PaginatorUtil } from "./paginator.util";

@Component({
    selector: 'paginator',
    templateUrl: './paginator.component.html',
    styleUrl: './paginator.component.scss'
}) export class PaginatorComponent implements OnInit {
    pages: number[] = [];
    @Input() totalItems: number = 0;
    @Input() itemsPerPage: number = 5;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
    currentPage: number = 1;

    ngOnInit(): void {
        this.pages = PaginatorUtil.calculatePages(this.totalItems, this.itemsPerPage);
    }

    selectPage(page: number) {
        this.currentPage = page;
        this.pageChanged.next(page);
    }
}