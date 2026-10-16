import { Component, input, InputSignal } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  imports: [NavbarComponent],
  selector: 'main-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public name: InputSignal<string> = input('');
}
