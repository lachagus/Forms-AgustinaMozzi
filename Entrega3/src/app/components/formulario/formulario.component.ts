
import { Component, OnInit } from '@angular/core';

//Para el uso de formularios
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  

  formContacto: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(8)]),
    domicilio: new FormControl(''),
    ciudad: new FormControl(''),
    provincia: new FormControl(''),
    cp: new FormControl('') 

  }

  )

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formContacto)
  }
}
