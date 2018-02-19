import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgModel} from '@angular/forms';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { ParqueaderosComponent } from './parqueaderos/parqueaderos.component';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { CarrosComponent } from './carros/carros.component';
import { MotosComponent } from './motos/motos.component';
import { VehiculosService } from './services/vehiculos.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ParqueaderosComponent,
    ParqueaderoComponent,
    CarrosComponent,
    MotosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [VehiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
