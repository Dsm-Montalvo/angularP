import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { IndexTask } from '../../core/interfaces';
import { TaskComponent } from '../../shared/components/task/task.component';
import { TaskListComponent } from '../../shared/components/task-list/task-list.component';

@Component({
  selector: 'app-service-page',
  imports: [TaskComponent, TaskListComponent],
  templateUrl: './service-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicePageComponent { 

  taskService = inject(TaskService);

  addNewTask(task: IndexTask){
    this.taskService.addTask(task);
  }

  removeTask(taskId: number){
    this.taskService.removeTask(taskId);
  }

}
