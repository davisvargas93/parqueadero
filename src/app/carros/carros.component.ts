import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';
import { Vehiculo } from '../interfaces/vehiculo.interface';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {
vehiculos: any [] = [];
  constructor(public _serviceVehiculos: VehiculosService) {
    this._serviceVehiculos.getVehiculos()
          .subscribe(data => {
            console.log(data);
            this.vehiculos = data;
            // tslint:disable-next-line:forin
            /*for (const key$ in data) {
                const h = data[key$];
                h.key$ = key$;
                this.vehiculos.push(data[key$]);
            }
            console.log(this.vehiculos);*/
          });
  }

  ngOnInit() {
  }

}
