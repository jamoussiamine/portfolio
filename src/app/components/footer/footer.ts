import { Component } from '@angular/core';
import { BUILD_DATE } from '../../data/build-info';
import { PROFILE } from '../../data/profile';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <div>
          <p>© {{ year }} {{ profile.firstName }} {{ profile.lastName }}<span class="dot">.</span> Tous droits réservés.</p>
          <p class="footer__updated">
            Dernière mise à jour : <time [attr.datetime]="updatedIso">{{ updated }}</time>
          </p>
        </div>
        <ul class="footer__social">
          <li><a [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><app-icon name="linkedin" /></a></li>
          <li><a [href]="'mailto:' + profile.email" aria-label="Email"><app-icon name="mail" /></a></li>
        </ul>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: 1px solid var(--border);
      padding: 32px 0;
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    .footer__inner {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
      justify-content: space-between;
    }
    .footer__updated {
      margin-top: 4px;
      font-size: 0.82rem;
    }
    .dot { color: var(--accent); }
    .footer__social {
      display: flex;
      gap: 18px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a {
      display: inline-flex;
      color: var(--text-muted);
      transition: color 0.2s;
    }
    a:hover { color: var(--accent); }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
  protected readonly updatedIso = BUILD_DATE.slice(0, 10);
  protected readonly updated = new Date(BUILD_DATE).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
