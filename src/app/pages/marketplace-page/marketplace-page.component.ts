import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marketplace-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './marketplace-page.component.html',
  styleUrl: './marketplace-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketplacePageComponent { }
