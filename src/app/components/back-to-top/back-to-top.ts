import { Component, HostListener, signal } from '@angular/core';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-back-to-top',
  imports: [Icon],
  template: `
    <a class="top" href="#accueil" [class.top--visible]="visible()" [attr.tabindex]="visible() ? null : -1" aria-label="Retour en haut">
      <app-icon name="arrowUp" />
    </a>
  `,
  styles: `
    .top {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 40;
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text);
      opacity: 0;
      visibility: hidden;
      transform: translateY(12px);
      transition: opacity 0.3s, transform 0.3s, visibility 0.3s, border-color 0.2s, color 0.2s;
    }
    .top--visible {
      opacity: 1;
      visibility: visible;
      transform: none;
    }
    .top:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  `,
})
export class BackToTop {
  protected readonly visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 600);
  }
}
