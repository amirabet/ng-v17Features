import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: Route[] = routes
    .map( route => route.children ?? [])
    .flat()
    .filter ( route => route && route.path )
    .filter ( route => !route.path?.includes(':'));

}
