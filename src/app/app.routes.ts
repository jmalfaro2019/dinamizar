import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [

    {path: '', redirectTo: 'Inicio', pathMatch: 'full'},
    {path: 'Inicio', component: InicioComponent},
    {path: 'Nosotros', component: NosotrosComponent},
    {path: 'Servicios', component: ServiciosComponent},
    {path: 'Contacto', component: ContactoComponent},
    {path: '**', redirectTo: 'Inicio'},

];
