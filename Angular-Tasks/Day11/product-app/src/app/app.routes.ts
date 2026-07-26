import { Routes } from '@angular/router';
import { SmartProducts } from './features/smart-products/smart-products';
import { Home } from './features/home/home';
export const routes: Routes = [
    {path:"smart-products",component:SmartProducts},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:"home",component:Home},
];
