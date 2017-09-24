import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-mini-loader',
    templateUrl: './mini-loader.component.html',
    styleUrls: ['./mini-loader.component.css']
})

export class MiniLoaderComponent implements OnInit {

    @Input() time = 2000;
    @Input() width = 50;
    @Input() height = 50;

    showLoader = true;

    constructor() { }

    ngOnInit() {

        this.showLoad();

    }

    showLoad() {

        this.showLoader = true;

        setTimeout(() => {
            this.showLoader = false;
        }, this.time);

    }
}
