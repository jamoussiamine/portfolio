import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/** Fait apparaître l'élément (fade + slide) quand il entre dans l'écran. */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal', '[style.transition-delay.ms]': 'revealDelay()' },
})
export class RevealDirective implements OnInit, OnDestroy {
  readonly revealDelay = input(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
