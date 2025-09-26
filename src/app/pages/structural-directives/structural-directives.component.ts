import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.component.html',
})
export class StructuralDirectivesComponent { 

  isVisible = signal(true);

  toggleVisibility() {
    this.isVisible.update(v => !v);
  }

  //switch

  viewMode = signal <'none' | 'list' | 'grid'>('none');

  setViewMode(mode: 'none' | 'list' | 'grid'){
    this.viewMode.set(mode);
  }

  // cycle - For loop
  User = signal([
    { id:1, name: 'Alice', role: 'Admin' },
    { id:2, name: 'Bob', role: 'User' },
    { id:3, name: 'Charlie', role: 'User' }
  ]);

}
