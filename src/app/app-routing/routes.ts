import { Routes } from "@angular/router";
import { PrincipalComponent } from '../components/principal/principal.component';
import { AboutComponent } from "../components/about/about.component";
import { ServiciosComponent } from "../components/servicios/servicios.component";
import { RegisterComponent } from "../components/register/register.component";
import { RedesComponent } from "../components/redes/redes.component";
import { SoporteComponent } from "../components/soporte/soporte.component";
import { VentaComponent } from "../components/venta/venta.component";
import { VideoVigilanciaComponent } from "../components/video-vigilancia/video-vigilancia.component";
import { WebDesignComponent } from "../components/web-design/web-design.component";

export const routes: Routes = [
    {path: 'principal', component: PrincipalComponent},
    {path: 'about', component: AboutComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'redes', component: RedesComponent},
    {path: 'soporte', component: SoporteComponent},
    {path: 'venta', component: VentaComponent},
    {path: 'videovigilancia', component: VideoVigilanciaComponent},
    {path: 'webDesign', component: WebDesignComponent},
    {path: '', redirectTo: '/principal', pathMatch: 'full'}
]