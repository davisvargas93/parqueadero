import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { Vehiculo } from '../interfaces/vehiculo.interface';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Injectable()
export class VehiculosService {

  fireUrl = 'https://parqueadero-93d38.firebaseio.com/carros.json';
  vehiculoUrl = 'https://parqueadero-93d38.firebaseio.com/carros/';

  constructor( private http: Http ) { }

  nuevoVehiculo(vehiculo: Vehiculo) {
    const body = JSON.stringify (vehiculo);
    const herders = new Headers ({
      'Content-Type': 'application/json'
  });

  return this.http.post( this.fireUrl , body , { headers: herders })
                          .map(res => {
                            console.log(res.json());
                            return res.json();
                          });
  }
  actualizarVehiculo(vehiculo: Vehiculo , key$: string) {
    const body = JSON.stringify (vehiculo);
    const herders = new Headers ({
      'Content-Type': 'application/json'
  });
  const url = `${this.vehiculoUrl}/${key$}.json`;

  return this.http.put( url , body , { headers: herders })
                          .map(res => {
                            console.log(res.json());
                            return res.json();
                          });
  }

  getVehiculo(key$: string) {
    const url = `${this.vehiculoUrl}/${key$}.json`;
    return this.http.get(url)
          .map( res => res.json() );
  }
  getVehiculos() {
    return this.http.get(this.fireUrl)
          .map( res => res.json() );
  }
}
