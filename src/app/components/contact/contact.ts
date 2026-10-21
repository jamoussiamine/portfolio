import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

type Status = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly status = signal<Status>('idle');
  protected readonly configured = !PROFILE.formspreeId.startsWith('VOTRE_');

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    // Champ piège anti-spam (invisible pour les humains)
    _gotcha: [''],
  });

  /** Une erreur ne s'affiche qu'une fois le champ touché ou le formulaire soumis. */
  protected showError(field: 'name' | 'email' | 'message'): boolean {
    const c = this.form.controls[field];
    return c.invalid && (c.touched || c.dirty);
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (!this.configured) {
      this.status.set('error');
      return;
    }
    this.status.set('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${PROFILE.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(this.form.getRawValue()),
      });
      if (!res.ok) throw new Error(String(res.status));
      this.status.set('sent');
      this.form.reset();
    } catch {
      this.status.set('error');
    }
  }
}
