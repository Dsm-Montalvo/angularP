import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { IndexTask } from '../../../core/interfaces';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent { 

  text_field = signal('');
  messageError = signal('');
  outputTask = output<IndexTask>();

  resetTask() {
    this.text_field.set('');
    this.messageError.set('');
  }

  addTask() {
  
      if(!this.text_field().trim()) {
        this.messageError.set('The task name is required');
        return;
      }
  
      const newTask: IndexTask = {
        id: Math.floor(Math.random() * 10000),
        name: this.text_field()
      };
  
  
      this.outputTask.emit(newTask);
      this.resetTask
    }

}
