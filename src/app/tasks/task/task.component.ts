import { Component, inject, Input } from '@angular/core';
import { ITask } from '../../models/ITask';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  private readonly taskService = inject(TaskService);

  @Input({ required: true }) task!: ITask;

  onCompleteTask(): void {
    this.taskService.removeTask(this.task.id);
  }
}
