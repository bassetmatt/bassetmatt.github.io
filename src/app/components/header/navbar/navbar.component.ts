import { Component, input, InputSignal } from '@angular/core';
import { NgClass } from '@angular/common';

interface NavItem {
  text: string;
  path: string;
  name: string;
}
@Component({
  imports: [NgClass],
  selector: 'header-navbar',
  styleUrl: './navbar.component.scss',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public name: InputSignal<string> = input('');

  protected readonly navbarList: NavItem[] = [
    { path: '#', text: 'Home', name: 'home' },
    { path: '/portfolio', text: 'Portfolio', name: 'portfolio' },
    { path: '/resume', text: 'CV', name: 'resume' },
    { path: '/other', text: 'Other', name: 'other' },
  ];
}
