import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public EmpleadosForm: FormGroup;
  constructor(
    private formBulder: FormBuilder
    ) {
      this.EmpleadosForm = this.formBulder.group({
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        documento: ['', Validators.required],
        edad: ['', Validators.required],
        correo: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        eps: ['', Validators.required],
      });
    }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.EmpleadosForm.getRawValue());
    this.EmpleadosForm.reset();
    window.alert('Datos Registrados¡¡');
  }
}
