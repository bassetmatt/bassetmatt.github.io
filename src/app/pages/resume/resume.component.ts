import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  imports: [HeaderComponent, FooterComponent],
  selector: 'page-resume',
  styleUrl: './resume.component.scss',
  templateUrl: './resume.component.html',
})
export class ResumeComponent {}
