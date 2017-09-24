import { Injectable } from '@angular/core';
import { TodoModel, TaskModel } from './todos.model';

@Injectable()
export class TodosService {

  private todoList: Array<TodoModel> = new Array<TodoModel>();

  constructor() {

    this.todoList = [
      {
        Id: 1, Title: 'First Todo',
        Tasks: [
          { Id: 1, Task: 'sample 1', Done: true },
          { Id: 2, Task: 'sample 2', Done: false },
          { Id: 3, Task: 'sample 3', Done: false }
        ]
      },
      {
        Id: 2, Title: 'Second Todo',
        Tasks: [
          { Id: 4, Task: 'sample 4', Done: true },
          { Id: 5, Task: 'sample 5', Done: true },
          { Id: 6, Task: 'sample 6', Done: false }
        ]
      },
      {
        Id: 3, Title: 'Third Todo',
        Tasks: [
          { Id: 7, Task: 'sample 7', Done: true },
          { Id: 8, Task: 'sample 8', Done: false },
          { Id: 9, Task: 'sample 9', Done: true },
          { Id: 10, Task: 'sample 10', Done: true },
          { Id: 11, Task: 'sample 11', Done: true },
          { Id: 12, Task: 'sample 12', Done: true }
        ]
      }
    ];

  }

  get(): Array<TodoModel> {
    return this.todoList;
  }

  getTasks(id: number): Array<TaskModel> {
    const todo = this.todoList.find(x => x.Id === id);

    if (todo !== undefined) {
      return todo.Tasks;
    }

    return [];
  }

}
