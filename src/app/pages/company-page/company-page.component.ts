import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-company-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './company-page.component.html',
  styleUrl: './company-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyPageComponent { }
