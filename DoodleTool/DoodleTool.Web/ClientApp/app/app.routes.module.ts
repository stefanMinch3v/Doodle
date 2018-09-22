import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountModule } from './components/account/account.module';
import { CanvasModule } from './components/canvas/canvas.module';

const routes: Routes = [
    {
        path: 'canvas',
        loadChildren: () => CanvasModule
    },
    {
        path: 'account',
        loadChildren: () => AccountModule // lazy loading items...
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
