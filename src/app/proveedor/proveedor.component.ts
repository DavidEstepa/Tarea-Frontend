import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  public proveedorForm: FormGroup;
  constructor(
    private formBulder: FormBuilder
  ) {
    this.proveedorForm = this.formBulder.group({
      Nombre: ['', Validators.required],
      NIT: ['', Validators.required],
      Correo: ['', Validators.required],
      PaginaWeb: ['', Validators.required],
      Direccion: ['', Validators.required],
      Telefono: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.proveedorForm.getRawValue());
    this.proveedorForm.reset();
    window.alert('Datos Registrados¡¡');
  }
}
