import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { SECTIONS } from '../../shared/sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly sections = SECTIONS;
  protected readonly active = signal(SECTIONS[0].id);
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.onScroll();
    // Une section est « active » quand elle traverse le milieu de l'écran.
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.active.set(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    // Les sections sont rendues après la navbar : on attend le prochain tick.
    setTimeout(() => {
      for (const s of this.sections) {
        const el = document.getElementById(s.id);
        if (el) this.observer?.observe(el);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
