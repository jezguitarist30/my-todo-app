import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { TodosService } from '../todos.service';
import { TaskModel } from '../todos.model';

import { MiniLoaderComponent } from '../../shared/mini-loader/mini-loader.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @ViewChild(MiniLoaderComponent) myLoader: MiniLoaderComponent;

  @Input() keyword = '';
  taskList: Array<TaskModel> = new Array<TaskModel>();

  constructor(private _todoService: TodosService) { }

  ngOnInit() {
  }

  loadTask(id: number) {
    this.myLoader.showLoad();
    this.taskList = this._todoService.getTasks(id);
  }

}
