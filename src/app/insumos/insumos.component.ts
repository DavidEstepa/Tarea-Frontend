import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {
  public insumosForm: FormGroup;
  constructor(
    private formBulder: FormBuilder
  ) {
    this.insumosForm = this.formBulder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      proveedor: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.insumosForm.getRawValue());
    this.insumosForm.reset();
    window.alert('Datos Registrados¡¡');
  }
}
