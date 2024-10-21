import { Component, input } from '@angular/core';

@Component({
  selector: 'app-usage-item',
  standalone: true,
  imports: [],
  templateUrl: './usage-item.component.html',
  styleUrl: './usage-item.component.scss',
})
export class UsageItemComponent {
  label = input.required<string>();
}
