import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Visitas } from '../models/visitas';


@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  seleccionarVisita : Visitas;
  listaVisitas : Visitas[];
  

  readonly URL_API = 'http://localhost:3000/api/visitas' ;

  constructor(private http : HttpClient) { 
    this.seleccionarVisita = new Visitas();
  }


  getVisitas(){
    return this.http.get(this.URL_API);
  }
  crearVisita(visita : Visitas){
    return this.http.post(this.URL_API , visita);
  }

  editarVisita(visita: Visitas){
    return this.http.put(this.URL_API  +  `/${visita._id}` , visita);
  }

  deleteVisita(_id : string){
    return this.http.delete(this.URL_API  +  `/${_id}`);
  }
}
