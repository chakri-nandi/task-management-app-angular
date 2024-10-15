import { Component, inject, Input } from '@angular/core';
import { ITask } from '../../models/ITask';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private taskService = inject(TaskService);

  @Input({required: true}) task!: ITask;

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
