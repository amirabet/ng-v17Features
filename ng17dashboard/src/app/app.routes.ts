import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        /*
        * Forma de lazy load antigua, usa el then(c => c.ComponentName )
        */
        //loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
        /*
        * La simplificamos añadiendo "default" al export de la clase del componente: 
        * export default class DashboardComponent 
        */
        loadComponent: () => import('./dashboard/dashboard.component'),
        children : [
            {
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent:  () => import('./dashboard/pages/change-detection/change-detection.component'),
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent:  () => import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent:  () => import('./dashboard/pages/defer-options/defer-options.component'),
            },
            {
                path: 'defer-views',
                title: 'Defer views',
                loadComponent:  () => import('./dashboard/pages/defer-views/defer-views.component'),
            },
            {
                path: 'user/:id',
                title: 'User',
                loadComponent:  () => import('./dashboard/pages/user/user.component'),
            },
            {
                path: 'user-list',
                title: 'Users',
                loadComponent:  () => import('./dashboard/pages/users/users.component'),
            },
            {
                path: 'view-transition1',
                title: 'View Transition1',
                loadComponent:  () => import('./dashboard/pages/view-transition/view-transition1.component'),
            },
            {
                path: 'view-transition2',
                title: 'View Transition2',
                loadComponent:  () => import('./dashboard/pages/view-transition/view-transition2.component'),
            },
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full',
            },
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }

];
