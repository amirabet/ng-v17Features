import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
/*
* Using alias to import instead of using full path.
* Alias are configured in tsconfig.json
* Sometimes VS need to be reset in order to track this changes
*/
//import { SideMenuComponent } from '../shared/side-menu/side-menu.component';
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './dashboard.component.html'
})

export default class DashboardComponent {

}
