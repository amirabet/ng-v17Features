import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'

import { User } from '@interfaces/req-response.interface';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title titleText="User (convert observable to signal)" textPink />

    @if(this.user()){
      <section>
        <img [srcset]="user()!.avatar" 
        [alt]="user()!.first_name"
        class="rounded" />

        <h3 class="text-xl font-semibold">{{ userFullName() }}</h3>
        <p class="text-xs">{{ user()!.email }}</p>
      </section>
    } @else {
      <b>Loading user info...</b>
    }
  `
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  //public user = signal<User| undefined>(undefined);
  /*
  * To Signal Subscribes to an Observable and changes signal value
  */
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.usersService.getUserById( id ))
    )
  )

  public userFullName = computed<string>(() => this.user() ? `${this.user()?.first_name} ${this.user()?.last_name}` : 'No user name available');

  constructor() {}
}
