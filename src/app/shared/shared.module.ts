import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Component
import { LoaderComponent } from './loader/loader.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MiniLoaderComponent } from './mini-loader/mini-loader.component';

// Directives
import { HugeTextDirective } from './directives/highlight-text.directive';
import { HighlightClickDirective } from './directives/highlight-click.directive';

// Pipes
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        LoaderComponent,
        HugeTextDirective,
        HighlightClickDirective,

        EllipsisPipe,
        NavigationComponent,
        FilterPipe,
        MiniLoaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [
        LoaderComponent,
        HugeTextDirective,
        HighlightClickDirective,
        EllipsisPipe,
        NavigationComponent,
        FilterPipe,
        MiniLoaderComponent
    ]
})

export class SharedModule {

}
