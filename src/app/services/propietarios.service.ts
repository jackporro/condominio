import { Injectable } from '@angular/core';
import { Propietarios } from '../models/propietarios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  listaPropietarios: Propietarios[];
  seleccionarPropietario : Propietarios;
  

  readonly URL_API = 'http://localhost:3000/api/propietarios' ;

  constructor(private http : HttpClient) { 
    this.seleccionarPropietario = new Propietarios();
  }


  getPropietarios(){
    return this.http.get(this.URL_API);
  }

  crearPropietarios(propietarios : Propietarios){
    console.log("BBBBB" , propietarios);
    return this.http.post(this.URL_API , propietarios);
  }

  editarPropietarios(propietarios: Propietarios){
    return this.http.put(this.URL_API  +  `/${propietarios._id}` , propietarios);
  }

  deletePropietarios(_id : string){
    return this.http.delete(this.URL_API  +  `/${_id}`);
  }
}
