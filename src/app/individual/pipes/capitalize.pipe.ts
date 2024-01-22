import { Pipe, PipeTransform } from "@angular/core";
import { StringsUtil } from "../../utils/strings.util";

@Pipe({
    name: 'capitalize'
}) export class CapitalizePipe implements PipeTransform {
    transform(s: string) {
        return StringsUtil.capitalize(s);
    }
}