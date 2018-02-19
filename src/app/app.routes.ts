import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ParqueaderosComponent } from './parqueaderos/parqueaderos.component';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { CarrosComponent } from './carros/carros.component';
import { MotosComponent } from './motos/motos.component';


const routes: Routes = [
    { path: 'parqueaderos', component: ParqueaderosComponent ,
    children: [ {path: 'carros', component: CarrosComponent },
                {path: 'motos', component: MotosComponent }
            ]
},
    { path: 'parqueadero/:id', component: ParqueaderoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'parqueaderos'     },

];


export const APP_ROUTING = RouterModule.forRoot(routes);
