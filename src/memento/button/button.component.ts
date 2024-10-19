import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

type BUTTON_COLOR_TYPES =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning';

type BUTTON_VARIANT_TYPES = 'flat' | 'stroked';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIButtonComponent {
  disabled = input<boolean>();
  type = input<'submit' | 'reset' | 'button'>();
  loading = input<boolean>();

  color = input<BUTTON_COLOR_TYPES>();

  variant = input<BUTTON_VARIANT_TYPES>();
}
