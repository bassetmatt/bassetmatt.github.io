import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  imports: [HeaderComponent, FooterComponent],
  selector: 'page-portfolio',
  styleUrl: './portfolio.component.scss',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {}
