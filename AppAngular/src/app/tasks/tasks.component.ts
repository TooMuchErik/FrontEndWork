import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId! : string;
  @Input({required: true}) name!: string;
  @Output() addTask = new EventEmitter<string>();

  constructor(private taskService: TaskService){}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  isAddingTask = false;

  onSelectAdd(){
    this.isAddingTask = true;
    this.addTask.emit("button");
  }

  onCancel(){
    this.isAddingTask = false;
  }

}

