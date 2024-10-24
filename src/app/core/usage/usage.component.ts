import { Component } from '@angular/core';
import { DividerComponent } from "../divider/divider.component";

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './usage.component.html',
  styleUrl: './usage.component.scss'
})
export class UsageComponent {

}
