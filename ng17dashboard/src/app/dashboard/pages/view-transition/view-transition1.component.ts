import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
  <app-title titleText="View Transition1" textPink />

  <section class="flex justify-start">
    <img srcset="https://picsum.photos/id/237/200/300"
      alt="pixu dogo"
      width="200"
      height="300"
      style="view-transition-name: hero1"/>

      <div class="bg-pink-600 w-56 h-56"
          style="view-transition-name: hero2"></div>

  </section>
  `
})
export default class ViewTransition1Component {

}
