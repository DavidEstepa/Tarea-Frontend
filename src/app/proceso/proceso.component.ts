import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css']
})
export class ProcesoComponent implements OnInit {
  public procesoForm: FormGroup;
  constructor(
    private formBulder: FormBuilder
  ) {
    this.procesoForm = this.formBulder.group({
      Proceso: ['', ],
      NombreEmpleado: ['', ],
      Numerodeseriemanta: ['', ],
      TelaConductora: ['', ],
      Telapiezoresistiva: ['', ],
      Telasoporte: ['', ],
      Velcro: ['', ],
      Tarjetaelectronica: ['', ],
      Cajadecontrol: ['', ],
      Correasdesujecion: ['', ],
      Forro: ['', ],
    });
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const data = this.procesoForm.getRawValue();
    const claves = Object.keys(data);
    let i: number;
    let total = 0;
    for (i = 0; i < 3; i++) {
      if (data[claves[i]] === '') {
        total++;
      }
    }
    if (total === 0) {
      window.alert('Datos Registrados¡¡');
      console.log(this.procesoForm.getRawValue());
    }
    else {
      window.alert('Ingrese los datos Correctamente');
    }
    this.procesoForm.reset();
  }
}
