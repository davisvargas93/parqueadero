import { Component, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';
import { Vehiculo } from '../interfaces/vehiculo.interface';
import { Router } from '@angular/router';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent implements OnInit {

  vehiculo: Vehiculo = {
    posicion: '',
    horaEntrada: '',
    horaSalida: '',
    fechaEntrada: '',
    fechaSalida: '',
    placa: '',
    marca: ''
  };
  constructor( private _serviceVehiculo: VehiculosService , private route: Router) { }

  ngOnInit() {
  }
  actualizar() {
      this._serviceVehiculo.nuevoVehiculo(this.vehiculo)
                    .subscribe(data => {
                      this.route.navigate(['/heroe', data.name]);
                    },
                    error => console.error(error)
                    );
  }

}
