import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IndexTask } from '../../../core/interfaces';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {

  outputTaskId = output<number>();
  tasks = input<IndexTask[]>([]);

  //Define a method to delete a task from the list
  deleteTask(id: number) {
    this.outputTaskId.emit(id);
  }

 }
