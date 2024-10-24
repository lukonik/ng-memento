import { Component } from '@angular/core';
import { BlueprintComponent } from '../../core/blueprint/blueprint.component';
import { UsageComponent } from '../../core/usage/usage.component';
import { UsageItemComponent } from '../../core/usage/usage-item/usage-item.component';
import { UIButtonComponent } from '../../../memento/button/button.component';
import { ComponentSourceComponent } from '../../core/component-source/component-source.component';
import { InstallationComponent } from '../../core/installation/installation.component';
import { DividerComponent } from "../../core/divider/divider.component";

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [
    ComponentSourceComponent,
    BlueprintComponent,
    UsageComponent,
    UsageItemComponent,
    InstallationComponent,
    UIButtonComponent,
    DividerComponent
],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.scss',
})
export class ButtonPageComponent {}
