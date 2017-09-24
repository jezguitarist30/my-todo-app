import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../todos.model';

@Component({
    selector: 'app-todo-header',
    templateUrl: './todo-header.component.html',
    styleUrls: ['./todo-header.css']
})

export class TodoHeaderComponent {

    @Input() todo: TodoModel;
    @Input() index: number;

    @Output() refreshEvent: EventEmitter<any> = new EventEmitter<any>();

    refreshList(todo: TodoModel) {
        this.refreshEvent.emit({todo: todo, index: this.index});
    }
}
