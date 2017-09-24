import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {

    @Input() time = 2000;
    @Input() width = 50;
    @Input() height = 50;

    showLoader = true;

    constructor() { }

    ngOnInit() {

        setTimeout(() => {
            this.showLoader = false;
        }, this.time);

    }


}
