import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators, FormControl } from '@angular/forms';
import { VisitasService } from 'src/app/services/visitas.service';
import {formatDate} from '@angular/common';
import Swal from 'sweetalert2';
import { Visitas } from 'src/app/models/visitas';
 


@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css'],
  providers: [VisitasService]
})
export class VisitasComponent implements OnInit {
  formVisitas: FormGroup;
  today = new Date();
  mensajeresponse : any;

  

  constructor(private fb: FormBuilder , public visitasService : VisitasService) {
    
    
    this.formVisitas = this.fb.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      patente: ['', Validators.required],
      casa: ['', Validators.required],
      fecha:[{value :formatDate(this.today , 'dd-MM-yyyy' , 'en-US' ), disabled: true }, Validators.required],
  });
  //asi tambien se puede dejar disabled el campo fecha 
  //this.formVisitas.get('fecha').disable();
    
    
  }
  
  ngOnInit(){
    this.listarVisitas();
    
  }
  agregarVisitas(){
  
    this.visitasService.crearVisita(this.formVisitas.value).subscribe(res => {
      
      this.mensajeresponse = res;
      
      Swal.fire({
        icon: 'success',
        title: this.mensajeresponse.status,
        showConfirmButton: false,
        timer: 3000
      })

      this.listarVisitas();
    } );

    
    this.resetForm();

  }

  listarVisitas(){
    this.visitasService.getVisitas().subscribe(res => {
      this.visitasService.listaVisitas= res as Visitas[];
  
      });

  }

  resetForm(){
    
    this.formVisitas.reset();
    this.formVisitas.get('fecha').setValue(formatDate(this.today , 'dd-MM-yyyy' , 'en-US' ));
  }

}
