import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  imports: [HeaderComponent, FooterComponent],
  selector: 'page-other',
  styleUrl: './other.component.scss',
  templateUrl: './other.component.html',
})
export class OtherComponent {}
