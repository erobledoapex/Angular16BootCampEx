import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'a', loadChildren: () => import('./a/a.module').then(m => m.AModule)
    },
    {
        path: 'b', loadChildren: () => import('./b/b.module').then(m => m.BModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
