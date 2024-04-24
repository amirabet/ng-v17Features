import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersService } from '@services/users.service';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TitleComponent, ],
  templateUrl: './users.component.html'
})
export default class UsersComponent {
  public usersService = inject(UsersService);

  constructor() {
    /*
    * This computed signals are available to get 
    * "this.usersService.#state" (private) values
    */
   //console.log(this.usersService.users());
    //this.usersService.users()
    //this.usersService.loading()
  }
}
