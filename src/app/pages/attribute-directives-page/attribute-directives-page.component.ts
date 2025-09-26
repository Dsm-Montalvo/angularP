import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-attribute-directives-page',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute-directives-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttributeDirectivesPageComponent { 

  title = 'Attribute Directives';
  state = signal<'active' | 'error' | 'neutral'>('neutral');

  message = computed(() => {
    switch (this.state()) {
      case 'active':
        return 'The current is active';
      case 'error':
        return 'The current is error';
      case 'neutral':
        return 'The current is neutral';
  }
  });

  setActive() {
    this.state.set('active');
  }

  setError() {
    this.state.set('error');
  }

  setNeutral() {
    this.state.set('neutral');
  }

}
