import { ChangeDetectionStrategy, Component, NgModule, signal } from '@angular/core';
import { IndexTask } from '../../core/interfaces';

@Component({
  selector: 'app-data-binding-page',
  imports: [],
  templateUrl: './data-binding-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataBindingPageComponent { 

  //Definir variables de las tareas

  title = 'Data Binding age';
  text_field = signal('');
  messageError = signal('');
  tasks = signal<IndexTask[]>([]);

  //Definir el metodo para agregar tareas

  resetTask() {
    this.text_field.set('');
    this.messageError.set('');
  }

    deleteTask(id: number) {
      this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  addTask() {

    if(!this.text_field().trim()) {
      this.messageError.set('The task name is required');
      return;
    }

    const newTask: IndexTask = {
      id: this.tasks().length + 1,
      name: this.text_field()
    };


    this.tasks.update(tasks => [...tasks, newTask]);
    this.resetTask
  }

}
