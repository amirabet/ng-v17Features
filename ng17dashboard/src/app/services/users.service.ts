import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import { delay, map } from 'rxjs';

/*
* Usign the keyword "type" in interfaces import 
* we assure that this code won't be transpilated to JS
*/
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response.interface';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /*
  * This injection won't be visible "per se" to another standalone components.
  * We also need to reference it in importProvidersFrom(app.config).
  */
  private http = inject(HttpClient);

  /*
  * Create a signal that is private
  * naming the prop with "#" that
  * will keep the private status in ECMAscript
  * https://stackoverflow.com/questions/59641564/what-are-the-differences-between-the-private-keyword-and-private-fields-in-types
  */
  #state = signal<State>({
    loading: true,
    users: []
  });

  /*
  * Using public computed signals to expose #state to components whom injected this service
  */
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);


  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500)) //simulate a delay
      .subscribe(response => {
        this.#state.set({
          loading: false,
          users: response.data
        })
      })
  }

  getUserById(id: string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map(response => response.data)
      );
  }
}
