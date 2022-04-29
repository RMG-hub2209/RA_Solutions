import { Routes } from "@angular/router";
import { PrincipalComponent } from '../principal/principal.component';
import { AboutComponent } from "../about/about.component";
import { ServiciosComponent } from "../servicios/servicios.component";

export const routes: Routes = [
    {path: 'principal', component: PrincipalComponent},
    {path: 'about', component: AboutComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: '', redirectTo: '/principal', pathMatch: 'full'}
]