import { AfterContentInit, Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[capitalize]',

}) export class CapitalizeDirective implements AfterContentInit {
    constructor(private elmRef: ElementRef) { }
    ngAfterContentInit(): void {
        const text = this.elmRef.nativeElement.innerText as string;
        this.elmRef.nativeElement.innerText = this.capitalize(text);
    }

    capitalize(t: string): string {
        return t.charAt(0).toUpperCase() + t.slice(1);
    }

}