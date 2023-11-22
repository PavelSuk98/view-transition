import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './features-page.component.html',
  styleUrl: './features-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesPageComponent { }
