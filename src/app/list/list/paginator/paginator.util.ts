export class PaginatorUtil {
    static calculateCurrentPageRange(page: number, itemsPerPage: number, totalItems: number): number[] {
        const range: number[] = [];
        let currentNumber = ((page - 1) * itemsPerPage) + 1;
        for (let i = 1; i <= itemsPerPage && currentNumber <= totalItems; i++) {
            range.push(currentNumber);
            currentNumber++;
        }
        return range;
    }
    static calculatePages(totalItems: number, itemsPerPage: number): number[] {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pages: number[] = [];
        let page = 1;
        while (page <= totalPages) {
            pages.push(page);
            page++;
        }
        return pages;
    }
}