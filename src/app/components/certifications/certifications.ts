import { Component } from '@angular/core';
import { CERTIFICATIONS } from '../../data/certifications';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-certifications',
  imports: [Icon, RevealDirective],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  protected readonly certifications = CERTIFICATIONS;
}
