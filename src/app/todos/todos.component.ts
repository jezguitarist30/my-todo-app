import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { TodosService } from './todos.service';
import { TodoModel } from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: Array<TodoModel> = new Array<TodoModel>();

  @ViewChildren(TasksComponent) tasksComponents: QueryList<TasksComponent>;

  constructor(private _todoService: TodosService) { }

  ngOnInit() {
    this.todoList = this._todoService.get();
  }

  addTask(todo: TodoModel) {
    todo.Tasks.push({ Id: 999, Task: 'new task', Done: false });
  }

  refreshTask(event: any) {

    const todoTask = this.tasksComponents.find((item: TasksComponent, index: number) => {
      return index === event.index;
    });

    todoTask.loadTask(event.todo.Id);

  }

}
