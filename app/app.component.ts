import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<app-title [subtitle]="subtitle"></app-title>
<nav>
  <a routerLink="contact" routerLinkActive="active">Contact</a>
  <a routerLink="crisis" routerLinkActive="active">Crisis Center</a>
</nav>
<router-outlet></router-outlet>
`
})
export class AppComponent {
  subtitle: string = '(Final)';
}
