import { Routes } from '@angular/router';
import{CardComponent} from'../home/home.component'
import { AboutComponent } from './about/about';
import { ContactUsComponent } from './contact-us/contact-us';
import { LoadComponent } from './load/load';
export const routes: Routes = [
    {path:"",redirectTo:'./home',pathMatch:'full'},
    {path:'home',component:CardComponent},
    {path:'about',component:AboutComponent},
    {path:'contactUs',component:ContactUsComponent},
    {path:'load',component:LoadComponent},
    
];
