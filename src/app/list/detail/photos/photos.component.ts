import { Component, Input } from "@angular/core";

@Component({
    selector: 'photos',
    templateUrl: './photos.component.html',
    styleUrl: './photos.component.scss'
}) export class PhotosComponent {
    private _photos: string[] = [];
    @Input()
    set media(p: string[]) {
        this._photos = p;
        this.currentPhoto = p[0];
    }
    get media(): string[] {
        return this._photos;
    }

    currentPhoto?: string;

    pickPhoto(photo: string) {
        this.currentPhoto = photo;
    }
}