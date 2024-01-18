import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'roundDecimals'
}) export class RoundDecimalsPipe implements PipeTransform {
    transform(price: number) {
        const num = price.toFixed(2).toString();
        const [integer, decimals] = num.split('.');
        const i = +integer;
        if (+decimals >= 50) {
            return i + 1;
        } else if (+decimals > 0) {
            return i + .50;
        } else {
            return i;
        }
    }
}