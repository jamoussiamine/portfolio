import { Component, computed, input } from '@angular/core';
import { ICONS, IconName } from './icons';

@Component({
  selector: 'app-icon',
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path [attr.d]="path()" />
    </svg>
  `,
  styles: ':host { display: inline-flex; }',
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  protected readonly path = computed(() => ICONS[this.name()]);
}
