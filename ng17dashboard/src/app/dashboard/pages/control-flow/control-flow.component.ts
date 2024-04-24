import { Component, signal } from '@angular/core';

import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C'| 'D';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html'
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  /*
  * Signals can be transformed to readonly this way:
  */
  //public showContent = signal(false).asReadonly;

  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal<string[]>([]);


  public toggleContent() {
    this.showContent.update(value => !value);
  }

  public changeGrade() {
    this.grade.update(value => {
      if(value === 'A')
        return 'B'
      else if (value === 'B')
        return 'C'
      else if (value === 'C')
        return 'D'
      else
        return 'A'
    });
  }

  public addFramework() {
    this.frameworks2.update(value => value = ["Angular v 17!!"]);
  }

  public removeFramework() {
    this.frameworks2.update(value => value = []);
  }
}
