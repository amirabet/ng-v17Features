import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  /*
  * Setting this changeDetection property, Angular is less aware on Change Detections
  * Won't detect "this.frameworkAsProperty.name = 'React!';" in cosntructor
  */
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title titleText="Change Detection" textPink />

    <b>Framework name:</b> {{ currentFramework() }}

    <pre class="pt-4">frameworkAsSignal
{{ frameworkAsSignal | json }}</pre>

    <pre class="pt-4">frameworkAsProperty
{{ frameworkAsProperty | json }}</pre>
  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${ this.frameworkAsSignal().name }`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016'
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2016'
  };

  constructor(){
    setTimeout(() =>{
      console.log('done');

      this.frameworkAsProperty.name = 'React!';

      /*
      * Let's modify the signal and changes will be reflected
      * when using changeDetection: ChangeDetectionStrategy.OnPush,
      */
      this.frameworkAsSignal.update(value => ({
        ...value, 
        name: 'Vue!'
      }))

    },3000)
  }

}
