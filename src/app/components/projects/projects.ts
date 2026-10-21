import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [Icon, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
