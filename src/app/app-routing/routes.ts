import { Routes } from "@angular/router";
import { PrincipalComponent } from '../principal/principal.component';
import { AboutComponent } from "../about/about.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { RegisterComponent } from "../register/register.component";

export const routes: Routes = [
    {path: 'principal', component: PrincipalComponent},
    {path: 'about', component: AboutComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', redirectTo: '/principal', pathMatch: 'full'}
]