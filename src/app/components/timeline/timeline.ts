import { Component } from '@angular/core';
import { TIMELINE } from '../../data/timeline';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-timeline',
  imports: [RevealDirective],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
  protected readonly columns = [
    { title: 'Expérience', items: TIMELINE.filter((i) => i.kind === 'experience') },
    { title: 'Formation', items: TIMELINE.filter((i) => i.kind === 'education') },
  ];
}
