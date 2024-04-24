import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-3xl font-semibold mb-6 mt-2 " [ngClass]="{'text-purple-900': textPink }">{{ title }}</h1>`
})
export class TitleComponent {

  /*
  * To making this Input() required and also changing it's name (alias)
  */
  @Input({ required: true, alias: 'titleText' }) title!: string;

  /*
  * Making this input easier to use: if is sent without value in the component call
  * will be set to true: <app-title textPink />
  */
  @Input({ transform: booleanAttribute }) textPink: boolean = false;
}
