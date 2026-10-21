import { Component, signal } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = PROFILE;
  /** Passe à true si photo.jpg est absente : on affiche alors les initiales. */
  protected readonly photoMissing = signal(false);
  protected readonly initials = (PROFILE.firstName.split(' ').at(-1)![0] + PROFILE.lastName[0]).toUpperCase();
}
