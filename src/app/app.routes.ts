import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'a', loadChildren: () => import('./a/a.module').then(m => m.AModule)
    },
    {
        path: 'b', loadChildren: () => import('./b/b.module').then(m => m.BModule)
    },
    {
        path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)
    },
    {
        path: 'individual', loadChildren: () => import('./individual/my-first.module').then(m => m.MyFirstModule)
    },

    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
