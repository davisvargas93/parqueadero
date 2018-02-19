import { Component, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';
import { Vehiculo } from '../interfaces/vehiculo.interface';
import { Router, ActivatedRoute } from '@angular/router';
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

  nuevo = false;

  id: string;

  constructor( private _serviceVehiculo: VehiculosService , private route: Router, private activeRoute: ActivatedRoute) { 
    this.activeRoute.params
      .subscribe(parametros => {this.id = parametros[ 'id' ]; } );
      if (this.id !== 'nuevo' ) {
        this._serviceVehiculo.getVehiculo(this.id)
                  .subscribe(data => this.vehiculo = data);
      }
    }

  ngOnInit() {
  }
  actualizar() {

if (this.id === 'nuevo') {
    this._serviceVehiculo.nuevoVehiculo(this.vehiculo)
    .subscribe(data => {
      this.route.navigate(['/heroe', data.name]);
    },
    error => console.error(error)
    );
} else {
    console.log(this.id);
    this._serviceVehiculo.actualizarVehiculo(this.vehiculo, this.id)
    .subscribe(data => {

    },
    error => console.error(error)
  );
}


  }

}
