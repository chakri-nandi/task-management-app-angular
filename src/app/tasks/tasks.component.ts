import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { ITask } from '../models/ITask';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  private readonly taskService = inject(TaskService);

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  get selectedUserTasks(): ITask[] {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }
}
