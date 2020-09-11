import { Component, OnInit } from '@angular/core';
import { PropietariosService } from 'src/app/services/propietarios.service';
import { Propietarios } from 'src/app/models/propietarios';
import { FormBuilder, FormGroup , Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit {

  formPropietarios: FormGroup;
  mensajeReposnse:any;


  
  constructor(private fb: FormBuilder , public propietariosService :PropietariosService) { 
    this.getPropietarios();
    this.formPropietarios = this.fb.group({
      nombreCompleto: ['', Validators.required],
      contacto: ['', Validators.required],
      casa: ['', Validators.required],
 
  });
  }

  ngOnInit(): void {
    
  }

  getPropietarios(){
    this.propietariosService.getPropietarios().subscribe(res => {
    this.propietariosService.listaPropietarios= res as Propietarios[];

    });
  }

  agregarPropietarios(){
    
    this.propietariosService.crearPropietarios(this.formPropietarios.value).subscribe(res => {
      this.mensajeReposnse = res;
      
      Swal.fire({
        icon: 'success',
        title: this.mensajeReposnse.status,
        showConfirmButton: false,
        timer: 3000
      })
      this.getPropietarios();
      this.resetForm();
    
    
      
    } );

    
    

    
  }

  resetForm(){
    this.formPropietarios.reset();
  }
}
