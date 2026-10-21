import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly typed = signal('');

  private timer?: ReturnType<typeof setTimeout>;
  private wordIndex = 0;
  private deleting = false;

  ngOnInit(): void {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      this.typed.set(this.profile.titleWords[0]);
      return;
    }
    this.tick();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  /** Tape puis efface chaque mot de titleWords, en boucle. Un seul mot : tapé une fois, puis il reste. */
  private tick(): void {
    const word = this.profile.titleWords[this.wordIndex];
    const current = this.typed();
    let delay = this.deleting ? 45 : 95;

    if (!this.deleting && current === word) {
      if (this.profile.titleWords.length === 1) return;
      this.deleting = true;
      delay = 1800;
    } else if (this.deleting && current === '') {
      this.deleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.profile.titleWords.length;
      delay = 350;
    } else {
      this.typed.set(this.deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1));
    }
    this.timer = setTimeout(() => this.tick(), delay);
  }
}
