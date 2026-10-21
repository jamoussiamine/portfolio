import { Component } from '@angular/core';
import { About } from './components/about/about';
import { BackToTop } from './components/back-to-top/back-to-top';
import { Contact } from './components/contact/contact';
import { Certifications } from './components/certifications/certifications';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Timeline } from './components/timeline/timeline';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects, Timeline, Certifications, Contact, Footer, BackToTop],
  template: `
    <a class="skip-link" href="#a-propos">Aller au contenu</a>
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-timeline />
      <app-certifications />
      <app-contact />
    </main>
    <app-footer />
    <app-back-to-top />
  `,
  styleUrl: './app.scss',
})
export class App {}
