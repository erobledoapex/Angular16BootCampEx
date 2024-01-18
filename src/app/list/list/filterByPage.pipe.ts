import { Pipe, PipeTransform } from "@angular/core";
import { Item } from "./list.component";
import { PaginatorUtil } from "./paginator/paginator.util";

@Pipe({
    name: 'filterByPage'
}) export class FilterByPagePipe implements PipeTransform {
    transform(items: Item[], currentPage: number, itemsPerPage: number, totalItems: number) {
        const currentRange: number[] = PaginatorUtil.calculateCurrentPageRange(currentPage, itemsPerPage, totalItems);
        return items.filter((_item, i) => currentRange.includes(i + 1));
    }
}