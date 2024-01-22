import { AfterContentInit, Directive, ElementRef } from "@angular/core";
import { StringsUtil } from "../../utils/strings.util";

@Directive({
    selector: '[capitalize]',

}) export class CapitalizeDirective implements AfterContentInit {
    constructor(private elmRef: ElementRef) { }
    ngAfterContentInit(): void {
        const text = this.elmRef.nativeElement.innerText as string;
        this.elmRef.nativeElement.innerText = StringsUtil.capitalize(text);
    }



}