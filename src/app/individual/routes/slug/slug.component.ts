import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'slug',
    template: `
        <h3>Child route with dinamic slug: {{slug}}</h3>
    `
}) export class SlugComponent {
    slug: string | null = null;
    constructor(private route: ActivatedRoute) {
        this.slug = this.route.snapshot.paramMap.get('slug');
    }
}