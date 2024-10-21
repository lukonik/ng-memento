import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-usage-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './usage-item.component.html',
  styleUrl: './usage-item.component.scss',
})
export class UsageItemComponent {
  label = input<string | undefined>();
}
