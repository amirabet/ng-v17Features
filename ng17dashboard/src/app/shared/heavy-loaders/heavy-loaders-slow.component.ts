import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector:'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="p-4 h-[600px] w-full" [ngClass]="cssClass">
      <h1>I'm a heavy Component! 🤟🏻</h1>
    </section>
  
  `
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true}) cssClass!: string;

  constructor(){
    console.log('HeavyLoadersSlowComponent started...');

    /*
    * We make this blocking (non recommended!) JS code
    *  that blocks JS thread and show all benefits of @defer and @placeholder 
    * (used in defer-views.component.html)
    */
    const start = Date.now();
    while (Date.now() - start < 3000){}

    console.log('HeavyLoadersSlowComponent Loaded!');
  }
}
