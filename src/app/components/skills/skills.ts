import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/skills';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
