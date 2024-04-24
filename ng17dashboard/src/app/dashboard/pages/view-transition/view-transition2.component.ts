import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
  <app-title titleText="View Transition2" textPink />

  <section class="flex justify-end">
    <img srcset="https://picsum.photos/id/237/200/300"
      alt="pixu dogo"
      width="200"
      height="300"
      style="view-transition-name: hero1"/>

      <div class="fixed bottom-16 right-8 bg-purple-600 w-32 h-32 rounded"
          style="view-transition-name: hero2"></div>

  </section>
  `
})
export default class ViewTransition2Component {

}
